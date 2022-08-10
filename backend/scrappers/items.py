# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class ScrapperItem(scrapy.Item):
    # defines the format of product details to be sent
    # each name maps to an Item Class
    store = scrapy.Field()  # name of store
    category = scrapy.Field()  # maps to CategoryItem
    subcategory = scrapy.Field()  # maps to CategoryItem
    product = scrapy.Field()  # maps to ProductItem
    # review = scrapy.Field()  # maps to ReviewItem
    # price = scrapy.Field()  # highest rating to price or just cheapest price


class CategoryItem(scrapy.Item):
    name = scrapy.Field()


class ProductItem(scrapy.Item):
    name = scrapy.Field()
    brand = scrapy.Field()
    image_url = scrapy.Field()
    search_url = scrapy.Field()  # would be filled by our JumiaProductLoader
    product_url = scrapy.Field()
    price = scrapy.Field()
    description = scrapy.Field()
    available = scrapy.Field()

    def __repr__(self):
        return f"{self['brand']} {self['name']}-{self['sku']}"


class ReviewItem(scrapy.Item):
    sku = scrapy.Field()
    author = scrapy.Field()
    rating = scrapy.Field()
    store = scrapy.Field()


# leave this for now
class JumiaLiveDetail(ReviewItem):
    new_price = scrapy.Item()
    old_price = scrapy.Item()
    perc = scrapy.Item()