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
    product=models.ForeignKey(
        Product,
        related_name='watchlistitem',
        on_delete=models.CASCADE,
    )
    current_price = models.DecimalField(max_digits=10, decimal_places=2,null=True,blank=True)
    desired_price=models.DecimalField(max_digits=10, decimal_places=2,null=True,blank=True)
    price_changes=ArrayField(ArrayField(models.DecimalField(max_digits=10, decimal_places=2,null=True, blank=True),null=True,blank=True),null=True,blank=True)
    created_on=models.DateTimeField(auto_now_add=True)
    modified_on=models.DateTimeField(auto_now_add=True)


    class Meta:
        ordering = ('product','-created_on')

    def get_absolute_url(self):
        """Returns the URL to access a particular instance of WatchListItem"""
        return reverse('model-detail-view', args=[str(self.id)])

    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return self.product.name

     #get current product price
    def get_current_price(self):
        return     
        self.current_price = SaleDetail.objects.filter(self.product).order_by('-price').last()



    def save(self, *args, **kwargs):
        self.current_price = self.get_current_price()
       
        # check if user had set their desired price
        if self.desired_price != None:
            if self.price_changes is None:
                self.price_changes=price_changes.append(self.current_price)

        else:
            self.price_changes=None
        
        super().save(*args, **kwargs)





