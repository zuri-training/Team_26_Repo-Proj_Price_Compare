from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView, EmailVerifyView,LoginView, UserView,RequestPasswordResetEmail, PasswordResetTokenCheckView, SetNewPasswordView, LogoutView

app_name = 'accounts'

urlpatterns =[
    path('register', RegisterView.as_view(), name='register'),
    path('verify-email', EmailVerifyView.as_view(), name='email-activate'),
    path('login', LoginView.as_view(), name = 'login'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('user', UserView.as_view(), name = 'user'),
    path('request-password-reset', RequestPasswordResetEmail.as_view(), name = 'request-password-reset'),
    path('reset-password/<uidb64>/<token>', PasswordResetTokenCheckView.as_view(), name = 'reset-password'),
    path('change-password', SetNewPasswordView.as_view(), name = 'change-password'),
    path('logout', LogoutView.as_view(), name = 'logout')
]

