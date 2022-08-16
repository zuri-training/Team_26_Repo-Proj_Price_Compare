""" Run all spiders for scrapping products """
import scrapy
import sys

from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings

# from spiders import JumiaSpider
from spiders import kongaSpider

CRAWL_SPIDERS = {"Jumia": "JumiaSpider", "Slot": "SlotSpider", "Konga": "KongaSpider"}
UPDATE_SPIDERS = {"Jumia": "JumiaUpdateSpider"}


def run_crawlers():
    settings = get_project_settings()
    process = CrawlerProcess(settings)
    for spider in CRAWL_SPIDERS.values():
        print(f"Starting {spider}...")
        if spider == "KongaSpider":
            continue
        continue
        process.crawl(spider)
    # process.start()
    kongaSpider.run()


def run_update(url, store):
    settings = get_project_settings()
    process = CrawlerProcess(settings)
    spider = UPDATE_SPIDERS.get(store)
    process.crawl(spider, url=url)
    process.start()


if __name__ == "__main__":
    # use argparser to select function
    # settings = get_project_settings()
    # process = CrawlerProcess(settings)
    run_crawlers()
