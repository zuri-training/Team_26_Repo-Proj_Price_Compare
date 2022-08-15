from django.urls import path
from .views import *


app_name = "products"
API_TITLE = "ScoutVendor API"
API_DESCRIPTION = "A Web API for ScoutVendor."

urlpatterns = [
    path("", SalesListAPIView.as_view(), name="all_sales_list"),  # list all products
    path(
        "products/", ProductSearchAPIView.as_view(), name="all_product_list"
    ),  # list all products
    path(
        "categories/", CategoryListAPIView.as_view(), name="category_list"
    ),  # list all categories
    path(
        "category/<slug:slug>/list/",
        SubCategoryListAPIView.as_view(),
        name="category_subcategory_list",
    ),  # list all sub category of a category with id
    path(
        "<slug:slug>/list/",
        ProductListAPIView.as_view(),
        name="subcategory_product_list",
    ),  # all products under a sub category
    path(
        "detail/<int:pk>/",
        ProductDetailApiView.as_view(),
        name="product_salesdetail_list",
    ),  # create and get a product detail including all sales details
    path(
        "review/<int:product_id>/", ReviewAPIView.as_view()
    ),  # create and list review for a product
]
