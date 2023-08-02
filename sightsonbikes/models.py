from django.db import models
# Create your models here.
    
class Reservation(models.Model):
    id = models.AutoField(auto_created = True, primary_key=True, unique=True)
    name = models.CharField(max_length=32)
    email = models.CharField(max_length=16)
    phone = models.CharField(max_length=12)
    tour = models.CharField(max_length=12)
    date = models.DateField()
    pax = models.IntegerField()
    time = models.TimeField(blank=True)
    price = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.name} {self.date} {self.tour} {self.time} PX:{self.pax} ID#{self.id} ${self.price} created at: {self.created_at}"
    

    

