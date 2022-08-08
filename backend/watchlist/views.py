from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import WatchListItem
from .serializers import WatchListItemSerializer
from rest_framework import serializers
from rest_framework import status
from rest_framework.permissions import IsAuthenticated  # <-- Here


@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def WatchlistAPIOverview(request):
    api_urls = {
        'all_watchlist_items': '/all',
        'Add': '/create',
        'Update': '/update/pk',
        'Delete': '/watchlistitem/pk/delete'
    }
  
    return Response(api_urls)


@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def add_watchlist_item(request):
    item = WatchListItemSerializer(data=request.data)
  
    # validating for already existing data
    if item.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This data already exists')
  
    if item.is_valid():
        item.save()
        return Response(item.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def view_watchlist_items(request):

    # checking for the parameters from the URL
    if request.query_params:
        items = WatchListItem.objects.filter(**request.query_param.dict())
    else:
        items = WatchListItem.objects.all()
  
    # if there is something in items else raise error
    if items:
        data = WatchListItemSerializer(items)
        return Response(data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def update_watchlist_item(request, pk):
    item = WatchListItem.objects.get(pk=pk)
    data = WatchListItemSerializer(instance=item, data=request.data)
  
    if data.is_valid():
        data.save()
        return Response(data.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
@permission_classes((IsAuthenticated,))
def delete_watchlist_item(request, pk):
    item = get_object_or_404(WatchListItem, pk=pk)
    item.delete()
    return Response(status=status.HTTP_202_ACCEPTED)

