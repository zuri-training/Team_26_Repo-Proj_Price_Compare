from django.utils.text import slugify

from celery.utils.log import get_task_logger
from celery.schedules import crontab
from celery import shared_task

from scrappers.crawl import run_update, run_crawlers
from price_compare.celery import app

from .models import SalesDetail, Product
from .utils import upload_to_cloudinary

logger = get_task_logger(__name__)


@shared_task
def update_product_details():
    urls = SalesDetail.objects.values_list(
        "product", "search_url", "modified", "store"
    ).order_by("-modified")
    for i in urls:
        p, url, m_date, store = i
        product = Product.objects.get(pk=p)
        logger.info(f"Updating {product.name} last modified : {m_date}")
        run_update(url=url, store=store)
        # return SalesDetail.objects.get(product=product, search_url=url).modified


@shared_task
def crawl():
    run_crawlers()


@shared_task
def send_to_cloudinary(pk):
    sale = SalesDetail.objects.get(pk=pk)
    image = sale.image_url
    logger.info(
        f"Saving {slugify(sale.product.name)} image from {sale.store} to cloudinary"
    )
    folder = f"/{slugify(sale.product.brand)}/{slugify(sale.product.name)}/"
    public_id = slugify(f"{sale.store}")
    new_url = upload_to_cloudinary(image=image, folder=folder, public_id=public_id)
    logger.info(new_url)
    sale.image_url = new_url
    sale.save()
    logger.info(
        f"Saving {slugify(sale.product.name)} image from {sale.store} to cloudinary"
    )
    logger.info(f"Changing image_url......{sale.image_url} finished!!!")
