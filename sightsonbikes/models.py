from django.db import models

# Create your models here.
    
class Booking(models.Model):
    id = models.AutoField(auto_created = True, primary_key=True, unique=True)
    name = models.CharField(max_length=20)
    email = models.CharField(max_length=20)
    phone = models.CharField(max_length=20)
    tour = models.CharField(max_length=20)
    date = models.DateField()
    pax = models.IntegerField()
    time = models.TimeField()
    price = models.IntegerField()
    confirm = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.name} {self.date} {self.tour} {self.px} {self.bookid}"
    

    

