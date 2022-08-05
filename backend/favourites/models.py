from django.db import models
# from products.models import Product
from price_compare import settings

# Create your models here.
class FavouriteProduct(models.Model):
    created = models.DateTimeField(auto_now_add=True, null=True)
    # user=models.ForeignKey(
    #     # settings.AUTH_USER_MODEL,
    #     related_name='userfavouriteproducts',
    #     on_delete=models.CASCADE,
    # )
    # product=models.ForeignKey(
    #     Product,
    #     related_name='favouriteproducts',
    #     on_delete=models.CASCADE,
    #     null=True
    # )
