"""Jumia website scrapper"""
from urllib.parse import urljoin
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
from scrappers.loaders import (
    ScrapperItemLoader,
    JumiaProductItemLoader,
    JumiaUpdateItemLoader,
)

# Scrape by categories
# get one category and go 3 steps deep to get all sub category listing in that category
# migth be better for getting more number of products
class JumiaSpider(scrapy.Spider):
    "Get all products using categories from jumia homepage"
    name = "JumiaSpider"
    start_urls = ["https://www.jumia.com.ng/"]
    # allowed_domains = ["jumia.ng"]
    custom_settings = {
        "ITEM_PIPELINES": {
            "scrappers.pipelines.PostItemPipeline": 100,
        }
    }
    max_page = 50
    store_name = "Jumia"

    def parse(self, response):
        # get categories in homepage
        menu_items = response.xpath('//a[@role="menuitem"]')
        # urls = []
        others = menu_items.pop()
        for item in menu_items:
            cat = CategoryItem()
            name = item.xpath(".//span/text()").get()
            url = item.attrib["href"]
            if name == "Supermarket":
                name = "Groceries"
            cat["name"] = name
            yield response.follow(
                url,
                callback=self.parse_subcategories,
                meta={"cat": cat, "depth": 1},
            )

    def parse_subcategories(self, response):
        # get all subcategories
        subs = response.xpath("//*[contains(text(), 'Category')]/following-sibling::a")
        parent_cat = response.meta["cat"]
        depth = response.meta["depth"] + 1
        for sub in subs:
            url = sub.attrib["href"]
            cat = CategoryItem()
            cat["name"] = self.format_name_from_url(url)

            meta = {"cat": parent_cat, "depth": depth}
            if depth <= 2:
                meta["sub"] = cat
                yield response.follow(url, callback=self.parse_subcategories, meta=meta)
            else:
                meta["sub"] = response.meta["sub"]
                yield response.follow(
                    url,
                    callback=self.parse_product,
                    meta=meta,
                    headers={"Accept": "application/json"},
                )

    def format_name_from_url(self, url):
        # format : https://www.jumia.ng/some-category/
        return url.title().strip("/").replace("-", " ")

    def parse_product(self, response):
        current_page = response.meta.get("page", 1)
        products = response.json()["viewData"].get("products", [])
        for product in products:
            item_detail = ScrapperItemLoader(ScrapperItem())
            loader = JumiaProductItemLoader(ProductItem())
            loader.add_value("name", product.get("name"))
            loader.add_value("brand", product.get("brand"))
            loader.add_value("price", product.get("prices").get("rawPrice"))
            loader.add_value("image_url", product.get("image"))
            loader.add_value("product_url", product.get("url"))
            loader.add_value("available", product.get("isBuyable"))
            loader.add_value("description", "Coming soon...")

            item = loader.load_item()
            subcategory = response.meta["sub"]
            category = response.meta["cat"]
            store = {"name": "Jumia"}
            item_detail.add_value("category", dict(category))
            item_detail.add_value("subcategory", dict(subcategory))
            item_detail.add_value("product", dict(item))
            item_detail.add_value("store", dict(store))

            yield item_detail.load_item()

        # get next page
        next_page = current_page + 1
        response.meta.update({"page": next_page})
        next_page_url = urljoin(response.url, f"?page={next_page}")
        if current_page == 3:
            return
        yield response.follow(
            next_page_url, callback=self.parse_product, meta=response.meta
        )


class JumiaUpdateSpider(scrapy.Spider):
    # for price and reviews
    custom_settings = {
        "DEFAULT_HEADERS_REQUEST": {"Accept": "application/json"},
        "ITEM_PIPELINES": {
            "scrappers.pipelines.UpdateItemPipeline": 100,
        },
    }
    name = "JumiaUpdateSpider"

    def __init__(self, url=None, **kwargs):
        self.start_url = [url]  # list of search_url's
        super(JumiaLiveSpider, self).__init__(**kwargs)

    def parse(self, response):
        products = response.json()["viewData"]["products"]
        cleaned_products = [
            p for p in products if p["name"] == self.name and p["brand"] == self.brand
        ]
        cheapest = get_cheapest[cleaned_products]
        yield response.follow(
            cheapest["url"],
            callback=self.parse_product_detail,
            meta={"search_url": response.url},
        )

    def parse_product_detail(self, response):
        update_loader = JumiaUpdateItemLoader(UpdateItem())
        product_loader = JumiaProductItemLoader(ProductItem())

        reviews = []
        view_data = response["viewData"]
        # get price, description, reviews, product_url, available, name & brand for product identification

        product_loader.add_value("product_url", response.url)
        product_loader.add_value("search_url", response.meta["searcu_url"])
        product_loader.add_value(
            "description", self.html_parser(view_data["description"])
        )
        product_loader.add_value("name", view_data["product"]["name"])
        product_loader.add_value("brand", view_data["product"]["brand"])
        product_loader.add_value("available", view_data["product"]["isBuyable"])
        product_loader.add_value("price", view_data["product"]["prices"]["rawPrice"])

        product = product_loader.load_item()
        for data in view_data["reviews"]:
            review = ReviewItem()
            review["rating"] = data["rate"]
            review["comment"] = data["comment"]
            review["date"] = data["date"]
            review["author"] = data["authorText"].split("by")[1].strip()
            reviews.append(review)

        update_loader.add_value("product", product)
        update_loader.add_value("reviews", reviews)

        yield update_loader.load_item()

    def get_cheapest_by_max_rating_ratio(self, products):
        # return the cheapest product
        # sort products by highest price to ratings
        by__rating_to_price = sorted(
            products,
            key=lambda p: (
                float(p["rating"]["totalRatings"]) * float(p["rating"]["average"])
            )
            / p["prices"]["rawPrice"],
        )
        return by_price[0]

    def htmlparser(value):
        return value
