from django.db import transaction
from django.db.models import Q

from rest_framework import serializers
from rest_framework.views import APIView

from requests import Response
from datetime import datetime
from .models import Category, Product, Review, SalesDetail, Store
from .tasks import send_to_cloudinary


def get_or_create_partial(model, field):
    created = False
    try:
        instance = model.objects.get(**field)
    except:
        instance = model(**field)
        created = True
    finally:
        return instance, created


# Users Endpoints
class ReviewSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()
    product = serializers.SerializerMethodField()

    class Meta:
        model = Review
        fields = [
            "author",
            "comment",
            "rating",
            "store",
            "product",
        ]
        read_only_fields = ["author", "product"]
        extra_kwargs = {
            "product": {"write_only": True},
            "user": {"write_only": True},
        }

    def get_author(self, obj):
        return obj.get_author()

    def get_product(self, obj):
        return f"{obj.product.brand} {obj.product.name}"

    def create(self, validated_data):
        product = validated_data["product"]
        store = validated_data.get("store", None)
        comment = validated_data["comment"]
        rating = validated_data["rating"]
        user = validated_data["user"]
        is_scrapper = validated_data.get("is_scrapper", False)
        qs = Review.objects.filter(product=product, store=store, user=user)
        if qs:
            return self.update(
                qs,
                {
                    "product": product,
                    "user": user,
                    "store": store,
                    "rating": rating,
                    "comment": comment,
                    "is_scrapper": is_scrapper,
                },
            )
        return Review.objects.create(
            product=product,
            store=store,
            comment=comment,
            rating=rating,
            user=user,
            is_scrapper=is_scrapper,
        )


class SalesDetailSerializer(serializers.ModelSerializer):
    store = serializers.StringRelatedField()

    class Meta:
        model = SalesDetail
        exclude = ["search_url"]
        read_only_fields = ["modified", "store"]  # "price_changes"]
        extra_kwargs = {
            "product": {"write_only": True},
            "description": {"write_only": True},
        }

    def create(self, validated_data):
        store = validated_data["store"]
        product = validated_data["product"]
        price = validated_data["price"]
        qs = SalesDetail.objects.filter(Q(product=product) & Q(store=store))
        if qs:
            if qs["price"] > price:
                qs["price"] = price
                qs.save()
                return qs
        else:
            instance = SalesDetail(product=product, store=store)
            instance["price"] = validated_data["price"]
            instance["product_url"] = validated_data["product_url"]
            instance["available"] = validated_data["available"]
            instance["description"] = validated_data["description"]
            instance.save()
            return instance


class ProductListSerializer(serializers.ModelSerializer):
    # serializing class for product model
    url = serializers.SerializerMethodField()
    category = serializers.StringRelatedField()

    class Meta:
        model = Product
        fields = "__all__"
        read_only_fields = [
            "category",
            "slug",
            "created_on",
            "modified",
        ]
        # extra_kwargs = {"category" : {"write_only" : True}}

    def get_url(self, obj):
        return obj.get_absolute_url()

    def get_days_modified(self, obj):
        delta = datetime.now().date() - obj.modified
        return delta.days()


class ProductDetailSerializer(serializers.ModelSerializer):
    sales = SalesDetailSerializer(source="sales_details", many=True)
    reviews = ReviewSerializer(many=True)

    class Meta:
        model = Product
        fields = [
            "name",
            "brand",
            "category",
            "sales",
            "reviews",
        ]
        read_only_fields = ["sales", "reviews"]
        extra_kwargs = {"category": {"write_only": True}}

    def get_reviews(self, obj):
        return obj.get_reviews()


class CategorySerializer(serializers.ModelSerializer):
    # serializing class for categories
    url = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ["name", "image_url", "url", "parent"]
        read_only_fields = ["image_url", "url"]
        extra_kwargs = {"parent": {"write_only": True}}

    def get_url(self, obj):
        return obj.get_absolute_url()


class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = "__all__"
        read_only_fields = ["favicon", "url"]


## Scrapper Endpoint
class Holder(serializers.Serializer):
    name = serializers.CharField()


class ReviewHolder(serializers.Serializer):
    author = serializers.CharField()
    rating = serializers.DecimalField(max_digits=20, decimal_places=2, max_value=5.0)
    date = serializers.DateField()
    comment = serializers.CharField()


class ReviewListSerializer(serializers.ListSerializer):
    child = ReviewHolder


class ProductSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=150)
    brand = serializers.CharField(max_length=100)
    description = serializers.CharField()
    price = serializers.DecimalField(max_digits=20, decimal_places=2, min_value=1.0)
    image_url = serializers.URLField()
    product_url = serializers.URLField()
    search_url = serializers.URLField()
    available = serializers.BooleanField()


class CreateProductSerializer(serializers.Serializer):
    store = Holder()
    category = Holder()
    subcategory = Holder()
    product = ProductSerializer()

    def create(self, validated_data):
        product = {}
        user = validated_data.pop("user")  # should be Scrapper
        sale_pk = None
        with transaction.atomic():
            store = validated_data.pop("store")
            store_instance, _ = Store.objects.get_or_create(**store)
            self.store = store_instance

            category = validated_data.pop("category")
            subcategory = validated_data.pop("subcategory")
            # category_instance, _ = Category.objects.get_or_create(
            #     **category, parent=None, is_sub_category=False
            # )
            category_instance, c_created = get_or_create_partial(
                Category, {"name": category["name"]}
            )
            subcategory_instance, s_created = get_or_create_partial(
                Category, {"name": subcategory["name"]}
            )
            if not c_created and category_instance.is_sub_category:
                if not s_created:
                    # simple case : category is sub_category and sub-category is category
                    # then swap them
                    if not subcategory_instance.is_sub_category:
                        category_instance, subcategory_instance = (
                            subcategory_instance,
                            category_instance,
                        )

                    # case 2: Both are sub_categories
                    # then assign category to subcategory's parent
                    elif subcategory_instance.is_sub_category:
                        category_instance = subcategory_instance.parent

                    # case 3: Both are main categories
                    # then create a new subcategory using `store` name
                    elif not subcategory.is_sub_category:
                        store_category = (
                            f"{store_instance.name} {subcategory.pop('name')}".title()
                        )
                        store_category = Category.objects.create(
                            name=store_category,
                            is_sub_category=True,
                            parent=category_instnace,
                        )

                else:
                    category_instance = category_instance.parent
                    # subcategory is created and category is a subcategory
                    # setup subcategory
                    subcategory_instance = Category.objects.create(
                        **subcategory, is_sub_category=True, parent=category_instance
                    )
            if s_created:
                subcategory_instance = Category(**subcategory, is_sub_category=True)
                if c_created:
                    category_instance = Category.objects.create(
                        **category, is_sub_category=False, parent=None
                    )
                    # subcategory_instance = Category.objects.create(**subcategory, is_sub_category=True, parent=category_instance)
                # else:
                subcategory_instance.parent = category_instance
                subcategory_instance.save()

                # Both are created then continue as normal

            product["name"] = validated_data["product"].pop("name")
            product["brand"] = validated_data["product"].pop("brand")
            product_instance, _ = Product.objects.get_or_create(
                **product, category=subcategory_instance
            )

            # The remaining data should belong to sale_deatils
            sale = validated_data.pop("product")
            try:
                qs = SalesDetail.objects.get(
                    product=product_instance, store=store_instance
                )
            except:  # except models.DOESNOTEXIST
                qs = None
            if qs:
                qs.price = sale["price"]
                qs.save()
            else:
                # save then schedule for upload to url
                qs = SalesDetail.objects.create(
                    **sale, product=product_instance, store=store_instance
                )
            sale_pk = qs.pk
            product.update(sale)
            self.product = product

        transaction.on_commit(lambda: send_to_cloudinary.delay(sale_pk))
        return self


class UpdateProductSerializer(serializers.Serializer):
    product = ProductSerializer
    reviews = ReviewListSerializer
    store = Holder()
    sale_pk = None

    def create(self, validated_data):
        user = validated_data.pop("user")  # should be Scrapper
        product = {}
        product["name"] = validated_data["product"].pop("name")
        product["brand"] = validated_data["product"].pop("brand")
        store_name = validated_data.pop("store")["name"]
        sale_pk = None
        with transaction.atom():
            product_instance = Product.objects.get(
                name=product["name"], brand=product["brand"]
            )
            store_instance = Store.objects.get(name=store_name)
            sale = SalesDetail.objects.get(
                product=product,
                store=store_instance,
                search_url=validated_data["product"]["search_url"],
            )
            sale_pk = sale.pk
            for k in validated_data["product"].keys():
                attr = getattr(sale, k, None)
                if attr is not None:
                    sale.attr = validated_data["product"][attr]
            sale.save()

            for reveiw in reviews:
                instance = Review(product=product, store=store)
                instance.comment = review["comment"]
                instance.rating = review["rating"]
                instance.is_scrapper = True
                instance.user = review["user"]

        transaction.on_commit(lambda: send_to_cloudinary.delay(sale_pk))
