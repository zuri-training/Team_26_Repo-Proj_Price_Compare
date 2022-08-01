from django.contrib import admin
from .models import *

# Register your models here.


# Review, rating and loved admin board
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "description")


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ("product", "comment", "date_time", "rating", "loved", "reviewer")


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(SalesDetail)
class SalesDetail(admin.ModelAdmin):
    pass


@admin.register(Store)
class StoreAdmin(admin.ModelAdmin):
    pass
