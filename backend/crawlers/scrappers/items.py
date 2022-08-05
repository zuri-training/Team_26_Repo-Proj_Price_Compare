# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class ScrapperItem(scrapy.Item):
    # defines the format of product details to be sent
    # each name maps to an Item Class
    category = scrapy.Field()  # maps to CategoryItem
    subcategory = scrapy.Field()  # maps to CategoryItem
    product = scrapy.Field()  # maps to ProductItem
    # review = scrapy.Field()  # maps to ReviewItem
    # store = scrapy.Field()  # name of store
    # price = scrapy.Field()  # highest rating to price or just cheapest price


class CategoryItem(scrapy.Item):
    name = scrapy.Field()
    url = scrapy.Field()
    parent_category = scrapy.Field()  # is a sub-category not to be scrapped from
    scrap_from = scrapy.Field()  # is a sub-sub-category


class ProductItem(scrapy.Item):
    name = scrapy.Field()
    brand = scrapy.Field()
    sku = scrapy.Field()  # use to check for duplicates
    category = scrapy.Field()
    price = scrapy.Field()
    image_url = scrapy.Field()
    # description = scrapy.Field()
    search_url = scrapy.Field()  # would be filled by our JumiaProductLoader
    product_url = scrapy.Field()
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
