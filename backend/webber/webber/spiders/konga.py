import requests
import json

r = requests.get("https://webchat-be.ebanqo.io/config/konga")
j=r.json()
print(j)