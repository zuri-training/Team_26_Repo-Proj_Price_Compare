from django.utils.translation import gettext_lazy as _

from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class ListingPagination(PageNumberPagination):
    page_size = 20
    max_page_size = 100

    # number of items per page
    page_size_query_description = _("Number of items per page.")
    page_size_query_param = "items_per_page"

    def get_paginated_response(self, data):
        return Response(
            {
                "links": {
                    "next": self.get_next_link(),
                    "previous": self.get_previous_link(),
                },
                "total_count": self.page.paginator.count,
                "total_pages": self.page.paginator.num_pages,
                "item_count" : len(data),
                "results": data,
            }
        )
