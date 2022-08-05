from rest_framework import serializers
from rest_framework.views import APIView

from requests import Response

from .models import Category, Product, Review, SalesDetail


class ReviewSerializer(serializers.ModelSerializer):
    # product = serializers.StringRelatedField()
    # store = serializers.StringRelatedField()
    # love_count = serializers.SerializerMethodField()
    # loved_by_user = serializers.SerializerMethodField

    class Meta:
        model = Review
        fields = [
            "author",
            "comment",
            "rating",
            "store",
            "product",
            "user",
        ]
        extra_kwargs = {
            "product": {"write_only": True},
            "user": {"write_only": True},
        }


class SalesDetailSerializer(serializers.ModelSerializer):
    store = serializers.StringRelatedField()

    class Meta:
        model = SalesDetail
        fields = "__all__"
        read_only_fields = ["modified"]  # "price_changes"]
        extra_kwargs = {
            "product": {"write_only": True},
            "description": {"write_only": True},
        }


class ProductListSerializer(serializers.ModelSerializer):
    # serializing class for product model
    url = serializers.SerializerMethodField()
    category = serializers.StringRelatedField()

    class Meta:
        model = Product
        fields = "__all__"
        read_only_fields = [
            "category",
            "slug",
            "created_on",
            "modified",
        ]
        # extra_kwargs = {"category" : {"write_only" : True}}

    def get_url(self, obj):
        return obj.get_absolute_url()


class ProductDetailSerializer(serializers.ModelSerializer):
    sales = SalesDetailSerializer(source="sales_details", many=True)
    reviews = ReviewSerializer(many=True)

    class Meta:
        model = Product
        fields = [
            "name",
            "brand",
            "category",
            "sales",
            "reviews",
        ]
        read_only_fields = ["sales", "reviews"]
        extra_kwargs = {"category": {"write_only": True}}

    def get_reviews(self, obj):
        return obj.get_reviews()


class CategorySerializer(serializers.ModelSerializer):
    # serializing class for categories
    url = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ["name", "image_url", "url", "parent"]
        read_only_fields = ["image_url"]
        extra_kwargs = {"parent": {"write_only": True}}

    def get_url(self, obj):
        return obj.get_absolute_url()


# SERAILIZERS FOR DATA COLLECTION
