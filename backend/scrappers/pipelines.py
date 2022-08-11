import requests
import json
import os

from scrapy.exceptions import DropItem
from itemadapter import ItemAdapter


# django things


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "price_compare.settings")
import django

django.setup()

from products.serializers import CreateProductSerializer
from django.contrib.auth import get_user_model


class PostItemPipeline:
    @classmethod
    def from_crawler(cls, crawler):
        # get API endpoint and credentials
        return cls(
            username=crawler.settings.get("USERNAME"),
            username_field=crawler.settings.get("USERNAMEFIELD"),
            password=crawler.settings.get("PASSWORD"),
        )

    def __init__(self, username_field, username, password):
        self.username = username
        self.password = password
        self.username_field = username_field

    def open_spider(self, spider):
        self.serializer = CreateProductSerializer
        self.scrapy = get_user_model().objects.get(email=self.username)

    def process_item(self, item, spider):
        # save data into database through serializer
        serializer = self.serializer(data=item)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=self.scrapy)
        return item

    async def close_spider(self, spider):
        requests.get("http:127.0.0.1:8000/api/auth/logout/")
