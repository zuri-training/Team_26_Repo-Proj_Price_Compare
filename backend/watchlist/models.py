from django.db import models
from django.contrib.postgres.fields import ArrayField
from products.models import Product
from accounts.models import User

# Create your models here.
class WatchListItem(models.Model):
    user=models.ForeignKey(
        User,
        related_name='userwatchlistitems',
        on_delete=models.CASCADE,
    )
    product=models.ForeignKey(
        Product,
        related_name='watchlistitems',
        on_delete=models.CASCADE,
    )
    desired_price=models.DecimalField(max_digits=10, decimal_places=2,null=True)
    price_changes=ArrayField(ArrayField(models.DecimalField(max_digits=30, decimal_places=2)))
    created_on=models.DateTimeField(auto_now_add=True, null=True)
    modified_on=models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self) -> str:
        return self.product
