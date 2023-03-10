import { Link } from "react-router-dom"


const RecipeCard = (props) => {

    return (
        <div className="recipe-card" key={props.id}>
            <Link to={`/recipe-details/${props.id}`} >
                <img className="image" src={props.image} alt={props.title} />
            </Link>
            <div className="recipe-title">
            <Link to={`/recipe-details/${props.id}`} >
                <h4 className="title">{props.title}</h4>
            </Link>
            </div>
        </div>
    )
}

export default RecipeCard
