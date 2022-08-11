import os

# Scrapy settings for scrappers project
#
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     https://docs.scrapy.org/en/latest/topics/settings.html
#     https://docs.scrapy.org/en/latest/topics/downloader-middleware.html
#     https://docs.scrapy.org/en/latest/topics/spider-middleware.html

BOT_NAME = "scrappers"

SPIDER_MODULES = ["scrappers.spiders"]
NEWSPIDER_MODULE = "scrappers.spiders"
CLOSESPIDER_ITEMCOUNT = 150

# USER_AGENT = 'scrappers (+http://www.yourdomain.com)'

# DEFAULT_REQUEST_HEADERS = {"Accept": "application/json"}
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
# COOKIES_ENABLED = False

# Maximum depth per spider
DEPTH_LIMIT = 0


# Configure item pipelines
# See https://docs.scrapy.org/en/latest/topics/item-pipeline.html
ITEM_PIPELINES = {
    "scrappers.pipelines.PostItemPipeline": 300,
}


USERNAME = "admin@email.com"
USERNAMEFIELD = "email"
PASSWORD = "dd84gchkSNsbyCV"
