from django.db import models

# Create your models here.


class Channel(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=400)
    username = models.CharField(max_length=20)
