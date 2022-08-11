# Information On Different Online Stores

| Store | Product Review Days | Data Collection Method | help |
|-------|---------------------|------------------------|------|
| Jumia | Every 2(two) Days   | Webscrapping (200 rpm) | [jumia seller faq] (https://sellercenter.jumia.com.ng/faq) |
| Konga | Every 2(two) Days   | API calls              |     |
|   |                     |                        |     |

## Guide

All scrapped product should be made to conform to the `ProductItem` container defined in the `items.py` file

`ScrapperItem` defines a base template for how the items you scrap should be, Format your scrapped data using `the ScrappeItem for easy and consistent interaction with the post API that would process and save to database

Getting new products from a store is done in three stages:
	
	- First, we three important details among others which are:
		- name
		- brand
		- search_url
	- We create a new product instance (if it doesn't exits) and also a new sales_detail instance linking to the product and the particular store
	- We then send a post-save-signal to begin another scrapper which takes the search_url as a parameter to get a list of all matching products from the store and updates the sales_detail instance with the cheapest of all the products. 

At the last stage, we also get the description, reviews and image_urls

# Scrapping Jumia
Jumia website returns a json response behind the scence(to see what that look like run see the json file which has been cut to the products field because of lots of data`). This json formatted response can be used by setting the DEFAULT_REQUEST_HEADER to

	{
		'Accept' : 'application/json',
		... (other header options)
	}

A JumiaItemLoader has been imported into the `jumiaSpider.py` file for you. The purpose of the using the custom item loader is that it construct the search_url using the filled details. Therefore, all item extraction should be done via the JumiaProductItemLoader. Note that the JumiaProductItemLoader only modifies the `load_item` method and preserves the normal behaviour of `scrapy.ItemLoader`. Because you'll most likey be working with json formatted response, all you'll need to do is to add data using the

	`ItemLoader.add_value(field_name, value, *args, **kwargs)`

refer scrapy docs on [ItemLoaders](https://itemloaders.readthedocs.io/en/latest/).

To get the maximum number of items, we scrape products from the subcategory of the subcategories of categories i.e a 3-level-deep scrapping
The file `categories.json` holds the information of the scrapped categories.
For any confusion, issue or code errors please rich out to noble from the backend team
