"""Jumia website scrapper"""

import scrapy

from scrappers.items import JumiaCategory, JumiaProduct, JumiaProductReview, JumiaLiveDetail

from scrappers.constants import jumia_headers, jumia_cookies


class JumiaSpider(scrapy.Spider):
    name = "JumiaCategorySpider"
    start_urls = "https://www.jumia.com.ng/"

    def start_requests(self):
        yield scrapy.Request(start_url, headers=jumia_headers, cookies=jumia_cookies, callback=self.parse )


    def parse(self, response):
        menu_items = response.xpath('//a[@role="menuitem"]')
        other_categories = menu_items.pop()
        categories = []
        for item in menu_items:
            cat = JumiaCategory()
            cat['name'] = item.xpath(".//span/text()").get()
            cat['url'] = item.attrib['href']
            cat['parent_category'] = None
            cat['is_sub_category'] = False
            categories.append(cat)
            yield cat

        response.follow_all(cat['url'], callback=self.parse_products, headers=jumia_headers, cookies=jumia_cookies)
        

    def parse_product(self, response):
        pass
            


