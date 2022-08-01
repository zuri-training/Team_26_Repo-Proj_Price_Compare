from rest_framework import serializers
from requests import Response
from rest_framework.views import APIView
from .models import Category, Product, Review


class ProductSerializers(serializers.ModelSerializer):
    # serializing class for product model
    class Meta:
        model = Product
        fields = "__all__"
        read_only_fields = ["created_on", "modified"]


class CategorySerializers(serializers.ModelSerializer):
    # serializing class for categories

    class Meta:
        model = Category
        fields = "__all__"
        read_only_fields = ["created_on", "modified"]

    def create(self, validated_data):
        name = validated_data.get("name")
        validated_data = name.title()
        parent = validated_data.get("parent", None)


# Below is the Review, rating and loved serializer
class ReviewSerializers(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["product", "comment", "rating", "loved", "date_time", "reviewer"]
