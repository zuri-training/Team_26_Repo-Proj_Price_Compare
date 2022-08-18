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


class UpdateItem(scrapy.Item):
    product = scrapy.Field()  # maps to ProductItem
    reviews = scrapy.Field()  # maps to ReviewItem
    store = scrapy.Field()  # maps to StoreItem


class CategoryItem(scrapy.Item):
    name = scrapy.Field()


class ProductItem(scrapy.Item):
    name = scrapy.Field()
    brand = scrapy.Field()
    # sales details
    image_url = scrapy.Field()
    # images = scrapy.Field()
    search_url = scrapy.Field()
    product_url = scrapy.Field()
    price = scrapy.Field()
    description = scrapy.Field()
    available = scrapy.Field()

    # def __repr__(self):
    #     return f"{self['brand']} {self['name']}"


class ReviewItem(scrapy.Item):
    author = scrapy.Field()
    rating = scrapy.Field()
    date = scrapy.Field()
    comment = scrapy.Field()


# leave this for now
class JumiaLiveDetail(ReviewItem):
    new_price = scrapy.Item()
    old_price = scrapy.Item()
    perc = scrapy.Item()