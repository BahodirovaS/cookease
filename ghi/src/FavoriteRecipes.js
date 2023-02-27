import { useGetFavoriteQuery } from "./auth/api";
import { useGetTokenQuery } from "./auth/authApi";


function FavoriteRecipes() {
    const { token } = useGetTokenQuery()
    const { data, isLoading } = useGetFavoriteQuery()

    if (isLoading) {
        return (
            <progress className="progress is-primary" max="100"></progress>
        )
    }

    console.log(data)
    console.log(token)
}

export default FavoriteRecipes
