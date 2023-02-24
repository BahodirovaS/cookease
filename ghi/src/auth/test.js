import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authApiSlice } from "./authApi";

export const testSlice = createApi({
    reducerPath: "recipes_test",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SPOONACULAR_HOST,
        prepareHeaders: (headers, { getState }) => {
            const selector = authApiSlice.endpoints.getToken.select();
            const { data: tokenData } = selector(getState());
            if (tokenData && tokenData.access_token) {
                headers.set("Authorization", `Bearer ${tokenData.access_token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["Recipes"],
    endpoints: (builder) => ({
        getRecipe: builder.query({
            // http://localhost:8000/search-recipes?diet=vegan&intolerances=dairy&includeIngredients=carrots&maxReadyTime=45
            query: (diet, intolerances, includeIngredients, maxReadyTime) => `/search-recipes?diet=${diet}&intolerances=${intolerances}&includeIngredients=${includeIngredients}&maxReadyTime=${maxReadyTime}&apiKey=64bac43a9c4a4b9188967fc09a87508e`,
            providesTags: (data) => {
                const tags = [{ type: "Recipes", id: "LIST" }];
                if (!data || !data.recipes) return tags;

                const { recipes } = data;
                if (recipes) {
                    tags.concat(...recipes.map(({ id }) => ({ type: "Recipes", id })));
                }
                return tags;
            },
        }),
    }),
});

export const {
    useGetRecipeQuery,
} = testSlice;
