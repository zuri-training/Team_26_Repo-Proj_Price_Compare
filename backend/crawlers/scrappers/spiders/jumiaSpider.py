"""Jumia website scrapper"""

import scrapy

from scrappers.items import (
    JumiaCategory,
    JumiaProduct,
    JumiaProductReview,
    JumiaLiveDetail,
)
from scrappers.itemloaders import JumiaProductItemLoader as ItemLoader

# Scrape by categories
# get one category and go a step deep to get all product listing in that category
# migth be better for getting more number of products
class JumiaCategorySpider(scrapy.Spider):
    "Get all main categories from jumia homepage"
    name = "JumiaCategorySpider"
    start_url = "https://www.jumia.com.ng/"

    def start_requests(self):
        yield scrapy.Request(
            self.start_url, callback=self.parse
        )  # headers=jumia_headers, cookies=jumia_cookies, callback=self.parse )

    def parse(self, response):
        menu_items = response.xpath('//a[@role="menuitem"]')
        other_categories = menu_items.pop()
        categories = []
        for item in menu_items:
            cat = JumiaCategory()
            name = item.xpath(".//span/text()").get()
            cat["url"] = item.attrib["href"]
            cat["parent_category"] = None
            cat["is_sub_category"] = False
            if name == "Supermarket":
                name = "Groceries"
            cat["name"] = name
            categories.append(cat)
            yield cat

        # response.follow_all(cat['url'], callback=self.parse_products, headers=jumia_headers, cookies=jumia_cookies)


# scrape from catalog
# use this to get all products available for scraping : about 2000
class JumiaProductSpider(scrapy.Spider):
    # response is returned in json format 
    # product list is found in response.json()["viewData"]['products']
    name = "JumiaProductSpider"
    start_urls = ["https://www.jumia.com.ng/catalog/"]
    current_page = 1 
    last_page = 50 # last page on catalog serach is 50
    custom_settings = {"DEFAULT_REQUEST_HEADER" : {"Accept" : "application/json"}}
    def parse_product(self, response):
        products = response.json()['viewData']['products']
        for product in products:
            # do something
            pass
