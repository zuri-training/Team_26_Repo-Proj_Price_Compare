from rest_framework import generics

from .models import WatchListItem
from .serializers import WatchListItemSerializer

class ListWatchListItem(generics.ListAPIView):
    queryset=WatchListItem.objects.all()
    serializer_class= WatchListItemSerializer


class DetailWatchListItem(generics.RetrieveAPIView):
    queryset= WatchListItem.objects.all()
    serializer_class=WatchListItemSerializer