## February 13th, 2023

-Made rough draft of 2 issues in git lab
-A bit confused on what goes in each section and formatting but we tried to fill it in
-Started work on creating MongoDB and user authentication
-> Sabina main driver -> everyone else secondary

## February 14th, 2023

-Got user authentication completed, signup + login, and it returns an account token
-Started on our favorites database, started on POST function for it
-> Jennifer main driver -> everyone else secondary

## February 15th, 2023

-Continued work on favorites database, POST and GET functions. Tried to get them working but couldnt because we had no recipes.
-Started work on 3rd party recipes API GET, and finished it. Can search and return results.
-> Eric main driver -> everyone else secondary

## February 16th, 2023

-Finished a few functions, can GET a list of favorites, as well as POST a favorite to our list of favorites.
-Tried to start on the DEL function of favorites to remove a favorites from the list, but ran into some blockers. Got it to work by hard coding in the 12 digit hex code id
but we don't know how to grab the string id with a variable. Tried to change it to use recipe id instead of the long str but we couldn't figure that out either.
-> Braeden/Benjamin main drivers

## February 21st, 2023

-Started work on get recipe details function. Got it to work and finished it. Will use this function to get all information from spoonacular API and filter it in the front end
-Talked with Candice a bit and figured out our delete function that we left off was correct and working as intended and will incorporate rest in frontend

-> Jenn main driver

# February 22nd, 2023

-Started work on frontend auth, we got it to work was able to double check that user was created as well as be able to log in by using FASTapi, also FASTapi returns token.
-Unsure how to use this token in the front end and how it all works, but it works with the backend for the time being

-> Eric main driver -> Sabina

# February 23rd, 2023

-Started our search page, ran into a few blockers making sense of the code in learn and the example repo.
-Eventually got some help from candice explaining what we're doing wrong, we constructed our end point wrong and couldnt get any data

-> Braeden main driver

# February 24th, 2023

-Hard stuck on search recipes page and redux! Got a lot of help from tyler and Jimmy but couldn't figure much out at the end of the day. Not sure why we are getting errors

-> Sabina main driver

# February 27th, 2023

-Braeden figured out how to fix our search recipes page over the weekend with Tyler
-Started work on Recipe details page and currently have everything printing properly

-> Jenn/Eric/Sabina driver

# February 28th, 2023

-Got kind of stuck on add favorite feature, so we split off and some people went to work on that and change the back end.
-I worked on some bootstrap and CSS in the front end, did the Sign up page, also added logo into the navbar
-Also worked on the logout function and button with Jenn

# March 1st, 2023

-Finished the rest of our features, got our like button to add recipes to favorites
-Did some css for signup and login pages and overall css for project

# March 2nd, 2023

-More CSS stuff and decorating

# March 3rd, 2023

-Changed some class names so it doesn't interfere with my group members code
-Added in some error messages for Login and Signup if you try to do it with incorrect credentials
-Made them redirect to main page on succesful login/signup, and on unsuccesful you will get corresponding error messages
-Ran into some trouble with my sign up function because in the back end once you sign up it automatically logs you in. It also works like this in the front end, so if you entered a username + password that was already created in signup it would still work and log you in instead of telling you that user already exists. Had to code some logic into my useSignUpMutation function to check response before logging in.

# March 6th, 2023

# March 7th, 2023

# March 8th, 2023

-Started work on my specific unit test, create favorite
-Was confused if my test was accurate or not, even though it was passing because I was just hard coding values.
-I think it should be correct though after i watched the lectures
