from itemloaders.processors import TakeFirst, Identity, Compose
from itemloaders import ItemLoader
from itemadapter import ItemAdapter


def get_sub_and_main_category(value):
    data = value[0].split("/")
    main, sub = data[0], data[1]
    return [main, sub]


class JumiaProductItemLoader(ItemLoader):
    """
    Hook into the loaditem methods and prefill
    product's serch url field
    """

    default_output_processor = TakeFirst()
    category_in = Compose(get_sub_and_main_category)
    category_out = Identity()

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


class ScrapperItemLoader(ItemLoader):
    pass
    # def load_item(self):
    #
    #     adapter = ItemAdapter(self.item)
    #     for field_name in tuple(self._values):
    #         value = self.get_output_value(field_name)
    #         if value is not None:
    #             adapter[field_name] = dict(value)
    #
    #     return adapter.item
