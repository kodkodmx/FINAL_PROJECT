# Generated by Django 4.2 on 2023-08-02 03:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(max_length=32)),
                ('email', models.CharField(max_length=16)),
                ('phone', models.CharField(max_length=12)),
                ('tour', models.CharField(max_length=12)),
                ('date', models.DateField()),
                ('pax', models.IntegerField()),
                ('time', models.TimeField(blank=True)),
                ('price', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
