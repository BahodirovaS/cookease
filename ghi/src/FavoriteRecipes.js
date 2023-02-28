import { useGetFavoriteQuery } from "./auth/api";
import { useGetTokenQuery } from "./auth/authApi";
import { Link } from "react-router-dom";

function FavoriteRecipes() {
    const { data: tokenData } = useGetTokenQuery()
    const { favorites, isLoading } = useGetFavoriteQuery()

    if (isLoading) {
        return (
            <progress className="progress is-primary" max="100"></progress>
        )
    }

    console.log(tokenData)
    console.log(favorites)

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

}

export default FavoriteRecipes
