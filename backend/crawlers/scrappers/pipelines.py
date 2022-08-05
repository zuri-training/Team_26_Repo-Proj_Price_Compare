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
