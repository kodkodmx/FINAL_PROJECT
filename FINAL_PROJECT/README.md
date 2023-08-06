# SIGHTS ON BIKES 50 PROJECT

## Video Demo: [Watch on YouTube](https://www.youtube.com/watch?v=Ifd7DZfp3YE)

## Distinctiveness and Complexity

I have dedicated significant effort to design this web app, aiming to provide an awesome user experience that closely resembles the actual bike tour journey.

The database is kept simple yet comprehensive, ensuring it offers all the necessary information for users to make seamless tour reservations.

## Description

The **Sights on Bikes 50 Project** is a web app showcasing my bike tour in Mexico City, which was previously exclusively available on Airbnb. As part of my final project for **CS50W**, I have enhanced and refined the web page originally created for **CS50X**, now dedicating it to promoting my bike tour.

## Implementation

### Language

For this web app, I used the following languages and technologies:

- HTML
- CSS
- Python
- Django
- JavaScript
- Jinja

### Content

The web app is built with Django and consists of the following components:

#### Main Project: `FINAL_PROJECT`

#### App: `sightsonbikes`

##### Static Files

The `static/sightsonbikes` folder contains all the images and fonts required for the web app. It also includes a `styles.css` file for handling CSS formatting and a `script.js` file for JavaScript code.

##### Templates

The `templates/sightsonbikes` folder holds various web page templates, including `index.html`, `home.html`, `book.html`, `confirmation.html`, `error.html`, `gallery.html`, `full.html`, `reviews.html`, and `layout.html` (the main template).

##### Django Files

- `admin.py`: This file adds the database (model) to the admin page.
- `app.py`: It includes all the apps integrated into the project.
- `models.py`: This file contains the model for the database tables (in this case, only one model).
- `test.py`: Not utilized in this project.
- `urls.py`: This file specifies the routes for each URL in the web app.
- `views.py`: This file is responsible for providing the necessary information to display on web pages, written in Python.

### Explanation

#### Static Folder

##### Pictures Folder

This folder contains all the images used in the project, including the icon.

##### script.js

This file houses all the JavaScript code required for the web app.

##### styles.css

The `styles.css` file defines all the formatting styles (size, color, alignment, etc.) for the web app.

#### Templates Folder

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
