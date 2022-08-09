from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import WatchListItem,Product
from .permissions import IsOwner
from price_compare.settings import AUTH_USER_MODEL
from .serializers import WatchListItemSerializer
from rest_framework import serializers
from rest_framework import status,permissions
from rest_framework.exceptions import NotAcceptable, PermissionDenied



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

##some issues remaining
@api_view(['POST'])
@permission_classes((permissions.IsAuthenticated,IsOwner))
def add_watchlist_item(request):
    item = WatchListItemSerializer(data=request.data)
    owner = request.user
    UserItems= WatchListItem.objects.filter(user=owner)


    # validating for already existing data
    if WatchListItem.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This item already exists')
    
    if item.is_valid():
        item.save()
        return Response(item.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)

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


##some issues remaining
@api_view(['POST'])
@permission_classes((permissions.IsAuthenticated,IsOwner))
def update_watchlist_item(request, pk):
    owner = request.user
    item = WatchListItem.objects.get(user=owner,pk=pk)
    data = WatchListItemSerializer(instance=item, data=request.data)
  
    if data.is_valid():
        data.save()
        return Response(data.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


##some issues remaining
@api_view(['DELETE'])
@permission_classes((permissions.IsAuthenticated,IsOwner))
def delete_watchlist_item(request, pk):
    owner = request.user
    item = get_object_or_404(WatchListItem, user=owner, pk=pk)
    item.delete()
    return Response(status=status.HTTP_202_ACCEPTED)

