from dataclasses import field
from rest_framework import serializers
from .models import WatchListItem

class WatchListItemSerializer(serializers.ModelSerializer):
    user=serializers.RelatedField(source='email',read_only=True)
    product=serializers.RelatedField(source='name', read_only=True)
    class Meta:
        model=WatchListItem
        fields=('user','product','desired_price','price_changes','created_on','modified_on')
        read_only_fields=('id','user','product')
        

            
        