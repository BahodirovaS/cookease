import { useGetFavoriteQuery, useDeleteFavoriteMutation } from "./auth/api";
import { useGetTokenQuery } from "./auth/authApi";
import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import './assets/css/main.css';


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
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/1660037/pexels-photo-1660037.jpeg?auto=compress&crop=focalpoint&cs=tinysrgb&dpr=1&fit=crop&h=700&w=1200" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/01/brooke-lark-158017-unsplash-1500-1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://static.showit.co/1600/6uiiOA2dSXyYkIga_0XM7Q/86938/fall_tablescape_-_food_photography_-_frenchly_photography-7575.jpg" className="d-block w-100" alt="..." />
                    </div>
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
            <section id="favorite-foods" className="favorite-foods section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <p>My <span>Favorite </span> Recipes</p>
                    </div>
                    <div className="tab-content" data-aos="fade-up" data-aos-delay="300">
                        <div className="tab-pane fade active show" id="favorite-foods-starters">
                            <div className="tab-header text-center">
                                {tokenData ? (
                                    <div className="row gy-5">
                                        {favorites && favorites.favorites.map((recipe) => (
                                            <div key={recipe.id} className="col-lg-4 favorite-foods-item">
                                                <button className="btn btn-link" onClick={() => handleFavorite(recipe.id)}>
                                                    <i className="bi bi-heart-fill heart-icon" style={{ color: 'red' }}></i>
                                                </button>
                                                <a href={"recipe-details/" + recipe.id} className="glightbox">
                                                    <img src={recipe.image} className="favorite-foods-img img-fluid rounded-circle" alt={recipe.title} />
                                                </a>
                                                <h4>{recipe.title}</h4>
                                                <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">
                                                    <li className="nav-item">
                                                        <a href={"recipe-details/" + recipe.id} className="nav-link active show">
                                                            Read More
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="section-header">
                                        <h4>You must be logged in to see your favorites!</h4>
                                        <p>Create an account now or sign in!
                                            <a className="dropdown-item" href="signup">Sign Up</a>
                                            <a className="dropdown-item" href="login">Log In</a>
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default FavoriteRecipes
