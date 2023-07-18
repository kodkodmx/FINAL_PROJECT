from django.shortcuts import render
from .models import *
import random

# Create your views here.
def index(request):
    return render(request, "sightsonbikes/index.html");

def home(request):
    return render(request, "sightsonbikes/home.html", {
        "gallery": 0,
        "reviews":0,
        "about": 0
    });

def gallery(request):
    pictures = random.sample(range(40), 40);
    return render(request, 'sightsonbikes/gallery.html', {
        'pictures': pictures
    });

def reviews(request):
    return render(request, "sightsonbikes/home.html", {
        "gallery": 0,
        "reviews": 1,
        "about": 0
    });

def about(request):
    return render(request, "sightsonbikes/home.html", {
        "gallery": 0,
        "reviews": 0,
        "about": 1
    });




