from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


def max_rating_validator(value):
    if value > 5.00:
        raise ValidationError(_(f"Max rating is 5.00, your rating {value}"))


def min_price_validator(price):
    if price <= 0.00:
        raise ValidationError(_(f"price must be greater than 0.00, your price {price}"))
