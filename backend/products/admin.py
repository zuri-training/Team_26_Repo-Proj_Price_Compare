from django.contrib import admin
from .models import *
# Register your models here.





#Review, rating and loved admin board
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name','description')

admin.site.register(Product, ProductAdmin)


class ReviewAdmin(admin.ModelAdmin):
    list_display = ('product', 'comment', 'date_time', 'rating', 'loved', 'reviewer')

admin.site.register(Review, ReviewAdmin)
