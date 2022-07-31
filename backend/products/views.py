from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework import viewsets
from .models import *
from .serializers import ProductSerializers, ReviewSerializers



class ProductAPIView(generics.ListAPIView):
    pass



#Views to List and Create review 
class ReviewAPIView(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializers
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]