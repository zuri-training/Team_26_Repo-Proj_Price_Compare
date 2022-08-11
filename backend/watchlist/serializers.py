from dataclasses import field
from rest_framework import serializers
from .models import WatchListItem

class WatchListItemSerializer(serializers.ModelSerializer):
    class Meta:
        model=WatchListItem
        fields=('id','user','watchlist_item','image_url','slug','current_price','desired_price','price_changes','created_on','modified_on')
        
class UpdateWatchListItemSerializer(serializers.Serializer):
    class Meta:
        model = WatchListItem
        fields = ['watchlist_item',"desired_price"]
      

class DeleteWatchListItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = WatchListItem
        fields = ['watchlist_item',"user"]
                
