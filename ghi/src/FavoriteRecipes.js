import { useGetFavoriteQuery } from "./auth/api";
import { useGetFavoriteQuery } from "./auth/api";
import { useGetTokenQuery} from "./auth/authApi";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import RecipeCard from "./RecipeCard";

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

    console.log(data)

    return (
        <>
            <div>
                <ul>
                    {favorites.favorites.map((recipe) => (
                        <RecipeCard id={recipe.id} title={recipe.title} image={recipe.image} key={recipe.id} />
                    ))}
                </ul>
            </div>
        </>
    )

}

export default FavoriteRecipes
