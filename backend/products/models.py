from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.

User = get_user_model() # refers to the user's table

class Product:
    # Use this for product table


class Category:
    # use this for category table
    
    class Meta:
        verbose_plural_name = "Categories"



