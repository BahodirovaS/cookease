import { Link } from "react-router-dom"


const RecipeCard = (props) => {
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
