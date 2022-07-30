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


class JumiaProduct(scrapy.Item):
    name = scrapy.Field()
    brand = scrapy.Field()
    sku = scrapy.Field()
    category = scrapy.Field()
    seller = scrapy.Field()
    description = scrapy.Field()
    price = scrapy.Field()
    image_urls = scrapy.Field()


class JumiaProductReview(scrapy.Item):
    sku = scrapy.Field()
    author = scrapy.Field()
    rating = scrapy.Field()


class JumiaLiveDetail(JumiaProductReview):
    new_price = scrapy.Item()
    old_price = scrapy.Item()
    perc = scrapy.Item()
