from scrapy import Request

url = 'https://api.konga.com/v1/graphql'

headers = {
    "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0",
   # "Accept": "*/*",
   # "Accept-Language": "en-US,en;q=0.5",
   # "Content-Type": "application/json",
   # "x-app-source": "kongavthree",
   # "x-app-version": "2.0",
    "Origin": "https://www.konga.com",
   # "Sec-Fetch-Dest": "empty",
   # "Sec-Fetch-Mode": "cors",
   # "Sec-Fetch-Site": "same-site",
    "Referer": "https://www.konga.com/",
   # "Connection": "keep-alive",
   # "TE": "trailers",
   "Host" : "api.konga.com"
}

body = {"query":"{\n            searchByStore (search_term: [[\"category.category_id:602\"]], numericFilters: [], sortBy: \"\", paginate: {page: 0, limit: 40}, store_id: 1) {\n                    pagination {limit,page,total},products {brand,deal_price,description,final_price,image_thumbnail,image_thumbnail_path,image_full,images,name,objectID,original_price,product_id,product_type,price,status,special_price,sku,url_key,weight,categories {id,name,url_key,position},variants {attributes {id,code,label,options {id,code,value}}},visibility,new_from_date,new_to_date,konga_fulfilment_type,is_free_shipping,is_pay_on_delivery,seller {id,name,url,is_premium,is_konga},stock {in_stock,quantity,quantity_sold,min_sale_qty,max_sale_qty},product_rating {quality {one_star,two_star,three_star,four_star,five_star,average,percentage,number_of_ratings},communication {one_star,two_star,three_star,four_star,five_star,average,percentage,number_of_ratings},delivery_percentage,delivered_orders,total_ratings},express_delivery,special_from_date,special_to_date,max_return_period,delivery_days,pay_on_delivery {country {code,name},city {id,name},area {id,name}},is_official_store_product}\n                }\n            }\n        "}

#request = Request(
#    url=url,
#    method='POST',
#    dont_filter=True,
#    headers=headers,
#    body=body,
#)

#fetch(request)
