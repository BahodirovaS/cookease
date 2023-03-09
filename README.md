## What is CookEase?

CookEase is a recipe search application that allows users to search for recipes based on their dietary preferences and be able to view their details. Said dietary preferences include the user's diet, allergies or intolerances, ingredients they want to use, the amount of time they want to spend on the recipe, and how many searches they want to populate the search page. Some additional features users are able to see when viewing a recipe include health scores, price per serving, and nutritional information. In addition to searching for recipes, authenticated users are able to favorite recipes and save them to their account.

Using a NoSQL database, MongoDB, the backend was built using PyMongo and the FastAPI web framework. This application includes a user authentication feature which is built using JWTDown for FASTAPI, and uses a third-party api service, Spoonacular API, to search for recipes. In order to create a responsive and interactive interface, the frontend was built using Javascript and RTK Query. In terms of frontend design, Bootstrap and Bootstrap Icons were used with CSS to create a pleasant and friendly user experience.


## Intended Market

CookEase is built for those who struggle to find new recipes to fit their specific diets or intolerances. It's also useful for users who are new to cooking and have ingredients but are unsure about what to make with them. This application will make it easier for users to find what's right for them. The favorite feature allows users to favorite recipes that they enjoy and would want to make again.

## Approach

A wireframe was used as a guide to create the initial layout of this application. User authentication was implemented first in the backend using JWTdown. We then went into creating endpoints to filter and provide the search data coming from the third-party API, requiring users to have a token when necessary. Once the backend was running smoothly, we started building the frontend and their  components to test. Unit tests were created to ensure that the endpoints were working.

## M.V.P

We created a login/logout/signup page, a main page to welcome users, a search page to search for recipes by integrating the Spoonacular API, a recipe-detail page to view a recipe, and a favorite page for logged in users to save their recipes. If users are logged in, a heart button allows them to save their recipes to their favorites.

## Test

