from django.contrib import admin
from .models import *

# Register your models here.


# Review, rating and loved admin board
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "description", "get_absolute_url")


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ("product", "comment", "date_time", "rating", "reviewer")


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "is_sub_category", "get_absolute_url")


# @admin.register(SubCategory)
# class SubCategoryAdmin(admin.ModelAdmin):
#     pass


@admin.register(SalesDetail)
class SalesDetail(admin.ModelAdmin):
    pass


@admin.register(Store)
class StoreAdmin(admin.ModelAdmin):
    pass
