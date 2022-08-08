import requests
import treq
import json

from twisted.internet import defer

from itemadapter import ItemAdapter
from scrapy.exceptions import DropItem


class PostItemPipeline:
    @classmethod
    def from_crawler(cls, crawler):
        # get API endpoint and credentials
        return cls(
            endpoint=crawler.settings.get("PRODUCT_ENDPOINT"),
            auth_endpoint=crawler.settings.get("AUTH_ENDPOINT"),
            username=crawler.settings.get("USERNAME"),
            username_field=crawler.settings.get("USERNAMEFIELD"),
            password=crawler.settings.get("PASSWORD"),
        )

    def __init__(self, endpoint, auth_endpoint, username_field, username, password):
        self.endpoint = endpoint
        self.auth_endpoint = auth_endpoint
        self.username = username
        self.password = password
        self.username_field = username_field

    async def open_spider(self, spider):
        # establish connection with endpoint
        try:
            r = requests.post(
                self.auth_endpoint,
                {self.username_field: self.username, "password": self.password},
            )
        except e as Exception:
            raise e

        token = r.json()["token"]
        self.header = {"Authorization": f"Bearer {token}"}

    # @defer.inlineCallbacks
    def process_item(self, item, spider):
        # logic to send data asynchronously to endpoint
        try:
            # Create a json representation of this item
            data = json.dumps(dict(item), ensure_ascii=False).encode("utf-8")
            yield requests.post(self.endpoint, data, timeout=5, header=self.header)
        finally:
            # return the item for the next pipeline
            # defer.returnvalue(item)
            return item

    async def close_spider(self, spider):
        requests.get("http:127.0.0.1:8000/api/auth/logout/")
