# March 10th 2023
- Started messing around with deployment, but we ran into some pipeline issues so I think we'll continue next week
- Finished our project! Everything works and we ran all the spell and code checkers to get to work

# March 8th 2023
- Today, I finished up my delete favorite unit test
- It was complicated figuring out which files and routes to reference for the different functions I had to make
but I think it ended up being mostly syntax experimenting
- For the assertions, I tried asserting a 'bool' as True but that didn't work, but when I did 'assert == True' it was better
- I also put a 'assert isinstance(data, bool)' because before that, if I tried asserting anything with data, it wouldn't work
but adding this made all the tests pass!
- Sabina was also helping me and added different stuff on her end by creating a favorite first in the test case to delete it
and it worked for her. We both could be right, but just to be safe, I think we'll talk to an instructor tommorow for clarification

# March 7th 2023
- We successfully implemented the delete button, and made sure to change the invalidatesTags from Recipes to Favorites so that the tags could recognize the mutation and display the updated Favorites page.
- With this change, users are now able to like and unlike a recipe as many times as they like!
- We also improved the CSS on the SearchRecipe.js page, making sure that the results were displayed in a grid format.
- We decided to add a new font to our CSS as the existing ones didn't seem different enough from each other.
- Lastly, we added a tomato icon for the tab header

# March 6th 2023
- Today, we managed to get the unFavorite function to work by passing in the correct recipe_id variable, which wasn't the same name as the one in the backend.
- We updated the handleFavorite function to allow users to delete a recipe from favorites, and it worked perfectly.
- Next, we used Bootstrap icons to transform the Like button into a heart shape, with white and red hearts to differentiate between recipes that are and aren't in the favorites.
- We tried putting the heart button in the Recipe Card to avoid duplicating code, but quickly realized that the Favorites and Search Recipe pages would need different buttons.
- We had an issue when trying to allow users to un-favorite a recipe directly on the Search Recipe page. The heart remained red, and the recipe wasn't getting added back to the favorites list.
- However, we did manage to get the delete favorite function working correctly on the Favorites page, so when a user clicks the red heart, the recipe is removed from the page and from the favorites list.

# March 1st 2023
- Yesterday, we worked on fixing a FormData bug in our code.
- To fix the bug, I had to make changes to our apiSlice, specifically adding an id to our addFavorite endpoint and including a body with the id in the query object.
- As a result of the fix, we had to make some changes to our backend to ensure that we were making a favorite using the API id instead of a random database id.
- The change also required us to tweak our delete favorite function, which took some time to figure out.
- Eventually, we discovered that our FavoriteOut id was the same as FavoriteIn, which was causing the id to override the database _id when called.
- To solve this issue, we added a recipe_id variable to store the database ObjectId and ensure that the user deletes a recipe in the local database instead of trying to delete from the API.

# February 28th 2023
- We started working on our favorite recipe page
- We had trouble getting favorites from the backend to populate the page
- Realized we were using random ids for the GET favorite endpoint
- Created a recipe card and updated the backend to pull favorites from the API
- Implemented a logout function for users
- Working on a like button to add recipes to favorites page
- Encountering errors with FormData not accepting certain parameters. We'll try to figure something out tommorow

# February 27th 2023
- We got the search recipes to work! I stayed up late with Tyler, Jimmy, and Justin and tried defining different redux elements in the searchrecipe.js
but to no avail
- Tyler messaged me over the weekend with some demo code that would probably make it work with populating the arrays and it did! We had to use lazy query
- We also worked on the show recipe detail function to start working on getting the page to consistently load when we click on the title

# February 22nd 2023
- We started doing front-end today while figuring out some redux methods with authentication
- We got a test front-end page to display with a nav bar for login and sign up (Not fully functional yet)
- Able to display form for both sign up and login

# February 16th 2023
- We worked on our favorites python files for our routers and queries
- We got it to work for creating and getting a recipe
- Delete only works if we hardcode the specific long id
  but that is not what we want since we want to access these properties dynamically
- Goal next is to figure out how to delete a favorite with a dynamic input id that is not the hashed string

## February 9th 2023
- We worked on our API design and getting our route ideas set up
- We used the Spoonacular API as reference for our API design
