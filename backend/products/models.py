from django.db import models

# Create your models here.
class SubCategoryManager(models.Manager):
    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(is_sub_category=True)


class MainCategoryManager(models.Manager):
    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(is_sub_category=False)

class Category(models.Model):
    name= models.CharField(
        max_length=100,
        unique=True
    )
    slug= models.SlugField(
        max_length=100,
        unique=True
    )
    parent = models.ForeignKey(
        "self",
        on_delete=models.CASCADE,
        related_name="sub_categories",
        blank=True,
        null=True,
    )
    is_sub_category = models.BooleanField(default=False)
    Objects = models.Manager()
    subCategories = SubCategoryManager()
    parentCategories = MainCategoryManager()


    class Meta:
        ordering=('-name',)
        verbose_name_plural="categories"

    def __str__(self):
        return self.name

    def get_subcategory(self):
        if not self.is_sub_category:
            return Category.objects.filter(parent=self)
        return []

    def get_parent_category(self):
        if self.is_sub_category:
            return self.parent
        return []





class Product(models.Model):
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="products",
        limit_choices_to={"is_sub_category": True},
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
    
   

