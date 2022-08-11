""" Run all spiders for scrapping products """
import scrapy
from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings

# from spiders import JumiaSpider

CRAWL_SPIDERS = [
    "JumiaSpider",
]
UPDATE_SPIDERS = [
    "JumiaUpdateSpider",
]


def run_crawlers(process):
    for spider in REGISTERED_SPIDERS:
        process.crawl(spider)
    process.start()


def run_update(process, url):
    for spider in UPDATE_SPIDERS:
        process.crawl(spider, url=url)
    process.start()


def main(*, update=False, run=False, **kwargs):
    settings = get_project_settings()
    process = CrawlerProcess(settings)
    if update and run:
        raise Exception("Call either with only one keyword=True")
    if update:
        assert "url" in kwargs
        url = kwargs["url"]
        run_update(process, url=url)
    if run:
        run_crawlers(process)


if __name__ == "__main__":
    # use argparser to select function
    settings = get_project_settings()
    process = CrawlerProcess(settings)
