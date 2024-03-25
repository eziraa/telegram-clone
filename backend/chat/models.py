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
    reply_to_message_id = models.IntegerField(blank=True, null=True, default=0)
    text_entities = models.ForeignKey(
        TextEntity,  on_delete=models.CASCADE)

class Channel(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=400)
    username = models.CharField(max_length=20)

    def __str__(self):
        return f'Channel {self.name} {self.description}'


class Contact(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True)
    date_unixtime = models.DateField(auto_now=True)


class FrequentContacts(models.Model):
    category = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    rating = models.DecimalField(max_digits=8, decimal_places=6)


class Chat(models.Model):
    """
    This model is used to  represent chats like private group, private channel , public channel and  also public group
    type: attribute used to specify the type of chat
    """
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    messages = models.ForeignKey(
        Message, on_delete=models.CASCADE)
