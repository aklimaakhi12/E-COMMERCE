# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    USER_TYPE_CHOICES = [
        ('customer', 'Customer'),
        ('staff', 'Staff'),
    ]
    user_type = models.CharField(
        max_length=10,
        choices=USER_TYPE_CHOICES,
        default='customer'
    )
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email
