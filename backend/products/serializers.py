from rest_framework import serializers
from rest_framework.views import APIView

from requests import Response

from .models import Category, Product, Review, SalesDetail


class SalesDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalesDetail
        fields = "__all__"
        # read_only_fields = ["modified"]


class ProductListSerializer(serializers.ModelSerializer):
    # serializing class for product model
    class Meta:
        model = Product
        fields = "__all__"
        read_only_fields = ["slug", "created_on", "modified"]


class ProductDetailSerializer(serializers.ModelSerializer):
    sales = SalesDetailSerializer()

    class Meta:
        model = Product
        exclude = ["description"]


class CategorySerializer(serializers.ModelSerializer):
    # serializing class for categories

    class Meta:
        model = Category
        fields = ["name", "image_url", "url"]
        # read_only_fields = ["created_on", "modified"]

    # def create(self, validated_data):
    #     name = validated_data.get("name")
    #     validated_data = name.title()
    #     return super(CategorySerializers, self).save(validated_data)


# class SubCategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         Model = SubCategory
#         fields = ["name", "image_url", "slug", "parent"]
#         read_only_fields = ["created_on", "modified"]


# Below is the Review, rating and loved serializer
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["product", "comment", "rating", "loved", "date_time", "reviewer"]
