import { useGetFavoriteQuery } from "./auth/api";
import { useGetTokenQuery } from "./auth/authApi";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import css from "./App.css";


function FavoriteRecipes() {
    const { data: tokenData } = useGetTokenQuery()
    const { data: favorites, isLoading } = useGetFavoriteQuery()

    if (isLoading) {
        return (
            <progress className="progress is-primary" max="100"></progress>
        )
    }

    if (!tokenData) {
        return (
                <div>
                    <h1>Unauthorized</h1>
                    <div>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
        )
    }


    return (
        <>
            <div>
                <ul>
                    {favorites.favorites.map((recipe) => (
                        <RecipeCard id={recipe.id} title={recipe.title} image={recipe.image} key={recipe.id} />
                    ))}
                </ul>
            </div>
            <div className="card" style="width: 18rem;">
                <img src="https://tinyurl.com/33vc2n3f" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="#" className="btn btn-primary">More Details</Link>
                    </div>
            </div>
        </>
    )

}

export default FavoriteRecipes
