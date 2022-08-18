from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import Product, SalesDetail

@receiver(post_save, sender=SalesDetail)
def schedule_detail_scrape(sender, instance, **kwargs):
    # schedule scrape for instance review and description
    pass

@receiver(post_save, sender=SalesDetail)
def send_to_cloudinary(sender, instance, **kwargs):
    # save instance image_url to cloudinary
    pass
    
