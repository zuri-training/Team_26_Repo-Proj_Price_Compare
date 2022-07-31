from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.

User = get_user_model() # refers to the user's table

class Product:
    # Use this for product table
    pass

class Category:
    # use this for category table
    
    class Meta:
        verbose_plural_name = "Categories"



#This is the model for the reviews, rating and likes
RATING_CHOICES = (
                (0,'0'),
                (1,'1'),
                (2,'2'),
                (3,'3'),
                (4,'4'),
                (5,'5'),
                )

class Review(models.Model):
    reviewer    = models.ForeignKey(User, related_name='review', on_delete=models.CASCADE)
    product     = models.ForeignKey(Product, related_name='review', on_delete=models.CASCADE, null=True)
    date_time   = models.DateTimeField(auto_now_add=True)
    comment     = models.TextField(max_length=250, blank=True, null=True)
    rating      = models.CharField(choices=RATING_CHOICES, max_length=150)
    loved       = models.BooleanField(default=False)
    
    class Meta:
        ordering = ('-date_time',)

    def __str__(self):
        return f'review by {self.reviewer} on {self.product}'
    
    def total_love(self):
        return self.loved.count()



