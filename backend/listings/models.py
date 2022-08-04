from django.db import models

# Create your models here.
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
        verbose_name_plural="categories"

    def __str__(self):
        return self.name


class SubCategory(models.Model):
    category=models.ForeignKey(
        Category,
        related_name='subcategories',
        on_delete=models.CASCADE
    )
    name=models.CharField(max_length=100,unique=True)
    slug= models.SlugField(
        max_length=100,
        unique=True
    )
        
    class Meta:
        ordering=('-name',)
        verbose_name_plural="subcategories"

    def __str__(self):
        return self.name


class Product(models.Model):
    subcategory=models.ForeignKey(
        SubCategory,
        related_name='products',
        on_delete=models.CASCADE
    )
    
    name=models.CharField(max_length=100, unique=True)
    brand=models.CharField(max_length=100)
    slug= models.SlugField(max_length=100,unique=True)
    description=models.TextField()
    created_on=models.DateField()
    modified_on=models.DateField()

    class Meta:
        ordering=('-brand',)
        verbose_name_plural='products'
    
    def __str__(self):
        return self.name

class ProductImage(models.Model):
    product=models.ForeignKey(
        Product,
        on_delete=models.SET_NULL, null=True,blank=True
    )    
    image=models.ImageField(
        upload_to="productimages/"
    )
    class Meta:
        ordering=('-product',)
        verbose_name_plural='productimages'



class Shop(models.Model):
    name = models.CharField(
        max_length=100,
        unique=True
    )
    class Meta:
        ordering=('-name',)
        verbose_name_plural='Shops'
    
    def __str__(self):
        return self.name


class Sale_Detail(models.Model):
    product=models.ForeignKey(
        Product,
        related_name='product',
        on_delete=models.CASCADE
    )
    shop=models.ForeignKey(
        Shop,
        related_name="shop",
        on_delete=models.CASCADE
    )
    price=models.DecimalField(max_digits=10, decimal_places=2)
    link_to_shop=models.URLField(max_length=250)
    available=models.BooleanField(default=True)
    
    class Meta:
        ordering=('price',)
        verbose_name_plural='sale_details'
    
   

