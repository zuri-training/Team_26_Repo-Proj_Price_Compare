from django.urls import path
from . import views



urlpatterns = [
    path('add/', views.add_watchlist_item, name='add_watchlist_item'),
    path('all/', views.view_watchlist_items, name='view_watchlist_items'),
    path('update/<int:pk>/', views.update_watchlist_item, name='update_watchlist_item'),
    path('delete/<int:pk>/', views.delete_watchlist_item, name='delete-item'),
]
