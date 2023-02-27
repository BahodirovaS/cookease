import { useGetRecipeDetailsQuery } from "./auth/api";
import { useParams } from 'react-router-dom'

function RecipeDetails() {
    const { id } = useParams()

    const { data, isLoading } = useGetRecipeDetailsQuery(id)

    if (isLoading) {
        return (
            <progress className="progress is-primary" max="100"></progress>
        )
    }

    console.log(data);


    return (
        <>
            <div>{data.title}</div>
            <img src={data.image} alt={data.title} />
            <div>{data.readyInMinutes}</div>
            <div>
                <table>
                    <thead>
                        <tbody>
                            {data.analyzedInstructions.map((number) => {
                                return number.steps.map((step) => {
                                    return (
                                        <tr key={step.number}>
                                            <td>Step {step.number} - </td>
                                            <td>{step.step}</td>
                                        </tr>
                                    )
                                })
                            }
                            )}
                        </tbody>
                        <tr></tr>
                    </thead>
                </table>
            </div>
            <div>Dairy Free: {data.dairyFree.toString()}</div>
            <div>Gluten Free: {data.glutenFree.toString()}</div>
            <div>Very Healthy: {data.veryHealthy.toString()}</div>
            <div>{data.summary}</div>

            <div>
                <table>
                    <thead>
                        <tbody>
                            {data.extendedIngredients.map((ingredient) => {
                                return (
                                    <tr key={ingredient.id}>
                                        <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name} />
                                        <td>{ingredient.name}</td>
                                    </tr>

                                )
                            })};
                        </tbody>
                        <tr></tr>
                    </thead>
                </table>
            </div>


        </>
    )
}

export default RecipeDetails
