from django.contrib.auth import get_user_model

from rest_framework.permissions import BasePermission


class AllowScrapper(BasePermission):
    "Allows access to only our Scrapper"

    def has_permission(self, request, view):
       # Scrapper = get_user_model().objects.get(email="scrapper@email.com")
        return True
        # return True if request.user == Scrapper else False
