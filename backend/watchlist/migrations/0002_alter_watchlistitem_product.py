# Generated by Django 4.0.6 on 2022-08-08 21:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
        ('watchlist', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='watchlistitem',
            name='product',
            field=models.ForeignKey(default=3, on_delete=django.db.models.deletion.CASCADE, related_name='watchlistitems', to='products.product'),
            preserve_default=False,
        ),
    ]
