from dotenv import load_dotenv
from pathlib import Path
import os
from decouple import config

BASE_DIR = Path(__file__).resolve().parent.parent

load_dotenv(BASE_DIR.parent / ".env")

BOT_NAME = "scrappers"

SPIDER_MODULES = ["scrappers.spiders"]
NEWSPIDER_MODULE = "scrappers.spiders"
CLOSESPIDER_ITEMCOUNT = 150

# USER_AGENT = "Mozilla/5.0 (Linux; Andriod 6.0; Nexus 5 (KHTML, like Gecko) Chrome /104.1.0.1 Mobile Safari/537.37)"

# Obey robots.txt rules
ROBOTSTXT_OBEY = False

# Configure maximum concurrent requests performed by Scrapy (default: 16)
CONCURRENT_REQUESTS = 16

# Configure a delay for requests for the same website (default: 0)
# See https://docs.scrapy.org/en/latest/topics/settings.html#download-delay
# See also autothrottle settings and docs
DOWNLOAD_DELAY = 3

# The download delay setting will honor only one of:
# CONCURRENT_REQUESTS_PER_DOMAIN = 16
# CONCURRENT_REQUESTS_PER_IP = 16

# Disable cookies (enabled by default)
COOKIES_ENABLED = False

# Maximum depth per spider
DEPTH_LIMIT = 0

# LOG_FILE = BASE_DIR.parent / "scrapy.log"
# LOG_LEVEL = "INFO"

# Configure item pipelines
# See https://docs.scrapy.org/en/latest/topics/item-pipeline.html
# ITEM_PIPELINES = {
#    "scrappers.pipelines.PostItemPipeline": 300,
# }

IMAGES_STORE = BASE_DIR / "images"

USERNAME = config("SCRAPPER_USERNAME")
USERNAMEFIELD = config("SCRAPPER_USERNAMEFIELD")
