from django.shortcuts import render
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
    return render(request, "sightsonbikes/book.html");

def test(request):
    return render(request, "sightsonbikes/test.html", {
        'pictures': pictures
    });


