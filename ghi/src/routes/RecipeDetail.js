import { useGetRecipeDetailsQuery, useAddFavoriteRecipeMutation, useDeleteFavoriteMutation, useGetFavoriteQuery } from "../auth/api";
import { useGetTokenQuery } from "../auth/authApi";
import { useParams } from 'react-router-dom'
import '../assets/css/main.css'
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css'
import { NavLink } from 'react-router-dom';


function RecipeDetails() {
    const { id } = useParams();

    const { data, isLoading } = useGetRecipeDetailsQuery(id);
    const { data: favorites } = useGetFavoriteQuery()
    const [favoriteRecipe] = useAddFavoriteRecipeMutation()
    const [unFavoriteRecipe] = useDeleteFavoriteMutation()
    const { data: currentUser } = useGetTokenQuery()

    if (isLoading) {
        return (
            <progress className="progress is-primary" max="100"></progress>
        );
    }
    let replace = data.summary.replaceAll(/<\/?[^>]+(>|$)/gi, "");

    const handleFavorite = async (id, title, image) => {
        let isFavorite = false;
        let recipe_id;
        for (const recipe of favorites.favorites || []) {
            if (recipe.id === id) {
                isFavorite = true;
                recipe_id = recipe.recipe_id;
                break;
            }
        }
        if (isFavorite) {
            await unFavoriteRecipe({ recipe_id });
        } else {
            await favoriteRecipe({ id, title, image });
        }
    }

    return (
        <section id="recipe-detail" className="detail section-bg">
            <div className="container">
                <div className="recipe-title mb-3">
                    <div className="header-text">{data.title}</div>
                    {currentUser ? (
                        <button className="btn btn-link" onClick={() => handleFavorite(data.id, data.title, data.image)}>
                            {favorites.favorites?.some(fav => fav.id === data.id) ?
                                <i className="bi bi-heart-fill bi-3x heart-icon text-danger"></i> :
                                <i className="bi bi-heart bi-3x heart-icon"></i>
                            }
                        </button>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <div className="rectangle-image">
                            <img src={data.image} alt={data.title} className="img-fluid mb-3" />
                        </div>
                        <div className="instructions-title">
                            <h3>Instructions</h3>
                        </div>
                        <div className="instructions-list scrollbar">
                            <table className="table table-borderless instructions">
                                <tbody>
                                    {data.analyzedInstructions.map((instruction) =>
                                        instruction.steps.map((step) => (
                                            <tr key={step.number}>
                                                <td><strong>{step.number}</strong></td>
                                                <td>{step.step}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="recipe-info">
                            <div className="card p-4 mb-3">
                                <p className="info-text">
                                    {data.dairyFree ? "Dairy Free" : "NOT Dairy Free"}<br />
                                    {data.glutenFree ? "Gluten Free" : "NOT Gluten Free"}<br />
                                    {data.veryHealthy ? "Very Healthy" : "NOT Very Healthy"}<br />
                                    <strong>Servings:</strong> {data.servings}<br />
                                    <strong>Cooking Time:</strong> {data.readyInMinutes} minutes<br />
                                    <NavLink to={data.sourceUrl} className="link">View Original Recipe</NavLink>
                                </p>
                            </div>
                        </div>
                        <div className="ingredient-title">
                            <h4>Ingredients</h4>
                        </div>
                        <div className="ingredient-list scrollbar">
                            <table className="table table-borderless" id="style-1">
                                <tbody>
                                    {data.extendedIngredients.map((ingredient) => (
                                        <tr key={ingredient.id}>
                                            <td className="image-parent">
                                                <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name} className="img-fluid ingredient-image" />
                                            </td>
                                            <td><strong>{ingredient.name}</strong></td>
                                            <td>{ingredient.measures.us.amount} {ingredient.measures.us.unitShort}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );


}

export default RecipeDetails;
