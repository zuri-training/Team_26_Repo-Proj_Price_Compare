from celery.utils.log import get_task_logger
from celery.schedules import crontab
from celery import shared_task

from price_compare.celery import app
from scrappers.crawl import run_update, run_crawlers

from .models import SalesDetail
from .models import Product

logger = get_task_logger(__name__)


@shared_task
def update_product_details():
    urls = SalesDetail.objects.values_list(
        "product", "search_url", "modified"
    ).order_by("-modified")
    for i in urls:
        p, url, m_date = i
        product = Product.objects.get(pk=p)
        logger.info(f"Updating {product.name} last modified : {m_date}")
        run_update(url=url)
        return SalesDetail.objects.get(product=product, search_url=url).modified


@shared_task
def crawl():
    run_crawlers()
