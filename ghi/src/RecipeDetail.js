import { useState } from 'react';
import { useGetRecipeDetailsQuery } from "./auth/api";


function GetRecipeDetails() {
    const { data: recipe } = useGetRecipeDetailsQuery()
    console.log(recipe)

    return (
        <div>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            <ul>
                {recipe.map((ingredient) => (
                    <li key={ingredient.id}>
                        {ingredient.original}
                    </li>
                ))}
            </ul>
            <p>{recipe.instructions}</p>
        </div>
    )
}

export default GetRecipeDetails()
