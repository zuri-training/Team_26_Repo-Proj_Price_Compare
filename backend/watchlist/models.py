from django.db import models
from django.contrib.postgres.fields import ArrayField
from products.models import Product,SalesDetail
from accounts.models import User

# Create your models here.
class WatchListItem(models.Model):
    user=models.ForeignKey(
        User,
        related_name='userwatchlistitem',
        on_delete=models.CASCADE,
    )
    watchlist_item=models.ForeignKey(
        Product,
        related_name='watchlistitem',
        on_delete=models.CASCADE,
    )
    image_url = models.URLField(max_length=200)
    slug = models.CharField(max_length=100,null=True,blank=True)
    current_price = models.DecimalField(max_digits=20, decimal_places=2, null=True,blank=True)
    desired_price=models.DecimalField(max_digits=10, decimal_places=2,null=True,blank=True)
    price_changes=ArrayField(models.DecimalField(max_digits=10, decimal_places=2,null=True, blank=True))
    created_on=models.DateTimeField(auto_now_add=True)
    modified_on=models.DateTimeField(auto_now_add=True)


    class Meta:
        ordering = ('watchlist_item','-created_on')

    def get_absolute_url(self):
        """Returns the URL to access a particular instance of WatchListItem"""
        return reverse('model-detail-view', args=[str(self.id)])

    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return self.watchlist_item.name

    #  #get current product price
    # def get_current_price(self):
    #     return     
    #     self.current_price = SaleDetail.objects.filter(self.product).order_by('-price').last()









