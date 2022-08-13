from django.contrib.auth import get_user_model
from django.db.models.query import QuerySet
from django.shortcuts import render

from rest_framework import generics, permissions
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import filters
from rest_framework import viewsets
from rest_framework import status

from .serializers import (
    CreateProductSerializer,
    ProductDetailSerializer,
    SalesDetailSerializer,
    ProductListSerializer,
    CategorySerializer,
    ReviewSerializer,
    StoreSerializer,
)
from .models import Category, Product, Review, Store, SalesDetail
from .permissions import AllowScrapper
from .pagination import ListingPagination


class FilterListAPIGenericView(generics.ListAPIView):
    def get_queryset(self):
        """
        Get the list of items for this view.
        This must be an iterable, and may be a queryset.
        Defaults to using `self.queryset`.

        This method should always be used rather than accessing `self.queryset`
        directly, as `self.queryset` gets evaluated only once, and those results
        are cached for all subsequent requests.

        You may want to override this if you need to provide different
        querysets depending on the incoming request.

        (Eg. return a list of items that is specific to the user)
        """
        assert self.queryset is not None, (
            "'%s' should either include a `queryset` attribute, "
            "or override the `get_queryset()` method." % self.__class__.__name__
        )
        # return only subcategories whose parent slug
        # matches the slug in the url
        value = self.kwargs[self.filter_param]
        filter = {self.filter_by_expr: value}
        queryset = self.queryset.filter(**filter)
        if isinstance(queryset, QuerySet):
            # Ensure queryset is re-evaluated on each request.
            queryset = queryset.all()
        return queryset


class CategoryListAPIView(generics.ListAPIView):
    # gets a list of all categories
    queryset = Category.parentCategories.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]


class SubCategoryListAPIView(FilterListAPIGenericView):
    # gets a list of all sub categories under a category
    queryset = Category.subCategories.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]
    filter_param = "slug"
    filter_by_expr = "parent__slug"


class ProductListAPIView(FilterListAPIGenericView):
    # gets a list of product under a subcategory
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    pagination_class = ListingPagination
    filter_by_expr = "category__slug"
    filter_param = "slug"

class ProductSearchAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'brand', 'slug', 'category__name', 'category__parent__name']
    pagination_class = ListingPagination

    
class ProductDetailApiView(generics.RetrieveAPIView):
    # gets a product and all related sales details
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer


# Views to List and Create review
class ReviewAPIView(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
