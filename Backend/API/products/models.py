from django.db import models
from django.conf import settings  # To refer to your custom User model

# Product Model
class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock_quantity = models.IntegerField()
    category = models.CharField(max_length=100)
    image_url = models.URLField(blank=True)

    def __str__(self):
        return self.name
