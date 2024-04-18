## What is CookEase?

CookEase is a recipe search application that allows users to search for recipes based on their dietary preferences and be able to view their details. Said dietary preferences include the user's diet, allergies or intolerances, ingredients they want to use, the amount of time they want to spend on the recipe, and how many searches they want to populate the search page. Some additional features users are able to see when viewing a recipe include health scores, price per serving, and nutritional information. In addition to searching for recipes, authenticated users are able to favorite recipes and save them to their account.

Using a NoSQL database, MongoDB, the backend was built using PyMongo and the FastAPI web framework. This application includes a user authentication feature which is built using JWTDown for FASTAPI, and uses a third-party api service, Spoonacular API, to search for recipes. In order to create a responsive and interactive interface, the frontend was built using Javascript and RTK Query. In terms of frontend design, Bootstrap and Bootstrap Icons were used with CSS to create a pleasant and friendly user experience.

## Intended Market

CookEase is built for those who struggle to find new recipes to fit their specific diets or intolerances. It's also useful for users who are new to cooking and have ingredients but are unsure about what to make with them. This application will make it easier for users to find what's right for them. The favorite feature allows users to favorite recipes that they enjoy and would want to make again.

## Approach

A wireframe was used as a guide to create the initial layout of this application. User authentication was implemented first in the backend using JWTdown. We then went into creating endpoints to filter and provide the search data coming from the third-party API, requiring users to have a token when necessary. Once the backend was running smoothly, we started building the frontend and their components to test. Unit tests were created to ensure that the endpoints were working.

## Set up

1. Fork and Clone repo [https://gitlab.com/guardians-of-the-repository/cookease]
2. Create a .env file in the outer most directory
3. Set SPOONACULAR_API_KEY to your Spoonacular API key in the .env file
4. Set SIGNING_KEY to your signing key in the .env file
5. Set REACT_APP_cookease_API_HOST to "http://localhost:8000"
6. Set REACT_APP_SPOONACULAR_HOST to "https://api.spoonacular.com/recipes/complexSearch??"
7. run -npm install
8. run -docker volume create mongo-data
9. run -docker compose build
10. run -docker compose up
