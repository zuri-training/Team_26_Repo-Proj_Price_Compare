"""Crawler for Konga"""
# from scrappers.settings import USERNAME, USERNAMEFIELD

from concurrent.futures import ThreadPoolExecutor
from dotenv import load_dotenv
from pathlib import Path
from urllib import parse

import pprint as pp
import requests
import asyncio
import aiohttp
import django
import sys
import os

BASE_DIR = Path(__file__).resolve().parent.parent
SETTINGS_PATH = BASE_DIR.parent
load_dotenv(BASE_DIR.parent / ".env")

sys.path.insert(0, str(SETTINGS_PATH))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "price_compare.settings")


django.setup()
from scrappers.items import ProductItem, CategoryItem, ScrapperItem
from scrappers.loaders import BaseProductItemLoader, ScrapperItemLoader
from products.serializers import CreateProductSerializer

# from products.serializers import CreateProductSerializer
from django.contrib.auth import get_user_model
from django.utils.text import slugify


# load_dotenv(BASE_DIR.parent / ".env")
API_URL = "https://api.konga.com/v1/graphql"
serialized_products = []
category_links = [
    "https://www.konga.com/category/other-categories-5971",
    "https://www.konga.com/category/baby-kids-toys-8",
    "https://www.konga.com/category/home-kitchen-602",
    "https://www.konga.com/category/konga-fashion-1259",
    "https://www.konga.com/category/electronics-5261",
    "https://www.konga.com/category/phones-tablets-5294",
    "https://www.konga.com/category/accessories-computing-5227",
]

category_match = {
    5971: "Other",
    8: "Baby Kids Toys",
    602: "Home And Kitchen",
    1259: "Konga Fashion",
    5261: "Electronics",
    5294: "Phones And Tablets",
    5227: "Computer Accessories",
}
user_agent = {
    "User-Agent": "<your user agent here>"
}
headers = {
    "Origin": "https://www.konga.com",
    "Referer": "https://www.konga.com/",
}

USERNAME = os.environ.get("SCRAPPER_USERNAME")
USERNAMEFIELD = os.environ.get("SCRAPPER_USERNAMEFIELD")
USER = get_user_model().objects.get(**{USERNAMEFIELD: USERNAME})


def start_requests():
    for l in category_links:
        id = l.split("-")[-1]
        yield id


def build_query(cat_id, page=0):
    return {
        "query": '{\n            searchByStore (search_term: [["category.category_id:'
        + str(cat_id)
        + '"]], numericFilters: [], sortBy: "", paginate: {page: '
        + str(page)
        + ", limit: 40}, store_id: 1) {\n                    pagination {limit,page,total},products {brand,deal_price,description,final_price,image_thumbnail,image_thumbnail_path,image_full,images,name,objectID,original_price,product_id,product_type,price,status,special_price,sku,url_key,weight,categories {id,name,url_key,position},variants {attributes {id,code,label,options {id,code,value}}},visibility,new_from_date,new_to_date,konga_fulfilment_type,is_free_shipping,is_pay_on_delivery,seller {id,name,url,is_premium,is_konga},stock {in_stock,quantity,quantity_sold,min_sale_qty,max_sale_qty},product_rating {quality {one_star,two_star,three_star,four_star,five_star,average,percentage,number_of_ratings},communication {one_star,two_star,three_star,four_star,five_star,average,percentage,number_of_ratings},delivery_percentage,delivered_orders,total_ratings},express_delivery,special_from_date,special_to_date,max_return_period,delivery_days,pay_on_delivery {country {code,name},city {id,name},area {id,name}},is_official_store_product}\n                }\n            }\n        "
    }


async def save_products(products, cat_id):
    print(f"Parsing {len(products)} number of product items")
    KONGA_IMAGE_ROOT_URL = "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product"
    KONGA_ROOT_URL = "https://www.konga.com/"
    KONGA_ITEM_ROOT_URL = "https://www.konga.com/product/"

    subcategory = CategoryItem()
    category = CategoryItem()
    store = {"name": "Konga"}

    # total_page = response["data"]["searchByStore"]["pagination"]["total"]
    # products = response["data"]["searchByStore"]["products"]
    # cat_id = response.meta["cat_id"]

    for product in products:
        item_detail = ScrapperItemLoader(ScrapperItem())
        item_loader = BaseProductItemLoader(ProductItem())

        category = CategoryItem()
        subcategory = CategoryItem()
        category["name"] = category_match.get(int(cat_id))
        print(category["name"])
        try:
            subcategory["name"] = product["categories"][1]["name"]
        except:
            subcategory["name"] = "NoSubcategory"
        name = product["name"]
        brand = product["brand"] or "No_brand"
        item_loader.add_value("name", name)
        item_loader.add_value("brand", brand)
        item_loader.add_value("description", product["description"] or "no_description")
        item_loader.add_value("price", "{:.2f}".format(float(product["price"])))
        item_loader.add_value("available", product["stock"]["in_stock"])
        item_loader.add_value(
            "image_url", KONGA_IMAGE_ROOT_URL + product["image_thumbnail_path"]
        )
        item_loader.add_value("product_url", KONGA_ITEM_ROOT_URL + product["url_key"])
        # add search url
        search_param = f"/?{slugify(name)}&brand={slugify(brand)}&cat={slugify(cat_id)}"
        item_loader.add_value("search_url", parse.urljoin(KONGA_ROOT_URL, search_param))

        item_detail.add_value("category", dict(category))
        item_detail.add_value("subcategory", dict(subcategory))
        item_detail.add_value("product", dict(item_loader.load_item()))
        item_detail.add_value("store", dict(store))

        item = item_detail.load_item()
        serializer = CreateProductSerializer(data=item)
        serializer.is_valid(raise_exception=True)
        serialized_products.append(serializer)
        pp.pprint(dict(item))


async def fetch_products(session, cat_id, page_num):
    query = build_query(cat_id, page_num)
    print(f"Requesting for page {page_num} of category:{cat_id}")
    async with session.post(API_URL, json=query) as resp:
        if resp.status == 200:
            print(f"page {page_num} received")
            payload = await resp.json()
            return payload["data"]["searchByStore"]["products"]


async def main():
    # Run initial request to the first page to know how many pages
    # to scrape.
    s_session = requests.Session()
    for id in start_requests():
        # Update User-Agent headers later to pick from random
        s_session.headers.update(user_agent)
        s_session.headers.update()
        query = build_query(id)
        res = s_session.post(API_URL, json=query)
        try:
            res.raise_for_status()
        except requests.exceptions.RequestException as exc:
            raise exc
        else:
            payload = res.json()["data"]["searchByStore"]
            pagination = payload["pagination"]
            products = payload["products"]
            num_pages = pagination["total"]
            await save_products(products, id)
            async with aiohttp.ClientSession(
                headers={**user_agent, **headers}
            ) as a_session:
                tasks = []
                for i in range(1, num_pages):
                    tasks.append(
                        asyncio.ensure_future(
                            fetch_products(a_session, cat_id=id, page_num=i)
                        )
                    )

                products_txns = await asyncio.gather(*tasks)

                txns = [
                    asyncio.ensure_future(save_products(products, cat_id=id))
                    for products in products_txns
                    if products is not None
                ]
                await asyncio.gather(*txns)


def save(product):
    try:
        product.save(user=USER)
        print(f"saved product {serialized_products.index(product)}")
    except:
        print(f"skipping product {serialized_products.index(product)}")


def save_all(workers=1):
    executor = ThreadPoolExecutor(max_workers=workers)
    for res in executor.map(save, serialized_products):
        print(res)


def run():
    if not user_agent:
        print(f"Please set the user agent in the kongaSpider.py script")
    asyncio.run(main())
    print(f"saving {len(serialized_products)} number of products")
    save_all()


if __name__ == "__main__":
    if not user_agent:
        print(f"Please set the user agent in the kongaSpider.py script")
    asyncio.run(main())
    print(f"saving {len(serialized_products)} number of products")
    save_all()
