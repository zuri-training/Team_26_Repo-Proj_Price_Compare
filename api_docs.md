# API DEVELOPERS REFERENCE

Documentation guide on how ScoutVendor API is used

# General Overview

ScoutVendor API is powered by Django Web Framework and Django Rest Framework (DRF). It gives access to the major functionalities of ScoutVendor website. All API endpoint have a parent url of **/api/**. Every other endpoint would be a relative link to the general endpoint

### Sample API Call

Each API endpoint can be tested using [postman](), [curl]() or any other services that can consume restful apis. For simplicity, we provide a simple python code snippet to see live calls to our API endpoints. You only need to install python3.x to see our sample code in action.

### Request And Response

Both request and response body are formatted in JSON, the content type for requests and responses would always be in `application/json`. Any API calls involving a different `content-Type` would be specified.

In certain API calls optional `meta` keys can be supplied as part of the request body. These keys are generally used for specifying request parameters such as `item_per_page` and `page_number`. In response body, it is used as meta information about the response, such as the actual number of items returned `items_count`.  

	- items_count : number of items returned
	- items_per_page : number of items requested per page
	- page_number : current page number

**In most scenarios, item_count and item_per_page would be the same. But in cases where the total number of item instance that has not been retrieved/returned to the caller is less than the requested number, the items_count parameter would be less than the items_per_page**    

`meta` key is in the format


		{
			"items_count" : "50",
			"items_per_page" : "50",
			"page_number" : 1
		}


### Authentication
`ScoutVendor` uses Tokens as authentication. This token would be given on a per session basis. This means that a single user can have more than one token. If a user makes a login request using a mobile device, a token for that session would be assigned to the user, if the same user makes a login request using a different device, a token for that session would also be assigned to the user. Whenever the user logs out of a session, the token would be destroyed.

`ScoutVendor` also makes use of 2-step verification when registering new users, a link to verify the user's account will be sent to the email provided by the when registering.
 
For Authentication, `tokens` are passed using the `Authorization` header of the request i.e

	Authorization: Bearer <token>

Every API call that requires authentication should are specified with `Authentication: True` and should be called with the Authorization header. Failed authentication would result in a [401]() response status


# Endpoints


## Auth Endpoints

All endpoints that deals with authentication would be handled by the auth enpoints. Auth endpoints can be identified as endpoints that are relative url to **/api/auth/**. The auth endpoint has the following functionalities"

	- Registering new users
	- Verifying users email
	- Authenticating and logging in users
	- Refresh Token 
	- Getting User(profile)
	- Logging users out of all sessions
	- Request for password reset
	- Password Reset


- ### Registration Endpoint
	- Full path : /api/auth/register/
	- function : create an inactive user instance, saves to database and sends an activation key to user's mail
	- allowed methods : [POST]
	- required data : {
		- first_name,
		- last_name,
		- email,
		- password
	}
	- response : {
		data:user's data(excluding the password),
		message:activation link has been sent the email you provided
	}

	- Authentication : None


- ### Verification Endpoint
	- Full path : /api/auth/verify-email/
	- function : verify the activation key sent to user's mail and verify the user
	- allowed methods : [GET]
	- required data : {
		- Token
	}
	- response : {
		"email:"Account successfully activated"
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
		tokens: {
			- refresh : token key used to to refresh access token if it expire or is tampered with
			- access : token key used to validate
		}
	}
	- Authentication : None


- ### Token Refresh Endpoint
	- Full path : /api/auth/token/refresh
	- function : refresh expired or invalid access tokens
	- accepted methods : [POST]
	- required data : {
		- refresh token
	}
	- response : {
		- access : new access token generated
	}
	- Authentication : None

- ### User Endpoint
	- Full path : /api/auth/login/
	- function : logs in and authenticate users
	- accepted methods : [GET]
	- required data : {
		- token
	}
	- response : {
		-user's data(excluding the password)
	}
	- Authentication : None


- ### Logout Endpoint
	- Full path : /api/auth/logout/
	- function : logs a user out of session
	- accepted methods : [GET]
	- Authentication : required
	- response : {
		message: Successful(if successful)
	}
	
	
- ### Request Password Reset Endpoint
	- Full path : /api/auth/request-password-reset/
	- function :  sends a password reset link containing token and user's id to  the user's mail
	- allowed methods : [POST]
	- required data : {
		- email
	}
	- response : {
		- 'success':'A link have been sent to your mail to reset your password'
	}

	- Authentication : None


- ### Checking Password Reset Token Endpoint
	- Full path : /api/auth/request-password-reset/
	- function :  sends a password reset link containing token and user's id to  the user's mail
	- allowed methods : [GET]
	- required data : {
		- token
		- id
	}
	- response : {
		- 'success': True, 
		- 'message':'Credentials Valid', 
		- 'uidb64': uidb64 that have been converted to str to get the user's used to query the user from the database, 
		- 'token':token
	}
	- Authentication : None

	
	
- ### Password Reset Endpoint
	- Full path : /api/auth/change-password/
	- function :  change the user's password
	- allowed methods : [PATCH]
	- required data : {
		- password(new password)
		- uidb64
		- token
	}
	- response : {
		- 'success': 'Password Reset Successful'
	}

	- Authentication : None

**For logging users out, tokens are used to identify the user making the call**


## Product Endpoint

***optional authentication specifies that the API can be called with an Authorization header***

### product endpoint
	- Full path : /api/product/
	- function : returns a list of products available
	- accepted methods : [GET]
	- required data : None
	- request meta data : {
		- items_per_page : 25 (default value)
		- page_number : 1 (default start value)
	}
	- reponse : {
		- products : [{
			- name
			- brand
			- category
			- price
			- image_url
			- slug
			- url [url to compare page of the product]
		}] list of 'n' number of  product instance [defaults to 10 for unathenticated request]
	}
	- response meta data : {
		- item_count
		- items_per_page
		- page
	}
	- Authetication : optional


### product categories
	- Full path : /api/product/categories/
	- function : returns a list of categories
	- accepted method : [GET]
	- required data : None
	- reponse : {
		- categories : [{
			- name
			- url 
			- slug
			- image_url
		}]
	}
	- Authentication : None

### product subcategories
	- Full path : /api/product/category/<category_slug>/
	- function : returns a list of all sub-categories under a main category 
	- accepted_method : [GET]
	- required_data : {
		slug : category_slug [the slug of the main category]
	}
	- response : {
		- subcategories : [{
			- name
			- url
			- slug
			- image_url
		}]
	}

### product details
	- Full path : /api/product/detail/<product_id>/
	- function : returns details on a particular product.  
	- accepted methods : [GET]
	- required data : {
		- product_id : id of product
	}
	- response : {
		- product_id
		- name
		- brand
		- price : average price across stores
		- description
		- images_urls : array
		- store_name
		- store_url
		- category
		- sale : {
			- price
			- description
			- images_urls : array
			- store_name
			- store_url
			- day_modified
			- reviews
		}
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


## Search api
	- Full path : /api/product/?search=<query>
	- function : searches database | runs search function to find new items and returns a list of matching products
	- accepted methods : [GET]
	- require data : {
		- query : keyword to search for
		}
	- request meta data : {
		- items_per_page
		- page :
	}
	- Authentication : required


**The search keyword value is matched against the name, brand, subcategory and main category of our database. If any match are found across any of the fields, an array of product instance would be return. The effect of matching across sub-category and main category means that a product with name and brand that doesn't match the search value may be returned because it's category of sub-category matches the search keyword. The benefit of this is that it makes searching across categories and sub-category possible**


## WatchList Endpoints

All endpoints that deals with watchlist would be handled by the watchlist enpoints. Watchlist endpoints can be identified as endpoints that are relative url to **/api/watchlist/**. The watchlist endpoint has the following functionalities"

	- Viewing all user watchlist items
	- Adding a product to watchlist
	- Updating of users desired price 
	- Deleting an item from watchlist


- ### View all Watchlist items endpoint

	 
        - Full path : /api/watchlist/update/<int:pk>/ -the <int:pk> is the value on  watchlist_item key
        - Function : Enable an authenticated user to delete a watchlist item 
        - allowed methods : [GET]
        - required data : {
		- None
	     }
		
		[
		    {
			-created_on
			-current_price
			-desired_price
			-id
			-image_url
			-modified_on
			-price_changes
			-slug
			-user
			-watchlist_item
		    }
		]
	    }

        - Authentication : Required


- ### Add product to watchlist

        - Full path : /api/watchlist/add/
        - Function : Enable an authenticated user to add a product to watchlist
        - allowed methods : [POST]
        - required data : {
		- id -This is the product id
		- desired_price
		}
        - response : {
		
		{
		    "success": "The product has been added to watchlist"
		}
	       }
        - Authentication : Required



- ### Update a watchlist item
	
        - Full path : /api/watchlist/update/<int:pk>/ -the <int:pk> is the value on  watchlist_item key
        - Function : Enable an authenticated user to update a watchlist item by updating desired price
        - allowed methods : [POST]
        - required data : {
		- desired_price
		}

        - response : {
		
		  {
	             "success": "The product has been succesfully updated"
		  }
		
	  }
	  
       - Authentication : Required


- ### Delete watchlist Item

        - Full path : /api/watchlist/update/<int:pk>/ -the <int:pk> is the value on  watchlist_item key
        - Function : Enable an authenticated user to delete a watchlist item 
        - allowed methods : [DELETE]
        - required data : {
		- None
	     }
	   

        - response : {
		
		  {
	             "success": "The product has been succesfully deleted"
		  }
		
	  }
	  
       - Authentication : Required






# PYTHON CODE SNIPPETS

**Each code snippet is written in python3.x and uses the built-in requests module**

## Registration

		import requests

		user = {
			"first_name" : "John",
			"last_name" : "Doe",
			"email" : "johndoe@email.com",
			"password" : "somepassword",
		}

		url = "https://www.scoutvendor.com/api/auth/register/"

		res = requests.post(url, data=user)

		if res.ok:
			print(res.json())
		else:
			res.raise_for_status()
			
			
## Email Verification

		import requests
		header = {"Authorization" : "Bearer mytoken"}

		url = "https://www.scoutvendor.com/api/auth/verify-email"

		res = requests.get(url, data= token)

		if res.ok:
			print(res.json())
		else:
			res.raise_for_status()
			


## Login

		import requests

		details = {
			"email" : "johndoe@email.com",
			"password" : "somepassword"
		}

		url = "https://www.scoutvendor.com/api/auth/login"

		res = request.post(url, data=details)

		if res.ok:
			print(res.json())
		else:
			res.raise_for_status()
			
			
## User
		import requests
		header = {"Authorization" : "Bearer mytoken"}

		url = "https://www.scoutvendor.com/api/auth/user

		res = requests.get(url, data= token)

		if res.ok:
			print(res.json())
		else:
			res.raise_for_status()



## Request Password reset

		import requests
		"email" : "johndoe@email.com"
		
		url = "https://www.scoutvendor.com/api/auth/request-password-reset"

		res = requests.post(url, data=email)

		if res.ok:
			print(res.json())
		else:
			res.raise_for_status()

## Password Reset Token check

		import requests
		header = {"Authorization" : "Bearer mytoken", "id":"uidb64"}

		url = "https://www.scoutvendor.com/api/auth/reset-passwword"

		res = requests.get(url, data= token, uidb64)

		if res.ok:
			print(res.json())
		else:
			res.raise_for_status()
			
			
## Set New Password

		import requests

		details = {
			"email" : "johndoe@email.com",
			"password" : "somepassword"
		}

		url = "https://www.scoutvendor.com/api/auth/change-password"

		res = request.patch(url, data=details)

		if res.ok:
			print(res.json())
		else:
			res.raise_for_status()
			
			
## Logout

		import requests

		header = {"Authorization" : "Bearer mytoken"}
		logout_url = "https://www.scoutvendor.com/api/auth/logout/"

		res = request.get(logout_url, header = header)

		print(res.ok)

## Logout-all

		import requests

		header = {"Authorization" : "Bearer mytoken"}
		logout_url_all = "https://www.scoutvendor.com/api/auth/logout/"

		res = request.get(logout_url_all, header = header)

		print(res.ok)


## Refresh token

		import requests
		"refresh":"token"
		
		url = "https://www.scoutvendor.com/api/auth/token/refresh"

		res = requests.post(url, data=access)

		if res.ok:
			print(res.json())
		else:
			res.raise_for_status()

## product categories

		import requests

		cat_url = "https://www.scoutvendor.com/api/product/categories/"

		res = request.get(cat_url)
		if res.ok:
			print(res.json())
		else:
			res.raise_for_status()

## product list
		import requests

		def make_auth_request(url, body, token="mytoken", method="get"):
			header = {"Authorization" : "Bearer mytoken"}
			if method.lower() == "post":
				return requests.post(url, header=header, data=body)
			if method.lower() == "get":
				return requests.get(url, header=header, param=body)

		url = "https://www.scoutvendor.com/api/product/list/"
		param = {
			"items_per_page" : 50,
			"page_number" : 4
		}}
		res = make_auth_request(url, param)
		if res.ok:
			print(res.json())

## product details

		import requests

		url = "https://www.scoutvendor.com/api/product/detail/"
		body = {"product_id" : "234"}
		res = make_auth_request(url, body)
		if res.ok:
			print(res.json())


## product review

		import requests

		url = "https://www.scoutvendor.com/api/product/review/"

		body= {'product_id' : "234"}
		res = make_auth_request(url, body)

		if res.ok:
			print(res.json())
		else:
			res.raise_for_status()

## search api

		import requests

		url = "https://www.scoutvendor.com/api/search/"

		# search for product containing "red bag" with a brand
		# of addidas and a category of fashion

		search = "red bag"

		body = {"search" : query}
		res = make_auth_request(url, param)

		print(res.json())
