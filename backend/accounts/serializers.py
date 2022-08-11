from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import (
    smart_bytes,
    smart_str,
    DjangoUnicodeDecodeError,
    force_str,
)
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.sites.shortcuts import get_current_site
from django.shortcuts import redirect
from django.urls import reverse

from rest_framework.exceptions import AuthenticationFailed
from rest_framework import serializers

from .models import User
from .utils import Util


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "email", "password"]
        extra_kwargs = {
            "password": {"write_only": True},
        }

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField(min_length=5)

    class Meta:
        fields = ["email"]


class SetNewPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=68, min_length=8, write_only=True)
    token = serializers.CharField(min_length=1, write_only=True)
    uidb64 = serializers.CharField(min_length=1, write_only=True)

    class Meta:
        fields = ["password", "token", "uidb64"]

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        id = force_str(urlsafe_base64_decode(validated_data.get("uidb64")))
        instance = User.objects.get(id=id)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
