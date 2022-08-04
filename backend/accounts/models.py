from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator


phone_validator = RegexValidator(r"^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$", "The phone number provided is invalid")


class User(AbstractUser):
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=200, validators=[phone_validator], unique=True)

    REQUIRED_FIELDS = ["phone", "email"]