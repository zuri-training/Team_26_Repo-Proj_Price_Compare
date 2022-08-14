"""Slot website scrapper"""
from urllib.parse import urljoin, urlparse
import scrapy
import json
import re
import pathlib

from itemloaders.processors import Compose

from scrappers.items import (
    ScrapperItem,
    CategoryItem,
    ProductItem,
    ReviewItem,
    JumiaLiveDetail,
)
from scrappers.loaders import ScrapperItemLoader, SlotProductItemLoader

# Scrape by categories
# get one category and go 3 steps deep to get all sub category listing in that category
# migth be better for getting more number of products
class SlotSpider(scrapy.Spider):
    "Get all products using categories from jumia homepage"
    name = "SlotSpider"
    start_urls = ["https://backend-magento.slot.ng/"]
    custom_settings = {
        "ITEM_PIPELINES": {
            "scrappers.pipelines.PostItemPipeline": 100,
        }
    }

    def parse(self, response):
        # get categories in homepage
        categories = response.xpath('//a[@class="level-top"]')
        for cat in categories:
            cat_item = CategoryItem()
            name = cat.xpath(".//span/text()").get()
            cat_item["name"] = name.replace("&", "and")
            url = cat.attrib["href"]

            yield response.follow(
                url, self.parse_subcategory, meta={"cat": cat_item, "depth": 1}
            )

    def parse_subcategory(self, response):
        cat_block = response.xpath(
            "//*[contains(text(), 'Category')]/following-sibling::div/descendant::li"
        )
        parent_cat = response.meta["cat"]
        depth = response.meta["depth"] + 1
        for cat in cat_block:
            sub = CategoryItem()
            sub["name"] = cat.xpath(".//a/text()").get().title()
            url = cat.xpath(".//a").attrib["href"]

            meta = {"cat": parent_cat, "depth": depth}
            if depth <= 2:
                meta["sub"] = sub
                yield response.follow(url, callback=self.parse_subcategory, meta=meta)
            else:
                meta["sub"] = response.meta["sub"]
                yield response.follow(url, callback=self.parse_brand, meta=meta)
            # follow to brand

    def parse_brand(self, response):
        block = response.xpath(
            "//*[contains(text(), 'Brand')]/following-sibling::div/descendant::li"
        )
        meta = response.meta
        for b in block:
            meta["brand"] = b.xpath(".//a/text()").get().title()
            url = b.xpath(".//a").attrib["href"]
            yield response.follow(
                url, callback=self.proxy, meta=meta
            )  # follow to products

    def proxy(self, response):
        if response.status == 404:
            return

        meta = response.meta
        current_page = response.meta.get("page", 1)
        meta["page"] = current_page

        product_list = response.xpath(
            '//div[@class="products wrapper grid products-grid"]/descendant::li'
        )
        for product in product_list:
            url = product.xpath('./descendant::a[@class="product-item-link"]').attrib[
                "href"
            ]

            yield response.follow(url, callback=self.parse_product, meta=meta)

        next_page = current_page + 1
        response.meta.update({"page": next_page})
        next_page_url = urljoin(response.url, f"&p={next_page}")
        # if current_page == 3:
        #     return
        yield response.follow(next_page_url, callback=self.parse_product, meta=meta)

    def parse_product(self, response):
        product_loader = SlotProductItemLoader(ProductItem())
        image_url = response.xpath(
            '//div/descendant::img[@alt="main product photo"]'
        ).attrib["src"]
        name = response.xpath('//h1[@class="page-title"]//span/text()').get().strip()
        description = response.xpath(
            '//div[@itemprop="description"]//p/text()'
        ).getall()
        price = response.xpath(
            '//*[@class="price"]/parent::span/@data-price-amount'
        ).get()
        slot_url = urlparse(response.url)._replace(netloc="www.slot.ng")
        product_loader.add_value("name", name)
        product_loader.add_value("available", True)
        product_loader.add_value("image_url", image_url)
        product_loader.add_value("price", float(price))
        product_loader.add_value("product_url", slot_url.geturl())
        product_loader.add_value("brand", response.meta["brand"])
        product_loader.add_value(
            "description", " ".join(description) or "coming soon ..."
        )

        store = {"name": "Slot"}
        category = response.meta["cat"]
        subcategory = response.meta["sub"]

        itemloader = ScrapperItemLoader(ScrapperItem())
        itemloader.add_value("store", store)
        itemloader.add_value("category", category)
        itemloader.add_value("subcategory", subcategory)
        itemloader.add_value("product", product_loader.load_item())

        yield itemloader.load_item()
