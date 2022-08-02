from rest_framework import serializers
from rest_framework.views import APIView

from requests import Response

from .models import Category, Product, Review, SalesDetail


class ReviewSerializer(serializers.ModelSerializer):
    # product = serializers.StringRelatedField()
    # store = serializers.StringRelatedField()
    love_count = serializers.SerializerMethodField()
    loved_by_user = serializers.SerializerMethodField

    class Meta:
        model = Review
        fields = ["reviewer", "comment", "rating", "loved", "love_count", "date_time"]
        # fields = "__all__"

    def get_love_count(self, obj):
        return obj.loved.count()

    def get_loved_by_user(self, obj):
        return True
        # return request.user in obj.loved.all() use django contains field


class SalesDetailSerializer(serializers.ModelSerializer):
    store = serializers.StringRelatedField()

    class Meta:
        model = SalesDetail
        fields = "__all__"
        # read_only_fields = ["modified"]


class ProductListSerializer(serializers.ModelSerializer):
    # serializing class for product model
    url = serializers.SerializerMethodField()
    category = serializers.StringRelatedField()

    class Meta:
        model = Product
        fields = "__all__"
        read_only_fields = ["slug", "created_on", "modified"]

    def get_url(self, obj):
        return obj.get_absolute_url()


class ProductDetailSerializer(serializers.ModelSerializer):
    sales = SalesDetailSerializer(source="sales_details", many=True)
    reviews = ReviewSerializer(many=True)

    class Meta:
        model = Product
        fields = ["name", "brand", "sales", "reviews"]

    def get_reviews(self, obj):
        return obj.get_reviews()


class CategorySerializer(serializers.ModelSerializer):
    # serializing class for categories
    url = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ["name", "image_url", "url"]
        # read_only_fields = ["created_on", "modified"]

    def get_url(self, obj):
        return obj.get_absolute_url()


# Below is the Review, rating and loved serializer
