from django.urls import path

from rest_framework_simplejwt.views import TokenRefreshView,TokenRefreshView, TokenVerifyView

from .views import (
    RegisterView,
    EmailVerifyView,
    LoginView,
    UserView,
    RequestPasswordResetEmail,
    PasswordResetTokenCheckView,
    SetNewPasswordView,
    LogoutView,
)

app_name = "accounts"

urlpatterns = [
    path("register", RegisterView.as_view(), name="register"),
    # user registration path, sends activation email to user's email
    path("verify-email", EmailVerifyView.as_view(), name="email-activate"),
    # used to verify the user's email
    path("login", LoginView.as_view(), name="login"),
    # logs user in 
    path("token/refresh", TokenRefreshView.as_view(), name="token_refresh"),
    # used to refresh access token when expired or invalid
    path("user", UserView.as_view(), name="user"),
    # used to get user's details
    path(
        "request-password-reset",
        RequestPasswordResetEmail.as_view(),
        name="request-password-reset",
    ),
    # request password reset token, token sent to user's mail
    path(
        "reset-password/<uidb64>/<token>",
        PasswordResetTokenCheckView.as_view(),
        name="reset-password",
    ),
    # get the token sent to the user alongside with the users id, used to verify if the user exist
    path("change-password", SetNewPasswordView.as_view(), name="change-password"),
    # used to change user's password to new one
    path("logout", LogoutView.as_view(), name="logout"),
    # to log out user
]
