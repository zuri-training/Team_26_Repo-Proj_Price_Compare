from django.contrib.auth.models import AbstractUser
from rest_framework_simplejwt.tokens import RefreshToken
from watchlist.models import WatchListItem
from django.db import models

# Create your models here.


class User(AbstractUser):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    is_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    watchlist_product= models.ForeignKey(
        WatchListItem,
        related_name='watchlist_items_for_user',
        on_delete=models.SET_NULL,null=True
    )

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = []


    def tokens(self):
        refresh = RefreshToken.for_user(self)

        return {
            "refresh": str(refresh),
            "access":str(refresh.access_token)
        }