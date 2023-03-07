<<<<<<< HEAD
import React, { useState } from 'react';
import { useLazyGetRecipeQuery, useAddFavoriteRecipeMutation, useDeleteFavoriteMutation, useGetFavoriteQuery } from "./auth/api";
import RecipeCard from './RecipeCard';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/css/main.css';
import './assets/img/hero-img.png';
=======
import { useState } from 'react';
import { useLazyGetRecipeQuery, useAddFavoriteRecipeMutation, useDeleteFavoriteMutation, useGetFavoriteQuery } from "./auth/api";
import RecipeCard from './RecipeCard';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'

>>>>>>> 5ded64629198f3d1ded3c342429b526a69de5d73

function RecipeSearch() {
    const [form, setForm] = useState({
        diet: '',
        intolerances: '',
        includeIngredients: '',
        maxReadyTime: '',
        number: '',
    })
    const [LazyRecipe, { data: lazyData }] = useLazyGetRecipeQuery()
<<<<<<< HEAD
    // const { data: favorites, isLoading } = useGetFavoriteQuery()
    // const [favoriteRecipe] = useAddFavoriteRecipeMutation()
    // const [unFavoriteRecipe] = useDeleteFavoriteMutation()
=======
    const { data: favorites, isLoading } = useGetFavoriteQuery()
    const [favoriteRecipe] = useAddFavoriteRecipeMutation()
    const [unFavoriteRecipe] = useDeleteFavoriteMutation()
>>>>>>> 5ded64629198f3d1ded3c342429b526a69de5d73


    const handleSubmit = async (e) => {
        e.preventDefault()
        await LazyRecipe({ ...form })
    }
    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
<<<<<<< HEAD
    // if (isLoading) {
    //     return (
    //         <progress className="progress is-primary" max="100"></progress>
    //     )
    // }

    // const handleFavorite = async (id, title, image) => {
    //     let isFavorite = false;
    //     let recipe_id;
    //     for (const recipe of favorites.favorites || []) {
    //         if (recipe.id === id) {
    //             isFavorite = true;
    //             recipe_id = recipe.recipe_id;
    //             break;
    //         }
    //     }
    //     if (isFavorite) {
    //         // Remove the recipe from favorites
    //         await unFavoriteRecipe({ recipe_id });
    //         console.log("You deleted a recipe")
    //     } else {
    //         // Add the recipe to favorites
    //         await favoriteRecipe({ id, title, image });
    //     }
    // }

    return (
        <div className="row justify-content-center my-5">
            <div className="text-center">
                <h2>Find a Recipe that's right for you!</h2>
            </div>
            <div className="row justify-content-center my-5">
                <div className="col-sm-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="diet">Diet Options:</label>
                            <select
                                className="form-select form-control-lg"
                                aria-label="Diet Options:"
                                value={form.diet}
                                id="diet"
                                name='diet'
                                onChange={handleInputChange}
                            >
                                <option defaultValue="null">None</option>
                                <option value="Gluten Free">Gluten Free</option>
                                <option value="Ketogenic">Ketogenic</option>
                                <option value="Vegetarian">Vegetarian</option>
                                <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
                                <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
                                <option value="Vegan">Vegan</option>
                                <option value="Pescetarian">Pescetarian</option>
                                <option value="Paleo">Paleo</option>
                                <option value="Primal">Primal</option>
                                <option value="Low FODMAP">Low FODMAP</option>
                                <option value="Whole30">Whole30</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="intolerances">Intolerance List:</label>
                            <select
                                className="form-control form-control-lg"
                                aria-label="Intolerance List:"
                                value={form.intolerances}
                                id="intolerances"
                                name='intolerances'
                                onChange={handleInputChange}
                            >
                                <option defaultValue="null">None</option>
                                <option value="Dairy">Dairy</option>
                                <option value="Egg">Egg</option>
                                <option value="Gluten">Gluten</option>
                                <option value="Grain">Grain</option>
                                <option value="Peanut">Peanut</option>
                                <option value="Seafood">Seafood</option>
                                <option value="Sesame">Sesame</option>
                                <option value="Shellfish">Shellfish</option>
                                <option value="Soy">Soy</option>
                                <option value="Sulfite">Sulfite</option>
                                <option value="Tree Nut">Tree Nut</option>
                                <option value="Wheat">Wheat</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="includeIngredients">Include Ingredients:</label>
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="apple, flour, sugar, egg, potato, tomato, etc"
                                value={form.includeIngredients}
                                name='includeIngredients'
                                id="includeIngredients"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="maxReadyTime">Max Ready Time:</label>
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="15, 30, 45, 60, etc"
                                value={form.maxReadyTime}
                                id="maxReadyTime"
                                name='maxReadyTime'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="number">Number of Results:</label>
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="1, 3, 5, 10, etc"
                                value={form.number}
                                id="number"
                                name='number'
                                onChange={handleInputChange}
                            />
                        </div>
                        <button className='btn btn-outline-success' type='submit'>Search</button>
                    </form>
                </div>
                <div className="text-center">
                    <ul>
                        {lazyData?.results?.map((recipe, pos) =>
                            <div key={pos}>
                                <div key={recipe.id}>
                                    <RecipeCard id={recipe.id} title={recipe.title} image={recipe.image} key={recipe.id} />
                                    {/* <button className="btn btn-link" onClick={() => handleFavorite(recipe.id, recipe.title, recipe.image)}>
                                            {favorites.favorites?.some(fav => fav.id === recipe.id) ?
                                                <i className="bi bi-heart-fill heart-icon text-danger"></i> :
                                                <i className="bi bi-heart heart-icon"></i>
                                            }
                                        </button> */}
                                </div>
                            </div>
                        )}
                    </ul>
=======
    if (isLoading) {
        return (
            <progress className="progress is-primary" max="100"></progress>
        )
    }

    const handleFavorite = async (id, title, image) => {
        let isFavorite = false;
        let recipe_id;
            for (const recipe of favorites.favorites || []) {
                if (recipe.id === id) {
                    isFavorite = true;
                    recipe_id = recipe.recipe_id;
                    break;
                }
            }
            if (isFavorite) {
                // Remove the recipe from favorites
                await unFavoriteRecipe({ recipe_id });
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
                                <button className="btn btn-link" onClick={() => handleFavorite(recipe.id, recipe.title, recipe.image)}>
                                    {favorites.favorites?.some(fav => fav.id === recipe.id) ?
                                        <i className="bi bi-heart-fill heart-icon text-danger"></i> :
                                        <i className="bi bi-heart heart-icon"></i>
                                    }
                                </button>
                        </div>
                        </>
                    ))}
                </ul>
>>>>>>> 5ded64629198f3d1ded3c342429b526a69de5d73
                </div>
            </div>
        </div>
    );
};
export default RecipeSearch;
