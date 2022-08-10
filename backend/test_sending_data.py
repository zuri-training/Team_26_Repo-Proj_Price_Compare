import requests
import json

with open("full_detail.json", "r") as js_file:
    data = json.load(js_file)

url = "http://127.0.0.1:8000/api/product/ps/"
