from django.contrib.auth import get_user_model
from django.utils.text import slugify
from django.db import models

from products.validators import max_rating_validator, min_price_validator

# Create your models here.

Q = models.Q
User = get_user_model()  # refers to the user's table


class Category(models.Model):
    parent = models.ForeignKey("self", on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=50)
    image_url = models.URLField()
    slug = models.SlugField(blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    is_sub_category = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(Category, self).save(*args, **kwargs)

    def get_categories(self):
        return [self.parent, self]

    def get_parent_category(self):
        return self.parent

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Categories"


class Product(models.Model):
    # Use this for product table
    name = models.CharField(max_length=50)
    brand = models.CharField(max_length=50)
    description = models.TextField()
    # CASCADE or DO_NOTHING?
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="products"
    )
    slug = models.SlugField(blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    modified_on = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(f"{self.name} {self.brand}")
        super(Product, self).save(self, *args, *kwargs)

    def __str__(self):
        return f"{self.name} by {self.brand}"

    def get_absolute_url(self):
        pass

    def get_sales(self):
        # return sales instance of product
        return self.self.sales_details.all()

    def get_categories(self):
        # return category and sub category of product (if any)
        return self.categories.get_both()

    def get_subcategory(self):
        return self.categories

    def get_parent_category(self):
        return self.categories.get_parent_category()

    class Meta:
        # combination of product name and brand should be unique except where they are both empty
        constraints = [
            models.UniqueConstraint(
                name="unique_product_and_brand",
                fields=["name", "brand"],
                condition=~Q(name="") & ~Q(brand=""),
            )
        ]


class Store(models.Model):
    name = models.CharField(max_length=50)
    url = models.URLField()

    def __str__(self):
        return self.name


class SalesDetail(models.Model):
    product = models.ForeignKey(
        Product, related_name="sales_details", on_delete=models.CASCADE
    )
    store = models.ForeignKey(Store, related_name="products", on_delete=models.CASCADE)
    # sku = models.CharField(max_length=50)
    seller = models.CharField(max_length=50)
    price = models.DecimalField(
        max_digits=15, decimal_places=2, default=1.00, validators=[min_price_validator]
    )
    # price_changes = ArrayField(DecimalField(decimal_places=2), size=5)
    url = models.URLField()
    available = models.BooleanField(default=True)
    description = models.TextField()

    def get_store_name(self):
        return self.store.name

    def get_price_history(self, n=5):
        pass
        # return self.price_changes

    def __str__(self):
        return f"{self.product.name} sold by {self.seller}"


# This is the model for the reviews, rating and likes
class Review(models.Model):
    reviewer = models.ForeignKey(User, related_name="review", on_delete=models.CASCADE)
    product = models.ForeignKey(
        Product, related_name="review", on_delete=models.CASCADE, null=True
    )
    date_time = models.DateTimeField(auto_now_add=True)
    comment = models.TextField(max_length=250, blank=True, null=True)
    rating = models.DecimalField(
        max_digits=3, decimal_places=2, validators=[max_rating_validator]
    )
    loved = models.ManyToManyField(User, related_name="liked_products")
    # store reference
    store = models.ForeignKey(
        SalesDetail, on_delete=models.CASCADE, related_name="reviews", blank=True
    )

    class Meta:
        ordering = ("-date_time",)

    def __str__(self):
        return f"review by {self.reviewer} on {self.product}"

    def total_love(self):
        return self.loved.count()

    def get_store(self):
        return self.store.get_store_name()
