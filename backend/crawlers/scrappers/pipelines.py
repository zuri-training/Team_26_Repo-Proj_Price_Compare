import treq
import json

from twisted.internet import defer

from scrapy.itemadapter import ItemAdapter
from scrapy.execeptions import DropItem


class DuplicatesPipeline:
    def __init__(self):
        self.seen_sku = set()

    def process_item(self, item, spider):
        adapter = ItemAdapter(item)
        if adapter["sku"] in self.seen_sku:
            raise DropItem(f"Duplicate item found : {item!r}")
        else:
            self.seen_sku.add(adapter["sku"])
            return item


class PostItemPipeline:
    
    def __init__(self, endpoint, auth_endpoint, username, password):
        self.endpoint = endpoint
        self.auth_endpoint = auth_endpoint
        self.username = username
        self.password = password


    @classmethod
    def from_crawler(cls, crawler):
        # get API endpoint and credentials
        return cls(
                endpoint = crawler.settings.get("PRODUCT_ENDPOINT"),
                auth_endpoint = crawler.settings.get("AUTH_ENDPOINT")
                username = crawler.settings.get("USERNAME"),
                username_field = crawler.settings.get("USERNAMEFIELD")
                password = crawler.settings.get("PASSWORD")
                )


    def open_spider(self, spider):
        # establish connection with endpoint
        r = requests.post(self.auth_endpoint, {self.username_field : self.username, 'password' : self.password})
        token = r.json()['token']
        self.header = {'Authorization' : f'Bearer {token}'}

    @defer.inlineCallbacks
    def process_item(self, item, spider):
        # logic to send data asynchronously to endpoint
        try:
            # Create a json representation of this item
            data = json.dumps(dict(item), ensure_ascii=False).encode("utf-8")
            yield treq.post(self.endpoint, data, timeout=5, header=self.header)
        finally:
            # return the item for the next pipeline
            defer.returnvalue(item)
