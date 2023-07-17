from django.shortcuts import render
from .models import *

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
    return render(request, "sightsonbikes/home.html", {
        "gallery": 1,
        "reviews": 0,
        "about": 0
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




