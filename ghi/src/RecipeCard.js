import { Link } from "react-router-dom"
import { useAddFavoriteRecipeMutation } from "./auth/api"


const RecipeCard = (props) => {

    return (
        <div className="recipe-card" key={props.id}>
            <img className="image" src={props.image} alt={props.title} />
            <div className="recipe-title">
            <Link to={`/recipe-details/${props.id}`} >
                <h4 className="title">{props.title}</h4>
            </Link>
            </div>
        </div>
    )
}

export default RecipeCard
