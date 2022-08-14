from django.utils.encoding import (
    smart_bytes,
    smart_str,
    DjangoUnicodeDecodeError,
    force_str,
)
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.contrib.sites.shortcuts import get_current_site
from django.shortcuts import redirect
from django.conf import settings
from django.urls import reverse

from rest_framework import status,permissions
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import status

from .serializers import (
    UserSerializer,
    PasswordResetSerializer,
    SetNewPasswordSerializer,
)
from .models import User
from .utils import Util

import jwt, datetime


# Create your views here.
class RegisterView(APIView):
    permission_classes=[AllowAny]

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data = serializer.data
        user = User.objects.get(email=user_data["email"])

        token = RefreshToken.for_user(user).access_token
        current_site = get_current_site(request).domain
        relative_url = reverse("accounts:email-activate")
        absolute_url = (
            "http://" + current_site + relative_url + "?token=" + smart_str(token)
        )
        email_body = (
            "hi "
            + user.first_name
            + " verify your email with this link \n"
            + absolute_url
        )

        data={'email_body':email_body, 'email_subject': 'Verify your email','from_email': 'info.scoutvendor@yahoo.com', 'to_email':user.email}
        Util.send_mail(data)

        return Response({'data':user_data, 'message':'activation link have been sent the email you provided'}, status=status.HTTP_201_CREATED)


class EmailVerifyView(APIView):
    permission_classes=[AllowAny]

    def get(self, request):
        token = request.GET.get("token")

        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms="HS256")
            print(payload)
            user = User.objects.get(id=payload["user_id"])
            if not user.is_verified:
                user.is_verified = True
                user.save()
            return Response(
                {"email": "Successfully Activated your account"},
                status=status.HTTP_200_OK,
            )

        except jwt.ExpiredSignatureError as identifier:
            return Response(
                {"error": "Token has expired"}, status=status.HTTP_408_REQUEST_TIMEOUT
            )

        except jwt.exceptions.DecodeError as identifier:
            return Response(
                {"error": "invalid Token"}, status=status.HTTP_400_BAD_REQUEST
            )


class LoginView(APIView):
    permission_classes=[AllowAny]


    def post(self, request):
        email = request.data["email"]
        password = request.data["password"]

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed("User not found!")

        if not user.check_password(password):
            raise AuthenticationFailed("Incorrect password!")

        payload = {
            "id": user.id,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=24),
            "iat": datetime.datetime.utcnow(),
        }

        token = jwt.encode(payload, "secret", algorithm="HS256")
        serializer = UserSerializer(user)

        response = Response()

        response.set_cookie(key="jwt", value=token, httponly=True)
        response.data = {"tokens": user.tokens(), "data":serializer.data}
        return response


class UserView(APIView):
    permission_classes=[IsAuthenticated]

    def get(self, request):
        token = request.COOKIES.get("jwt")

        if not token:
            raise AuthenticationFailed("Unauthenticated!")

        try:
            payload = jwt.decode(token, "secret", algorithms=["HS256"])

        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Unauthenticated!")

        user = User.objects.filter(id=payload["id"]).first()
        if not user.is_active:
            user.is_active = True

        serializer = UserSerializer(user)

        return Response(serializer.data)


class RequestPasswordResetEmail(APIView):
    permission_classes=[AllowAny]

    def post(self, request):
        serializer = PasswordResetSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save
        data =serializer.data

        email = data["email"]
        if not User.objects.filter(email=email).exists():
            raise AuthenticationFailed("User not found!")

        user = User.objects.get(email=email)
        uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
        token = PasswordResetTokenGenerator().make_token(user)

        current_site = get_current_site(request).domain
        relative_url = reverse(
            "accounts:reset-password", kwargs={"uidb64": uidb64, "token": token}
        )
        absolute_url = "http://" + current_site + relative_url
        email_body = (
            "Hi "
            + user.first_name
            + " reset your password with this link \n"
            + absolute_url
        )

        data={'email_body':email_body, 'email_subject': 'Password Reset', 'to_email':user.email, 'from_email':'info.scoutvendor@yahoo.com'}
        Util.send_mail(data)

        return Response(
            {"success": "A link have been sent to your mail to reset your password"},
            status=status.HTTP_200_OK,
        )


class PasswordResetTokenCheckView(APIView):
    permission_classes=[AllowAny]

    def get(self, request, uidb64, token):
        id = smart_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(id=id)

        try:
            if not PasswordResetTokenGenerator().check_token(user, token):
                return Response(
                    {"error": "Invalid Token, Please request another token"},
                    status=status.HTTP_401_UNAUTHORIZED,
                )
            return Response(
                {
                    "success": True,
                    "message": "Credentials Valid",
                    "uidb64": uidb64,
                    "token": token,
                },
                status=status.HTTP_202_ACCEPTED,
            )

        except DjangoUnicodeDecodeError as identifier:
            if not PasswordResetTokenGenerator().check_token(user, token):
                return Response(
                    {"error": "Invalid token, Please request for another token"}
                )


class SetNewPasswordView(generics.UpdateAPIView):
    permission_classes=[AllowAny]

    def patch(self, request):
        serializer = SetNewPasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        data = request.data
        id = force_str(urlsafe_base64_decode(data["uidb64"]))
        user = User.objects.get(id=id)
        if not PasswordResetTokenGenerator().check_token(user, data["token"]):
            raise AuthenticationFailed("Invalid token", 401)
        user.set_password(data["password"])
        user.save()
        return Response(
            {"message": "Password Reset Successful"}, status=status.HTTP_200_OK
        )


class LogoutView(APIView):
    permission_classes=[IsAuthenticated]

    def post(self, request):
        response = Response()
        response.delete_cookie("jwt")
        response.data = {"message": "success"}
        return response