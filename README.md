# SIGHTS ON BIKES 50 PROJECT

## Video Demo: [Watch on YouTube](https://www.youtube.com/watch?v=Ifd7DZfp3YE)

## Distinctiveness and Complexity

We start in the "index" with an almost empty page where the user must move their bicycle to the meeting point. With this action, we also demonstrate how they can navigate through the site. This is implemented in JavaScript and was complex to achieve because I had to learn how to move an object freely on the screen by dragging it with the mouse. It reminded me of the first project we did with "scratch" in CS50W.

Next, I created a bicycle lane that functions as a menu. When the user drags the bicycle on this lane, the views on the "home" page change, revealing different stages of the tour. Simultaneously, it guides the user to make a reservation. The challenge here was to ensure the bicycle stays within the lane and that the page views change without refreshing the page. This part was also accomplished using JavaScript.

For the "book" page, I designed an HTML form and added some restrictions. For instance, I ensured that no more than 5 spots could be reserved. Additionally, if the user selects the private tour option, an additional field is displayed where they can request a specific start time. I thoroughly tested these features to make sure they function correctly and cannot be manipulated on the back-end in views.py using Python.

The gallery offers a fullscreen view created in HTML and JavaScript. The images are displayed randomly each time the page is reloaded, and this was achieved on the back-end using Python.

Security measures were added in views.py to prevent new reservations if the "book" page is reloaded, or if there are any inconsistencies in the data, the user is directed to the "error" page.

Almost all pages and views are designed in a way that eliminates the need to scroll down for more content, except for the reviews page. For that, I used an external app since Airbnb doesn't provide access to their API.

The only model I use is simple, yet it includes all the necessary data to make seamless tour reservations.

Because in the mobile version, dragging is not possible, you can also click on the places where you want to drag the bicycle.

I have put forth significant effort into designing this web app, with the aim of providing an exceptional user experience that closely mirrors the actual bike tour journey. And achieving this goal definitely makes it **unique and complex.**

## Description

The **Sights on Bikes 50 Project** is a web app showcasing my bike tour in Mexico City, which was previously exclusively available on Airbnb. As part of my final project for **CS50W**, I have enhanced and refined the web page originally created for **CS50X**, now dedicating it to promoting my bike tour.

## Implementation

### Languages and Technologies:

For this web app, I used the following languages and technologies:

- HTML
- CSS
- Python
- Django
- JavaScript
- Jinja

### Content and Explanation

The web app is built with Django and consists of the following components:

#### Main Project: `FINAL_PROJECT`

The main folder of the project and includes the main settings of how Django will behave when running my app.

#### App: `sightsonbikes`

The app created by me for this web app

##### Django Files fot this app

- `admin.py`: This file adds the database (model) to the admin page.
- `apps.py`: It includes all the apps integrated into the project.
- `models.py`: This file contains the model for the database tables (in this case, only one model).
- `test.py`: Not utilized in this project.
- `urls.py`: This file specifies the routes for each URL in the web app.
- `views.py`: This file is responsible for providing the necessary information to display on web pages, written in Python.

#### Static Folder

The `static/sightsonbikes` folder contains all the images and fonts required for the web app. It also includes a `styles.css` file for handling CSS formatting and a `script.js` file for JavaScript code.

##### Pictures Folder

This folder contains all the images used in the project, including the icon.

##### script.js

This file houses all the JavaScript code required for the web app.

##### styles.css

The `styles.css` file defines all the formatting styles (size, color, alignment, etc.) for the web app.

#### Templates Folder

The `templates/sightsonbikes` folder holds various web page templates, including `index.html`, `home.html`, `book.html`, `confirmation.html`, `error.html`, `gallery.html`, `full.html`, `reviews.html`, and `layout.html` (the main template).

##### layout.html

This template serves as the foundation for all web pages in the web app. It begins by stating that it is an HTML document in English. Within the template's head section, it:

- Sets the ASCII "UTF-8" code.
- Ensures webpage responsiveness using CSS.
- Imports Bootstrap 5.1.
- Defines the favicon as a bicycle.
- Links to the locally stored `styles.css` for CSS formatting.
- Links to the locally stored `script.js` for JS code.
- Defines the first part of the title.
- Loads some scripts for JavaScript and Airbnb.

The body section of the template includes:


- The Header section displayed at the top of the pages that includes a navegation menu.
- The navigation bar (bike lane) is displayed immediately after.
- The main section, which uses JS to call specific blocks to be displayed for individual web pages.
- A footer that displays information about myself and invites visitors to find out more in the about section.

##### index.html

This page allows users to drag a bicycle to the "meeting point."

##### home.html

The `home.html` page serves as the main page of the web app. It showcases a bike lane with a bicycle inside, and using JS, the content changes based on the bike's location in the bike lane:

- Meeting Point: Displays a Google map inside an "iframe" tag, showing the tour's meeting point and some pictures.
- Your Host: Provides information about the tour host and how the tour began, along with some pictures.
- The Route: Shows an unordered list of sights to be visited during the tour, along with maps for the first and second parts of the tour. It also includes a note about the tour's length.
- The Expect: Offers a general description and information about the tour and its inclusions.
- Finish Line: Displays tour options, guest requirements, and prices.

##### gallery.html

This page features a bootstrap carousel gallery with a button to book directly or view pictures in `full.html` in fullscreen mode.

##### reviews.html

The `reviews.html` page displays the latest Airbnb reviews of the tour.

##### about.html

The `about.html` page contains information about myself as a web developer, expecting some guests working in IT companies to potentially hire me.

##### book.html

This page presents a form to be filled out for making reservations (utilizing the Reservation model).

##### README.md

This file provides an explanation of how the web app functions using the .md format.

##### requirements.txt

The `requirements.txt` file contains a list of minimal software required on the server to run this web app. The Django web server is used to launch the app.

With these enhancements, the Sights on Bikes 50 Project is ready to attract more attention and serve as a powerful tool for promoting the bike tour in Mexico City.

## How to run the application.

In the console of the computer where the project is hosted and that has Django installed, type: "python manage.py runserver"

## Additional information.

"I would love to deploy this web app and use it for my bike tour, but I don't know how to do that yet. Is that part missing from this course?"
