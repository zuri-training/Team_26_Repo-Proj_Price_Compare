from scrapy.Itemloaders import ItemLoader
from scrapy.itemadapter import ItemAdapter


class JumiaProductItemLoader(ItemLoader):
    """
    Hook into the loaditem methods and prefill
    product's serch url field
    """

    def load_item(self):
        """
        Populate the item with the data collected so far, and return it. The
        data collected is first passed through the :ref:`output processors
        <processors>` to get the final value to assign to each item field.
        """
        adapter = ItemAdapter(self.item)
        for field_name in tuple(self._values):
            if field_name == "search_url":
                continue
            value = self.get_output_value(field_name)
            if value is not None:
                adapter[field_name] = value

        brand = adapter["brand"]
        name = adapter["name"]
        adapter["search_url"] = f"https://wwww.jumia.com.ng/{brand}/?q={name}"

        return adapter.item
