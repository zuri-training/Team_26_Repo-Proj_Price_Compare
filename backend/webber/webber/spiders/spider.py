import scrapy


class SpiderSpider(scrapy.Spider):
    name = 'spider'
    allowed_domains = ['jumia.com.ng']
    start_urls = ['http://jumia.com.ng/']

    def parse(self, response):
        all_product = response.xpath('//article[@class="prd _box _hvr"]')
        
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