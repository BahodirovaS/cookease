import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipe } from './auth/api';

function RecipeSearch() {
    const navigate = useNavigate;
    const recipes = useSelector(state => state.recipes);
    console.log(recipes)
    const [diet, setDiet] = useState('');
    const [intolerances, setIntolerances] = useState('');
    const [includeIngredients, setIncludeIngredients] = useState('');
    const [maxReadyTime, setMaxReadyTime] = useState('');
    const dispatch = useDispatch();

    function handleSubmit() {
        dispatch(getRecipe({ diet: diet, intolerances: intolerances, includeIngredients: includeIngredients, maxReadyTime: maxReadyTime }));
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
            <button onClick={handleSubmit}>Search</button>
            <div>
                <ul>
                    {recipes.map((recipe) => (
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
