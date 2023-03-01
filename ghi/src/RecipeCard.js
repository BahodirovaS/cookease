import { Link } from "react-router-dom"
import { useAddFavoriteRecipeMutation } from "./auth/api"


const RecipeCard = (props) => {
    const [favorite, { isLoading }] = useAddFavoriteRecipeMutation()
    const handleAddFavorite = async (id) => {
        try {
            await favorite({ id })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <li key={props.id}>
            <Link to={`/recipe-details/${props.id}`} >
                <h3>{props.title}</h3>
            </Link>
            <img src={props.image} alt={props.title} />
        </li>
    )
}

export default RecipeCard
