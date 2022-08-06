import scrapy


class SpiderSpider(scrapy.Spider):
    name = 'spider'
    allowed_domains = ['konga.com']
    start_urls = ['https://www.konga.com/']

    def parse(self, response):
        all_product = response.xpath('//div[@class="_7f96a_3PgMp _7f231_24Ywf"]/text()')
        
        for product in all_product:
            name = product.xpath('.//div[@class="name"]/text()').extract_first()
            price = product.xpath('.//div[@class="prc"]/text()').extract_first()
            image_url = product.xpath(".//a/img/@data-src").extract_first()
            product_url = self.start_urls[0] + product.xpath('.//a[@class="core"]/@href').extract_first()
            yield {
                'Name': name,
                'Price': price,
                'Image URL': image_url, 
                'Product URL': product_url,
            }