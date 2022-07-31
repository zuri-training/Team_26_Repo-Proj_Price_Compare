from django.urls import path
from .views import EmailVerifyView,LoginView, LogoutView, RegisterView, UserView

app_name = 'accounts'

urlpatterns =[
    path('register', RegisterView.as_view()),
    path('verify-email', EmailVerifyView.as_view(), name='email-activate'),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view())
]

