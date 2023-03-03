import { useGetFavoriteQuery } from "./auth/api";
import { useGetTokenQuery } from "./auth/authApi";
import { Link } from "react-router-dom";
import './assets/css/main.css';


function FavoriteRecipes() {
    const { data: tokenData } = useGetTokenQuery()
    const { data: favorites, isLoading } = useGetFavoriteQuery()

    if (isLoading) {
        return (
            <progress className="progress is-primary" max="100"></progress>
        )
    }

    return (
        <>
        <section id="menu" className="menu">
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>Cookease</h2>
                    <p>Your <span>Favorite Recipes</span></p>
                </div>
                <div className="tab-content" data-aos="fade-up" data-aos-delay="300">
                    <div className="tab-pane fade active show" id="menu-starters">
                        <div className="tab-header text-center">
                            {tokenData ? (
                            <div className="row gy-5">
                                {favorites && favorites.favorites.map((recipe) => (
                                <>
                                    <div className="col-lg-4 menu-item">
                                        <a href={"recipe-details/" + recipe.id} className="glightbox">
                                                    <img src={recipe.image} className="menu-img img-fluid rounded-circle" alt={recipe.title}/>
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
                                </>
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
            </section>
        </>
    )
}

export default FavoriteRecipes
