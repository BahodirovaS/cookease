import { useState } from 'react';
import { useLazyGetRecipeQuery, useAddFavoriteRecipeMutation, useDeleteFavoriteMutation, useGetFavoriteQuery } from "./auth/api";
import RecipeCard from './RecipeCard';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
// import { CORSMiddleware } from


function RecipeSearch() {
    const [form, setForm] = useState({
        diet: '',
        intolerances: '',
        includeIngredients: '',
        maxReadyTime: '',
        number: '',
    })
    const [LazyRecipe, { data: lazyData }] = useLazyGetRecipeQuery()
    const { data: favorites, isLoading } = useGetFavoriteQuery()
    const [favoriteRecipe] = useAddFavoriteRecipeMutation()
    const [unFavoriteRecipe] = useDeleteFavoriteMutation()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await LazyRecipe({ ...form })
    }
    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    if (isLoading) {
        return (
            <progress className="progress is-primary" max="100"></progress>
        )
    }

    const handleFavorite = async (id, title, image) => {
        let isFavorite = false;
        let favoriteRecipeId;
            for (const recipe of favorites.favorites || []) {
                if (recipe.id === id) {
                    isFavorite = true;

                    favoriteRecipeId = recipe.recipe_id;
                    break;
                }
            }
            if (isFavorite) {
                // Remove the recipe from favorites
                await unFavoriteRecipe({ favoriteRecipeId});
                console.log("You deleted a recipe")
            } else {
                // Add the recipe to favorites
                await favoriteRecipe({ id, title, image });
            }
    }


    return (

        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="diet">Diet:</label>
                    <input
                        type="text"
                        id="diet"
                        value={form.diet}
                        name='diet'
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="intolerances">Intolerances:</label>
                    <input
                        type="text"
                        id="intolerances"
                        name='intolerances'
                        value={form.intolerances}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="includeIngredients">Include Ingredients:</label>
                    <input
                        type="text"
                        name='includeIngredients'
                        id="includeIngredients"
                        value={form.includeIngredients}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="maxReadyTime">Max Ready Time:</label>
                    <input
                        type="text"
                        id="maxReadyTime"
                        name='maxReadyTime'
                        required
                        value={form.maxReadyTime}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="number">Number of Results:</label>
                    <input
                        type="text"
                        id="number"
                        name='number'
                        value={form.number}
                        onChange={handleInputChange}
                    />
                </div>
                <button className='btn btn-outline-success' type='submit'>Search</button>
            </form>
                <div>
                <ul>
                    {lazyData?.results?.map((recipe) => (
                        <>
                        <div key={recipe.id}>
                            <RecipeCard id={recipe.id} title={recipe.title} image={recipe.image} key={recipe.id} />
                                <button onClick={() => handleFavorite(recipe.id, recipe.title, recipe.image)}>Like</button>
                        </div>
                        </>
                    ))}
                </ul>
                </div>
        </div>
    );
};
export default RecipeSearch;
