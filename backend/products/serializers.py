from rest_framework import serializers
from requests import Response
from rest_framework.views import APIView
from .models import *


class ProductSerializers(serializers.ModelSerializer):
    # serializing class for product model
    pass


class CategorySerializers(serializers.ModelSerializer):
    # serializing class for categories
    pass



#Below is the Review, rating and loved serializer
class ReviewSerializers(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['product', 'comment', 'rating', 'loved', 'date_time', 'reviewer']