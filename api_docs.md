# API DEVELOPERS REFERENCE

Documentation guide on how priceBeta API is used 

# General Overview

PriceBeta API is powered by Django Web Framework and Django Rest Framework (DRF). It gives access to the major functionalities of PriceBeta website. All API endpoint have a parent url of **/api/**. Every other endpoint would be a relative link to the general endpoint

### Sample API Call

Each API endpoint can be tested using [postman](), [curl]() or any other services that can consume restful apis. For simplicity, we provide a simple python code snippet to see live calls to our API endpoints. You only need to install python3.x to see our sample code in action.

### Request And Response

Both request and response body are formatted in JSON, the content type for requests and responses would always be in `application/json`. Any API calls involving a different `content-Type` would be specified. 

In certain API calls an optional `meta` key can be supplied as part of the response and request body. This key is generally used for specifying request parameters such as `item_per_page` and `page_number`. In response body, it is used as meta information about the response, such as the actual number of items returned `items_count`.  

	- items_count : number of items returned
	- items_per_page : number of items requested per page
	- page_number : current page number

**In most scenarios, item_count and item_per_page would be the same. But in cases where the total number of item instance that has not been retrieved/returned to the caller is less than the requested number, the items_count parameter would be less than the items_per_page**    

`meta` key is in the format
	

		"meta" : {
				"items_count" : "50",
				"items_per_page" : "50",
				"page_number" : 1
			} 
	

### Authentication

`PriceBeta` uses Tokens as authentication. This token would be given on a per session basis. This means that a single user can have more than one token. If a user makes a login request using a mobile device, a token for that session would be assigned to the user, if the same user makes a login request using a different device, a token for that session would also be assigned to the user. Whenever the user logs out of a session, the token would be destroyed.

For Authentication, `tokens` are passed using the `Authorization` header of the request i.e

	Authorization: Bearer <token>

Every API call that requires authentication should are specified with `Authentication: True` and should be called with the Authorization header. Failed authentication would result in a [401]() response status


# Endpoints


## Auth Endpoints

All endpoints that deals with authentication would be handled by the auth enpoints. Auth endpoints can be identified as endpoints that are relative url to **/api/auth/**. The auth endpoint has the following functionalities"
	
	- Registering new users
	- authenticating and logging in users
	- logging users out of all sessions 


- ### Registration Endpoint
	- Full path : /api/auth/register/
	- function : create an inactive user instance, saves to database and sends an activation key to user's mail
	- allowed methods : [POST]
	- required data : {
		- first_name,
		- last_name,
		- email,
		- password
		- password2
	}
	- response : {
		- message : success (if successful)
	}

	- Authentication : None


- ### Login Endpoint
	- Full path : /api/auth/login/
	- function : logs in and authenticate users 
	- accepted methods : [POST]
	- required data : {
		- email,
		- password
	}
	- response : {
		- first_name
		- last_name
		- expiry : expiry date of token
		- token : token key used to validate
	}
	- Authentication : None


- ### Logout Endpoint
	- Full path : /api/auth/logout/
	- function : logs a user out of session
	- accepted methods : [GET]
	- Authentication : required
	- response : None

- ### Logout-all Endpoint
	- Full path : /api/auth/logoutall/
	- function : logs a user and all devices of user out of session
	- accepted methods : [GET]
	- Authenticaiton : required
	- response : None

**For logging users out, tokens are used to identify the user making the call**


## Product Endpoint

***optional authentication specifies that the API can be called with an Authorization header***

### product endpoint
	- Full path : /api/product/list/
	- function : returns a list of products available
	- accepted methods : [GET]
	- required data : None
	- request meta data : {
		- items_per_page : 25 (default value)
		- page_number : 1 (default value)
	}
	- reponse : {
		- products : list of 'n' number of  product instance [defaults to 10 for unathenticated request]
	}
	- response meta data : {
		- items_count 
		- items_per_page
		- page_number
	}
	- Authetication : optional


### product categories
	- Full path : /api/product/categories/
	- function : returns a list of categories
	- accepted method : [GET]
	- required data : None
	- reponse : {
		- categories : list of categories
	}
	- Authentication : None


### product details
	- Full path : /api/product/detail/
	- function : returns detail on a particular product
	- accepted methods : [GET]
	- required data : {
		- product_id
	}
	- response : {
		- product_id
		- name 
		- price 
		- description
		- weight (if any)
		- images_urls : array
		- store_name
		- store_url
		- category
		- date_modified
	}
	Authentication : required

### product review
	- Full path : /api/product/review/
	- function : returns an array of reviews of a product
	- accepted methods : [GET]
	- required data : {
		- product_id
	}
	- reponse : {
		- reviews : array of review objects
	}
	- Authentication : required
	
** Review instance **

	- author 
	- body
	- product_id
	- parent_id

In a standard setting, some posts are reviews of a single product while some are replies to a particular review of a product, which we call the parent.
Every post that is a reply to a parent post would have the id of the parent post in it's `parent_id` field. The `product_id` is used to identify reviews and replies that refers to a product.

## Search api
	- Full path : /api/search/
	- function : searches database | runs search function to find new items and returns a list of matching products
	- accepted methods : [GET]
	- require data : {
		- query_string (optional)
		- category (optional) 
	}
	- request meta data : {
		items_per_page
	}
	- Authentication : required


**When using this endpoint, specify either query_string or category. If both are specified, query_string would take precedence** 




# PYTHON CODE SNIPPETS

**Each code snippet is written in python3.x and uses the built-in requests module**
