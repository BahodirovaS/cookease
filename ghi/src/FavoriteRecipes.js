import { useGetFavoriteQuery, useGetRecipeDetailsQuery } from "./auth/api";
import { useGetTokenQuery} from "./auth/authApi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

function FavoriteRecipes() {
    const { data: tokenData } = useGetTokenQuery()
    const { data: favorites, isLoading } = useGetFavoriteQuery()
    const { data: data } = useGetRecipeDetailsQuery()

    if (isLoading) {
        return (
            <progress className="progress is-primary" max="100"></progress>
        )
    }

    if (!tokenData) {
        return (
            <div>
                <h1>Unauthorized :(</h1>
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
                {favorites}
            </div>
        </>
    )

}

export default FavoriteRecipes
