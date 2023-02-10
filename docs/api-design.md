### Log in

* Endpoint path: /login
* Endpoint method: POST

* Request shape (form):
  * username: string
  * password: string


* Response: Account information and a token
* Response shape (JSON):
    ```json
    {
      "account": {
        "username": "username",
        "password": "password"
      },
      "token": "token"
    }
    ```


### Log out

* Endpoint path: /logout
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Response: Always true
* Response shape (JSON):
    ```json
    true
    ```

### Sign up

* Endpoint path: /signup
* Endpoint method: POST
* Query parameters:
  * first name: string
  * last name: string
  * username: string
  * password: string
  * confirm password: string


* Headers:
  * Authorization: none

* Request shape (JSON):
    ```json
    {
    "first_name": "first_name",
    "last_name": "last_name",
    "username": "username",
    "password": "password",
    "confirm_password": "confirm_password",
    }
    ```

* Response: Account successfully created
* Response shape (JSON):
    ```json
    {
        "username": "username",
        "password": "password",
    }
    ```

### Edit user page

* Endpoint path: /edit-user
* Endpoint method: PUT
* Query parameters:
  * password: string
  * password: string

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):
    ```json
    {
    "password": "password",
    "confirm_password": "confirm_password",
    }
    ```

* Response: You have changed your password
* Response shape (JSON):
    ```json
    {
    "first_name": "first_name",
    "last_name": "last_name",
    "username": "username",
    "password": "password",
    }
    ```

### Search recipe page

* Endpoint path: /search-recipe
* Endpoint method: GET
* Query parameters:
  * ingredients: string
  * quantity: integer
  * intolerances: string
  * diet: string
  * ready in minutes: integer

* Response: Search results with option to favorite
* Response shape (JSON):
    ```json
    "results": [
        {
            "id": 716429,
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
            "favorites": true,
        },
        {
            "id": 715538,
            "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
            "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
            "favorites": false,
        }
    ],
    ```

### Search recipe page like button

* Endpoint path: /search-recipe
* Endpoint method: PUT
* Query parameters:
  * ingredients: string
  * quantity: integer
  * intolerances: string
  * diet: string
  * ready in minutes: integer

* Request shape (JSON):
    ```json
    {
        "favorites": false,
    }
    ```

* Response: Search results with option to favorite
* Response shape (JSON):
    ```json
    "results": [
        {
            "id": 716429,
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
            "favorites": true,
        },
        {
            "id": 715538,
            "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
            "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
            "favorites": false,
        }
    ],
    ```

### Add Recipe page

* Endpoint path: /add-recipe
* Endpoint method: POST
* Query parameters:
  * title: string
  * ingredients: string
  * instructions: string
  * quantity: integer
  * image: string

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):
    ```json
    {
    "title": "garlic bread",
    "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
    "ingredients": [
        {
            "name": "carrot",
            "quantity": 2,
        },
    ],
    "instructions": "stop, drop, and roll",
    "diet": "vegetarian",
    "readyInMinutes": 30,
    }
    ```

* Response: New recipe added
* Response shape (JSON):
    ```json
    "results": [
        {
            "id": 716429,
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
            "ingredients": [
                {
                    "name": "carrot",
                    "quantity": 2,
                }
            ],
            "instructions": "stop, drop, and roll",
        },
        {
            "id": 715538,
            "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
            "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
            "ingredients": [
                {
                    "name": "carrot",
                    "quantity": 2,
                }
            ],
            "instructions": "stop, drop, and roll",
        }
    ],
    ```


### My recipes page

* Endpoint path: /my-recipes
* Endpoint method: GET
* Query parameters:
  * title: string
  * ingredients: string
  * instructions: string
  * quantity: integer
  * image: string

* Headers:
  * Authorization: Bearer token

* Response: New recipe added
* Response shape (JSON):
    ```json
    "results": [
        {
            "id": 716429,
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        },
        {
            "id": 715538,
            "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
            "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
        }
    ],
    ```


### My recipes page

* Endpoint path: /my-recipes
* Endpoint method: DELETE
* Query parameters:
  * title: string
  * ingredients: string
  * instructions: string
  * quantity: integer
  * image: string

* Headers:
  * Authorization: Bearer token

Response: Always true
Response shape (JSON):
    ```json
    true
    ```

### My recipes page

* Endpoint path: /my-recipes
* Endpoint method: PUT
* Query parameters:
  * title: string
  * ingredients: string
  * instructions: string
  * quantity: integer
  * image: string

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):
    ```json
    {
    "title": "garlic bread",
    "ingredients": [
        {
            "name": "carrot",
            "quantity": 2,
        }
    ],
    "instructions": "stop, drop, and roll",
    "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
    }
    ```

* Response: New recipe added
* Response shape (JSON):
    ```json
    "results": [
        {
            "id": 716429,
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        },
        {
            "id": 715538,
            "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
            "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
        }
    ],
    ```


### Favorite Recipes

* Endpoint path: /favorite-recipes
* Endpoint method: GET
* Query parameters:
  * favorites: boolean

* Headers:
  * Authorization: Bearer token


* Response: recipes that have a favorites: true
* Response shape (JSON):
    ```json
    "results": [
        {
            "id": 716429,
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
            "favorites":true,
        },
        {
            "id": 715538,
            "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
            "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
            "favorites":true,
        }
    ],
    ```

### Favorite Recipes

* Endpoint path: /favorite-recipes
* Endpoint method: PUT
* Query parameters:
  * favorites: boolean

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):
    ```json
    {
        "favorites": false,
    }
    ```

* Response: recipes that have a favorites: true
* Response shape (JSON):
    ```json
    "results": [
        {
            "id": 716429,
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
            "favorite": false
        },
        {
            "id": 715538,
            "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
            "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
            "favorite": false
        }
    ],
    ```


### Show recipe details

* Endpoint path: /recipe/id
* Endpoint method: GET

* Headers:
  * Authorization: none

* Response: recipe details
* Response shape (JSON):
    ```json
    "results": [
        {
            "id": 716429,
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
            "intolerances": "eggs, peanuts",
            "diet": null,
            "readyInMinutes": 30,
            "ingredients": [
                {
                    "name": "carrot",
                    "quantity": 2,
                }
            ],
            "instructions": "stop, drop, and roll",
            "description": "one serving contains 2 calories",
        },
    ],
    ```
