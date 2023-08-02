from django.shortcuts import render
from django.core.exceptions import ValidationError
from .models import *
import random

pictures = random.sample(range(1, 41), 40);

# Create your views here.
def index(request):
    return render(request, "sightsonbikes/index.html");

def home(request):
    return render(request, "sightsonbikes/home.html");

def gallery(request):
    return render(request, 'sightsonbikes/gallery.html', {
        'pictures': pictures
    });

def reviews(request):
    return render(request, "sightsonbikes/reviews.html");

def about(request):
    return render(request, "sightsonbikes/about.html");

def full(request):
    return render(request, "sightsonbikes/full.html", {
        'pictures': pictures
    });
def book(request):
    if request.method == "POST":
        name = request.POST["name"]
        email = request.POST["email"]
        phone = request.POST["phone"]
        tour = request.POST["tour"]
        date = request.POST["date"]
        pax = request.POST["pax"]
        time = request.POST["time"]

        try:
            if tour == "Morning Tour":
                price = int(pax) * 65;
                time = "09:00";
            elif tour == "Evening Tour":
                price = int(pax) * 65;
                time = "18:00";
            else:
                price = 350;
            
            if not name or not email or not phone or not tour or not date or not pax or not time:
                return render(request, "sightsonbikes/error.html", {
                    "message": "Error: Missing required field."
                });
            if int(pax) < 1 or int(pax) > 5:
                return render(request, "sightsonbikes/error.html", {
                    "message": "Error: Invalid number of passengers."
                });
            
            if Reservation.objects.filter(name=name, date=date, tour=tour, time=time).exists():
                return render(request, "sightsonbikes/error.html", {
                    "message": "Error: Booking already exists."
                })
        except ValidationError:
            return render(request, "sightsonbikes/error.html", {
                "message": "Error: Inappropriate data. The booking was not saved."
            })
        
        else:
                booking = Reservation(name=name, email=email, phone=phone, tour=tour, date=date, pax=pax, time=time, price=price)
                booking.save()
                return render(request, "sightsonbikes/confirmation.html", {
                    "confirmation_number": Reservation.objects.last().id
                })
        
    else:
        return render(request, "sightsonbikes/book.html");

def confirmation(request):
    return render(request, "sightsonbikes/confirmation.html", {
        "confirmarion_number": Reservation.objects.last().id
    })

def error(request):
    return render(request, "sightsonbikes/error.html", {
        "message": "Error: Booking not saved."
    });

