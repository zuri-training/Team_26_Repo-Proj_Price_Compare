# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class ScrappersItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    pass


class JumiaCategory(scrapy.Item):
    name = scrapy.Field()
    url = scrapy.Field()
    parent_category = scrapy.Field()
    is_sub_category = scrapy.Field()


class Product(scrapy.Item):
    name = scrapy.Field()
    brand = scrapy.Field()
    sku = scrapy.Field()  # use to check for duplicates
    category = scrapy.Field()
    description = scrapy.Field()
    price = scrapy.Field()
    image_urls = scrapy.Field()
    search_url = scrapy.Field()  # would be filled by our JumiaProductLoader
    # might not be needed
    product_url = scrapy.Field()  # link to the cheapest product


class JumiaProductReview(scrapy.Item):
    sku = scrapy.Field()
    author = scrapy.Field()
    rating = scrapy.Field()
    store = scrapy.Field()


# leave this for now
class JumiaLiveDetail(JumiaProductReview):
    new_price = scrapy.Item()
    old_price = scrapy.Item()
    perc = scrapy.Item()
