from django.contrib import admin
from .models import WatchListItem
# Register your models here.

@admin.register(WatchListItem)
class WatchListItemAdmin(admin.ModelAdmin):
    list_display=('user','watchlist_item','created_on','modified_on')
