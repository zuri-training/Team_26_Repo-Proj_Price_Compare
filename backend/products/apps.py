from django.db.models.signals import post_save
from django.apps import AppConfig

#from products.signals import schedule_detail_scrape, send_to_cloudinary
#from products.models import SalesDetail

class ProductsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'products'

    def ready(self):
        from . import signals
        #post_save.connect(schedule_detail_scrape, sender=SalesDetail)
        #post_save.connect(send_to_cloudinary, sender=SalesDetail)
