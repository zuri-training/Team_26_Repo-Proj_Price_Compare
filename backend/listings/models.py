from django.db import models

# Create your models here.
class Category(models.Model):
    name= models.CharField(
        max_length=100,
        unique=True
    )
    slug= models.SlugField(
        max_length=100,
        unique=True
    )
    thumbnail= models.ImageField(upload_to='categories/')

    class Meta:
        ordering=('-name',)

class Product(models.Model):
    category=models.ForeignKey(
        Category,
        related_name='products'
        on_delete=models.CASCADE
    )
    name=models.CharField(max_length=100, db_index=True)
    prices_links_jumia=models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    prices_links_konga=models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    prices_links_amazon=models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)

 
    

    images=JSONField(encoder=None)
    description(

    )
    links_to_shop(

    )
    available(

    )

