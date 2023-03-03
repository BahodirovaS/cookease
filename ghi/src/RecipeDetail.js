import { useGetRecipeDetailsQuery } from "./auth/api";
import { useParams } from 'react-router-dom'
import './assets/css/detail.css'

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
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 col-lg-8">
                    <h1>{data.title}</h1>
                    <img src={data.image} alt={data.title} className="img-fluid mb-3" />
                    <h3>Instructions</h3>
                    <table className="table">
                        <tbody>
                            {data.analyzedInstructions.map((instruction) =>
                                instruction.steps.map((step) => (
                                    <tr key={step.number}>
                                        <td>Step {step.number}</td>
                                        <td>{step.step}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                    <h3>Ingredients</h3>
                    <table className="table">
                        <tbody>
                            {data.extendedIngredients.map((ingredient) => (
                                <tr key={ingredient.id}>
                                    <td>
                                        <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name} className="img-fluid ingredient-image" />
                                    </td>
                                    <td>{ingredient.name}</td>
                                    <td>{ingredient.measures.us.amount} {ingredient.measures.us.unitShort}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="card bg-danger text-white mb-3">
                        <div className="card-header">Recipe Information</div>
                        <div className="card-body">
                            <h5 className="card-title">Cooking Time</h5>
                            <p className="card-text">{data.readyInMinutes} minutes</p>
                            <h5 className="card-title">Dietary Information</h5>
                            <p className="card-text">
                                Dairy Free: {data.dairyFree ? "Yes" : "No"}<br />
                                Gluten Free: {data.glutenFree ? "Yes" : "No"}<br />
                                Very Healthy: {data.veryHealthy ? "Yes" : "No"}
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3 text-white mb-3">
                        <div className="card-header">Summary</div>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{replace}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetails;
// function RecipeDetails() {
//     const { id } = useParams()

//     const { data, isLoading } = useGetRecipeDetailsQuery(id)

//     if (isLoading) {
//         return (
//             <progress className="progress is-primary" max="100"></progress>
//         )
//     }

//     return (
//         <>
//             <div>{data.title}</div>
//             <img src={data.image} alt={data.title} />
//             <div>{data.readyInMinutes}</div>
//             <div>
//                 <table>
//                     <thead>
//                         <tbody>
//                             {data.analyzedInstructions.map((number) => {
//                                 return number.steps.map((step) => {
//                                     return (
//                                         <tr key={step.number}>
//                                             <td>Step {step.number} - </td>
//                                             <td>{step.step}</td>
//                                         </tr>
//                                     )
//                                 })
//                             }
//                             )}
//                         </tbody>
//                         <tr></tr>
//                     </thead>
//                 </table>
//             </div>
//             <div>Dairy Free: {data.dairyFree.toString()}</div>
//             <div>Gluten Free: {data.glutenFree.toString()}</div>
//             <div>Very Healthy: {data.veryHealthy.toString()}</div>
//             <div>{data.summary}</div>

//             <div>
//                 <table>
//                     <thead>
//                         <tbody>
//                             {data.extendedIngredients.map((ingredient) => {
//                                 return (
//                                     <tr key={ingredient.id}>
//                                         <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name} />
//                                         <td>{ingredient.name}</td>
//                                         <td>{ ingredient.measures.us.amount }</td>
//                                         <td>{ingredient.measures.us.unitShort}</td>
//                                     </tr>

//                                 )
//                             })};
//                         </tbody>
//                         <tr></tr>
//                     </thead>
//                 </table>
//             </div>


//         </>
//     )
// }

// export default RecipeDetails
