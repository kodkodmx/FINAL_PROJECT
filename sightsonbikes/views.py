from django.shortcuts import render
from django.db import IntegrityError
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
            if tour == "Morning Tour" or tour == "Evening Tour":
                price = int(pax) * 65
            elif tour == "Private Tour":
                price = 350;
            booking = Reservation(name=name, email=email, phone=phone, tour=tour, date=date, pax=pax, time=time, price=price)
            booking.save()
        except IntegrityError:
            return render(request, "sightsonbikes/error.html", {
                "message": "Error: Booking not saved."
            })
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
    })


def test(request):
    return render(request, "sightsonbikes/test.html", {
        'pictures': pictures
    });
    

