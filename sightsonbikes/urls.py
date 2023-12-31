from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("home", views.home, name="home"),
    path("gallery", views.gallery, name="gallery"),
    path("reviews", views.reviews, name="reviews"),
    path("about", views.about, name="about"),
    path("full", views.full, name="full"),
    path("book", views.book, name="book"),
    path("confirmation", views.confirmation, name="confirmation"),
    path("error", views.error, name="error")
 ]
