import React, { useState } from 'react';
import {
    useLazyGetRecipeQuery,
    useAddFavoriteRecipeMutation,
    useDeleteFavoriteMutation,
    useGetFavoriteQuery
} from "../auth/api";
import { useGetTokenQuery } from '../auth/authApi';
import RecipeCard from './RecipeCard';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../assets/css/main.css';
import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


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
    const { data: currentUser } = useGetTokenQuery()

    const firstColumnRef = useRef(null);
    const secondColumnRef = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
            if (firstColumnRef.current && secondColumnRef.current) {
                const scrollY = window.scrollY;
                firstColumnRef.current.style.transform = `translateY(${-scrollY * 0.25}px)`;
                secondColumnRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
        let recipe_id;
        for (const recipe of favorites.favorites || []) {
            if (recipe.id === id) {
                isFavorite = true;
                recipe_id = recipe.recipe_id;
                break;
            }
        }
        if (isFavorite) {
            await unFavoriteRecipe({ recipe_id });
        } else {
            await favoriteRecipe({ id, title, image });
        }
    }


    return (
        <>
            <div className="page-container">
                <div className="main-container">
                    <div className="words-container">
                        <h2>Go ahead, try our smart search feature!</h2>
                        <p>Fill out all or some of the fields below to uncover recipes that fit your preferences.
                            Create an account now or log in to save them!
                        </p>
                        {!currentUser ? (
                            <div className="button-container">
                                <NavLink to="/signup" className="btn-signup" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>Create Account</NavLink>
                                <NavLink to="/login" className="btn-login" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>Log In</NavLink>
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                    <div className="images-container">
                        <div className="image-grid">
                            <div className="image-column" ref={firstColumnRef}>
                                <div className="image1"></div>
                                <div className="image2"></div>
                            </div>
                            <div className="image-column" ref={secondColumnRef}>
                                <div className="image3"></div>
                                <div className="image4"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="diet">Do you have a specific diet?</label>
                            <select
                                className="form-select form-control-sm"
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
                            <label htmlFor="intolerances">Any allergies or intolerances?</label>
                            <select
                                className="form-select form-control-sm"
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
                            <label htmlFor="includeIngredients">Do you have specific ingredients in mind?</label>
                            <input
                                className="form-control form-control-md"
                                type="text"
                                placeholder="apple, flour, sugar, egg, potato, tomato, etc"
                                value={form.includeIngredients}
                                name='includeIngredients'
                                id="includeIngredients"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="maxReadyTime">
                                <span> *</span>
                                How much time do we have...in minutes?</label>
                            <input
                                className="form-control form-control-md"
                                type="text"
                                placeholder="15, 30, 45, 80, etc."
                                value={form.maxReadyTime}
                                id="maxReadyTime"
                                name='maxReadyTime'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="number">Results per page</label>
                            <input
                                className="form-control form-control-md"
                                type="text"
                                placeholder="defaults to 10"
                                value={form.number}
                                id="number"
                                name='number'
                                onChange={handleInputChange}
                            />
                        </div>
                        <button className='btn btn-outline-danger' type='submit'>Search</button>
                        <p>Fields marked with * are required</p>
                    </form>
                </div>
            </div>
            <div className="search-container">
                <div className="row">
                    <div className="col">
                        <div className="search-results-container">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {lazyData?.results?.length === 0 ? (
                                    <p>Uh Oh! Looks like we don't have recipes with those preferences <i className="bi-emoji-frown-fill"></i></p>
                                ) : (
                                    lazyData?.results?.map((recipe, pos) => (
                                        <div className="col" key={pos}>
                                            <div className="recipe-card">
                                                <div className="heart-icon-wrapper">
                                                    {currentUser && (
                                                        <button className="btn btn-link" onClick={() => handleFavorite(recipe.id, recipe.title, recipe.image)}>
                                                            {favorites.favorites?.some(fav => fav.id === recipe.id) ?
                                                                <i className="bi bi-heart-fill heart-icon text-danger"></i> :
                                                                <i className="bi bi-heart heart-icon"></i>
                                                            }
                                                        </button>
                                                    )}
                                                </div>
                                                <RecipeCard id={recipe.id} title={recipe.title} image={recipe.image} />
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default RecipeSearch;
