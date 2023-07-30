from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("home", views.home, name="home"),
    path("gallery", views.gallery, name="gallery"),
    path("reviews", views.reviews, name="reviews"),
    path("about", views.about, name="about"),
    path("test", views.test, name="test"),
    path("full", views.full, name="full"),
    path("book", views.book, name="book"),
 ]
