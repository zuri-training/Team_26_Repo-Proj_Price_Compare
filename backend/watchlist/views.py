from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_list_or_404, get_object_or_404
from rest_framework.response import Response
from .models import WatchListItem,Product,SalesDetail
from .permissions import IsOwner
from price_compare.settings import AUTH_USER_MODEL
from .serializers import WatchListItemSerializer
from rest_framework import serializers
from rest_framework import status,permissions
from rest_framework.exceptions import NotAcceptable, PermissionDenied
from datetime import datetime

#works fine
@api_view(['GET'])
@permission_classes((permissions.IsAuthenticated))
def WatchlistAPIOverview(request):
    api_urls = {
        'all_watchlist_items': '/all',
        'Add': '/create',
        'Update': '/update/pk',
        'Delete': '/watchlistitem/pk/delete'
    }
  
    return Response(api_urls)

#works fine
@api_view(['GET'])
@permission_classes((permissions.IsAuthenticated,IsOwner))
def view_watchlist_items(request):
    owner = request.user    
    items = WatchListItem.objects.filter(user=owner)   
  
    # if there is something in items else raise error
    if items:
        serializer = WatchListItemSerializer(items,many=True)
        return Response(serializer.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


#add product to watchlist
@api_view(['POST'])
@permission_classes((permissions.IsAuthenticated,))
def add_watchlist_item(request):
    item = get_object_or_404(Product, id=request.data["id"])
    sale_details=get_object_or_404(SalesDetail, product_id=item.id)
    current_item = WatchListItem.objects.filter(watchlist_item=item.pk)
    
    # check if item exists
    if current_item.count() > 0:
        raise NotAcceptable("You already have this item in your WatchList")
    else:
        watchlist_item={
            "watchlist_item":item.pk,
            "current_price":sale_details.price,
            "image_url":sale_details.image_url,
            "slug":item.slug,
            "desired_price":request.data["desired_price"],
            "user":request.user.pk,
            "created_on":datetime.now(),
            "modified_on":datetime.now(),
            "price_changes":[sale_details.price,]
        }  
        serializer=WatchListItemSerializer(data=watchlist_item)
        if serializer.is_valid():
            print(serializer.errors)
            serializer.save()
            print(serializer.errors)
            return Response({"success": "The product has been added to watchlist"},
                status=status.HTTP_201_CREATED
            )
        else:
            print(serializer.errors)
            return Response(
                status=status.HTTP_404_NOT_FOUND
            )    


#Updating a watchlist item
@api_view(['POST'])
@permission_classes((permissions.IsAuthenticated,IsOwner))
def update_watchlist_item(request,pk):
    itemexists= WatchListItem.objects.filter(watchlist_item=pk,user=request.user).exists()
    if itemexists== True:
        item = WatchListItem.objects.get(watchlist_item=pk,user=request.user)
        watchlist_item={
            "desired_price":request.data["desired_price"],
            "user":request.user.pk
        }  
        serializer=WatchListItemSerializer(item, data=watchlist_item,partial=True)
        if serializer.is_valid():
            print(serializer.errors)
            serializer.save()
            print(serializer.errors)
            return Response({"success": "The product has been succesfully updated"},
                status=status.HTTP_201_CREATED
            )
        else:
            print(serializer.errors)
            return Response(
                status=status.HTTP_404_NOT_FOUND
            )   
    elif itemexists == False:
        raise NotAcceptable("You don't have this item in your WatchList")


   



##some issues remaining
@api_view(['DELETE'])
@permission_classes((permissions.IsAuthenticated,IsOwner))
def delete_watchlist_item(request, pk):
    itemexists= WatchListItem.objects.filter(watchlist_item=pk,user=request.user).exists()
    

    if itemexists== True: 
        item = WatchListItem.objects.get(watchlist_item=pk,user=request.user)       
        item.delete()
        return Response(
            {"success": "The product has been removed from watchlist"},
            status=status.HTTP_202_ACCEPTED
            )
    elif itemexists== False:
        raise NotAcceptable("Cannot delete since you don't have this item in your WatchList")



