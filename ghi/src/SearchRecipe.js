import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipe, apiSlice } from './auth/api';
import { useGetRecipeQuery } from "./auth/api";


function RecipeSearch() {
    const navigate = useNavigate;
    const { data, isLoading } = useGetRecipeQuery({ diet: "gluten-free", intolerances: "cheese", includeIngredients: "corn", maxReadyTime: "30" })
    // const recipes = useSelector(state => state.recipes);
    const [recipes, setRecipes] = useState([]);
    console.log(recipes)
    // console.log(recipeData)
    // console.log(isLoading)
    const [diet, setDiet] = useState('');
    const [intolerances, setIntolerances] = useState('');
    const [includeIngredients, setIncludeIngredients] = useState('');
    const [maxReadyTime, setMaxReadyTime] = useState('');
    const dispatch = useDispatch();
    const [run, results] = getRecipe.useLazyQuery();
    console.log(data)
    // const { data, isLoading } = useGetRecipeQuery(diet, intolerances, includeIngredients, maxReadyTime);
    const handleChange = async () => {
        const new_results = await run({ diet: diet, intolerances: intolerances, includeIngredients: includeIngredients, maxReadyTime: maxReadyTime }).unwrap()
        console.log(new_results)
        setRecipes(results)
        console.log(run)
        console.log(results)
        // dispatch(getRecipe(diet, intolerances, includeIngredients, maxReadyTime));
        // setRecipeData(data["data"]);
        // let data = await getRecipe();
        setDiet('');
        setIntolerances('');
        setIncludeIngredients('');
        setMaxReadyTime('');
    };
    return (
        <div>
            <div>
                <label htmlFor="diet">Diet:</label>
                <input
                    type="text"
                    id="diet"
                    value={diet}
                    onChange={(e) => setDiet(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="intolerances">Intolerances:</label>
                <input
                    type="text"
                    id="intolerances"
                    value={intolerances}
                    onChange={(e) => setIntolerances(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="includeIngredients">Include Ingredients:</label>
                <input
                    type="text"
                    id="includeIngredients"
                    value={includeIngredients}
                    onChange={(e) => setIncludeIngredients(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="maxReadyTime">Max Ready Time:</label>
                <input
                    type="text"
                    id="maxReadyTime"
                    value={maxReadyTime}
                    onChange={(e) => setMaxReadyTime(e.target.value)}
                />
            </div>
            <button onClick={handleChange}>Search</button>
            <div>
                <ul>
                    {isLoading && !recipes ? null : recipes?.results?.map((recipe) => (
                        <li key={recipe.id}>
                            <h3>{recipe.title}</h3>
                            <img src={recipe.image} alt={recipe.title} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default RecipeSearch;
