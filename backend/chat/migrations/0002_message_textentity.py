# Generated by Django 5.0.3 on 2024-03-24 20:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=100)),
                ('date', models.DateField(auto_now_add=True)),
                ('date_unixtime', models.DateField()),
                ('actor', models.CharField(max_length=100)),
                ('actor_id', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=100)),
                ('text', models.TextField(max_length=1000)),
                ('from_m', models.CharField(max_length=100)),
                ('from_id', models.CharField(max_length=100)),
                ('forwarded_from', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='TextEntity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=100)),
                ('text', models.TextField(max_length=1000)),
            ],
        ),
    ]