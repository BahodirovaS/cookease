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
        <div key={props.id}>
            <img className="image" src={props.image} alt={props.title} />
            <Link to={`/recipe-details/${props.id}`} >
                <h4 className="title">{props.title}</h4>
                <p>Read More</p>
            </Link>
        </div>
    )
}

export default RecipeCard
