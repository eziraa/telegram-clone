from django.db import models

# Create your models here.


class TextEntity(models.Model):
    type = models.CharField(max_length=100)
    text = models.TextField(max_length=1000)


class Message(models.Model):
    type = models.CharField(max_length=100)
    date = models.DateField(auto_now_add=True)
    date_unixtime = models.DateField()
    actor = models.CharField(max_length=100)
    actor_id = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    text = models.TextField(max_length=1000)
    from_m = models.CharField(max_length=100)
    from_id = models.CharField(max_length=100)
    forwarded_from = models.CharField(max_length=100, blank=True, null=True)
    text_entities = models.ManyToOneRel(
        to=TextEntity, field='id', field_name='id', on_delete=models.CASCADE)

class Channel(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=400)
    username = models.CharField(max_length=20)


class Contacts(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True)
    date_unixtime = models.DateField(auto_now=True)
