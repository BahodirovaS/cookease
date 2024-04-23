import { useGetFavoriteQuery, useDeleteFavoriteMutation } from "../auth/api";
import { useGetTokenQuery } from "../auth/authApi";
import { useState, useEffect } from "react";
import './assets/css/main.css';
import RecipeCard from '../RecipeCard';
import { NavLink } from "react-router-dom";


function FavoriteRecipes() {
    const { data: tokenData } = useGetTokenQuery()
    const { data: favorites, isLoading, refetch } = useGetFavoriteQuery()
    const [unFavoriteRecipe] = useDeleteFavoriteMutation()
    const [deletedRecipeId, setDeletedRecipeId] = useState(null);


    useEffect(() => {
        if (deletedRecipeId !== null) {
            refetch();
            setDeletedRecipeId(null);
        }
    }, [deletedRecipeId, refetch]);


    if (isLoading) {
        return (
            <progress className="progress is-primary" max="100"></progress>
        )
    }


    const handleFavorite = async (id) => {
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
            setDeletedRecipeId(id);
        }
    }


    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active"></div>
                    <div className="carousel-item"></div>
                    <div className="carousel-item"></div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="favorite-foods">
                <div className="favorites-container">
                    <div className="favorites-header">
                        <p>My <span>Favorite </span> Recipes</p>
                        {tokenData ? (
                            <h2>Click on the heart to remove a recipe from your favorites</h2>
                        ) : (
                            <div></div>
                        )}
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="favorite-foods-container">
                                {tokenData ? (
                                    <div className="row row-cols-1 row-cols-md-3 g-4">
                                        {favorites && favorites.favorites.map((recipe) => (
                                            <div key={recipe.id} className="col">
                                                <div className="recipe-card">
                                                    <div className="heart-icon-wrapper">
                                                        {tokenData && (
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
                                        ))}
                                    </div>
                                ) : (
                                    <div className="login-message">
                                        <h4>You must be logged in to see your favorites!</h4>
                                        <p>Create an account now or sign in!</p>
                                        <NavLink className="favorites-navlink" to="/signup" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>Sign Up</NavLink>
                                        <NavLink className="favorites-navlink" to="/login" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>Log In</NavLink>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default FavoriteRecipes
