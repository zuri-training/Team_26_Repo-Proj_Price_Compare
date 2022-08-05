from django.urls import path
from .views import ListWatchListItem, DetailWatchListItem

app_name = "watchlist"
API_TITLE = "ScoutVendor API"
API_DESCRIPTION = "A Web API for ScoutVendor."

urlpatterns = [
    # list all items on watchlist
    path(
        "items/", ListWatchListItem.as_view(), name="watchlistitem_list"
    ), 
    # show detail on watchlistitem
    path(
        "itemdetail/<int:pk>/",
        DetailWatchListItem.as_view(),name="watchlistitem_detail",
    ),
]
