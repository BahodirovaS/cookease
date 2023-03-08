import { useGetRecipeDetailsQuery } from "./auth/api";
import { useParams } from 'react-router-dom'
import './assets/css/main.css'

function RecipeDetails() {
    const { id } = useParams();

    const { data, isLoading } = useGetRecipeDetailsQuery(id);

    if (isLoading) {
        return (
            <progress className="progress is-primary" max="100"></progress>
        );
    }
    let replace = data.summary.replaceAll(/<\/?[^>]+(>|$)/gi, "");


    return (
        <section id="recipe-detail" className="detail section-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-5">
                        <div className="rectangle-image">
                            <img src={data.image} alt={data.title} className="img-fluid mb-3" />
                        </div>
                        <div className="card mb-3 text-white mb-3">
                            <div className="card-header">Ingredients</div>
                        </div>
                        <div className="card bg-danger2 text-white mb-3 scrollbar section-bg">
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
                    <div className="col-12 col-lg-7">
                        <div className="text-white mb-3">
                            <div className="card-header2">{data.title}</div>
                        </div>
                        <div className="card bg-danger text-white mb-3">
                            <div className="card-body information">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5 className="card-title">Dietary Information</h5>
                                        <p className="card-text info">
                                            Dairy Free: {data.dairyFree ? "Yes" : "No"}<br />
                                            Gluten Free: {data.glutenFree ? "Yes" : "No"}<br />
                                            Very Healthy: {data.veryHealthy ? "Yes" : "No"}
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="card-title">Cooking Time</h5>
                                        <p className="card-text info">{data.readyInMinutes} minutes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-danger4 mb-3 border-0 section-bg">
                            <div className="card-body summary">
                                <p className="card-text">{replace}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 text-white mb-3">
                    <div className="card-header">Instructions</div>
                </div>
                <div className="card bg-danger3 mb-3 section-bg">
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
        </section>
    );
}

export default RecipeDetails;
