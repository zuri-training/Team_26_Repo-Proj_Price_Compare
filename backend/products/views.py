from django.db.models.query import QuerySet
from django.shortcuts import render

from rest_framework import generics, permissions
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from .serializers import (
    ProductListSerializer,
    ProductDetailSerializer,
    CategorySerializer,
    ReviewSerializer,
)
from .models import Category, Product, Review
# from .permissions import AllowScrapper


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
    filter_param = "slug"
    filter_by_expr = "category__slug"


class ProductDetailApiView(generics.RetrieveAPIView):
    # gets a product and all related sales details
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer


# Views to List and Create review
class ReviewAPIView(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


# class CreateProductAPIView(generics.CreateView):
    """
    Creation is done in a particular order.
        - Store is created or fetched
        - Category is created or fetched first
        - Subcategory is created or fetched second and Category is passed as parent
        - Product is created or fetched with Subcategory as category
        - SalesDetail is created with Product as product and store as Store
        - Review is created with Product as product and store as Store

    For duplicate SalesDetails, if the duplicate is cheaper it will be used to update the current
    SalesDetail
    """

    # permission_classes = [AllowScrapper]

    # def create(self, request, *args, **kwargs):
    #     store = create_or_fetch(model=Store, data=request.data, keyword="store")
    #     category = create_or_fetch(
    #         model=Category, data=request.data, keyword="category"
    #     )
    #     subcategory = create_or_fetch(
    #         model=SubCategory, data=request.data, keyword="subcategory", fk=category
    #     )
    #     product = create_or_fetch(
    #         model=Product, data=request.data, keyword="product", fk=subcategory
    #     )
    #     sale = create_or_fetch(model=SalesDetail, data=request.data)

    # def create_or_fetch(**kwargs):
    #     pass
