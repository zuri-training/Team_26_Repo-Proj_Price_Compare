from rest_framework import serializers

from .models import Product, Category

class ProductSerializers(serializers.ModelSerializer):
    # serializing class for product model
    pass


class CategorySerializers(serializers.ModelSerializer):
    # serializing class for categories
    pass
