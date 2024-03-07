import { Link } from "react-router-dom"
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'


const RecipeCard = (props) => {

    return (
        <Link to={`/recipe-details/${props.id}`} className="card recipe-card" key={props.id}>
            <img className="card-img-top recipe-image" src={props.image} alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <div className="time-to-cook">
                    <i className="bi bi-clock"></i>
                    <span>{props.readyInMinutes} mins</span>
                </div>
            </div>
        </Link>
    );
}

export default RecipeCard
