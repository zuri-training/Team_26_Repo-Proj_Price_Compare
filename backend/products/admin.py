from django.contrib import admin
from .models import Product,ProductImage,Category,Sale_Detail,Shop

# Register your models here.


# Register your models here.
class ProductImageInline(admin.TabularInline):
    model=ProductImage

class SaleDetailInline(admin.TabularInline):
    model=Sale_Detail



@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display=('name','slug','is_sub_category')
    prepopulated_fields = {'slug': ('name',)}



@admin.register(Product)
class ItemAdmin(admin.ModelAdmin):
    list_display =('name', 'category', 'brand', 'slug')
    list_filter = ('category','brand')
    prepopulated_fields = {'slug': ('name',)}
    inlines = [ProductImageInline,SaleDetailInline]



@admin.register(Shop)
class ShopAdmin(admin.ModelAdmin):
    list_display =('name',)
