from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=64)
    email = models.EmailField(max_length=254)
    phone = models.CharField(max_length=12)
    password = models.CharField(max_length=64)
    def __str__(self):
        return f"{self.name} {self.email} {self.phone} {self.password}"
    
class Tour(models.Model):
    tourid = models.AutoField(primary_key=True, unique=True)
    date = models.DateField()
    time = models.TimeField()
    price = models.IntegerField()
    px = models.IntegerField()
    def __str__(self):
        return f"{self.tourid} {self.date} {self.time} {self.px}"
    
class Booking(models.Model):
    tourid = models.ForeignKey(Tour, on_delete=models.CASCADE)
    bookid = models.AutoField(primary_key=True, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)    
    px = models.IntegerField()
    def __str__(self):
        return f"{self.bookid} {self.user} {self.px}"
    

    

