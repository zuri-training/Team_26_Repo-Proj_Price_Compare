from django.utils.translation import gettext_lazy as _

from rest_framework.pagination import PageNumberPagination


class ListingPagination(PageNumberPagination):
    page_size = 20
    max_page_size = 100

    # number of items per page
    page_size_query_description = ("Number of items per page.")
    page_size_query_param = "items_per_page"
