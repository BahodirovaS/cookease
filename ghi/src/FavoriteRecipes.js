import { useGetFavoriteQuery, useGetRecipeDetailsQuery } from "./auth/api";
import { useGetTokenQuery } from "./auth/authApi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"


function FavoriteRecipes() {
    const { data: tokenData } = useGetTokenQuery()
    const { data: favorites, isLoading } = useGetFavoriteQuery()
    const { data: data } = useGetRecipeDetailsQuery(favorites.favorites[0].recipe_id)

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

    const FavoriteList = favorites.favorites.map((favorite) => favorite.recipe_id)

    console.log(FavoriteList)
    console.log(data)


    // const { data: data } = useGetRecipeDetailsQuery({
    //     ids: FavoriteList
    // });

    // console.log(data)

    return (
        <>
            <div>
                Hello
            </div>
        </>
    )

}

export default FavoriteRecipes
