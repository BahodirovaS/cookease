import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authApiSlice } from "./authApi";

export const apiSlice = createApi({
  reducerPath: "recipes",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_cookease_API_HOST,
    prepareHeaders: (headers, { getState }) => {
      const selector = authApiSlice.endpoints.getToken.select();
      const { data: tokenData } = selector(getState());
      if (tokenData && tokenData.access_token) {
        headers.set("Authorization", `Bearer ${tokenData.access_token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Account", "Recipes", "Favorites", "Recipe-Detail", "Token"],
  endpoints: (builder) => ({
    addFavoriteRecipe: builder.mutation({
      query: (id) => ({
        method: "post",
        url: "/favorites-recipes",
        credentials: "include",
        body: { ...id },
      }),
      invalidatesTags: [{ type: "Favorites", id: "LIST" }],
    }),
    getFavorite: builder.query({
      query: () => ({
        url: `/favorites-recipes`,
        credentials: "include",
      }),
      providesTags: (data) => {
        const tags = [{ type: "Favorites", id: "LIST" }];
        if (!data || !data.recipes) return tags;

        const { recipes } = data;
        if (recipes) {
          tags.concat(...recipes.map(({ id }) => ({ type: "Favorites", id })));
        }
        return tags;
      },
    }),
    getRecipe: builder.query({
      query: (payload) => `/search-recipes?diet=${payload.diet}&intolerances=${payload.intolerances}&includeIngredients=${payload.includeIngredients}&maxReadyTime=${payload.maxReadyTime}&number=${payload.number}`,
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
    getRecipeDetails: builder.query({
      query: (recipe_id) => `/recipe-details/${recipe_id}`,
      providesTags: (data) => {
        const tags = [{ type: "Recipe-Detail", id: "LIST" }];
        if (!data || !data.recipes) return tags;

        const { recipes } = data;
        if (recipes) {
          tags.concat(...recipes.map(({ id }) => ({ type: "Recipe-Detail", id })));
        }
        return tags;
      },
    }),
    // getMultipleRecipeDetails: builder.query({
    //   query: (recipe_ids) => {
    //     const promises = recipe_ids.map((recipe_id) => `/recipe-details/${recipe_id}`);
    //     return Promise.all(promises);
    //   },
    //   providesTags: (data) => {
    //     const tags = [{ type: "Recipe-Detail", id: "LIST" }];
    //     if (!data || !data.recipes) return tags;

    //     const { recipes } = data;
    //     if (recipes) {
    //       tags.concat(...recipes.map(({ id }) => ({ type: "Recipe-Detail", id })));
    //     }
    //     return tags;
    //   },
    // }),
    deleteFavorite: builder.mutation({
      query: (id) => ({
        method: "delete",
        url: `/favorites-recipes/{id}`,
      }),
      invalidatesTags: [{ type: "Recipes", id: "LIST" }],
    }),
  }),
});

export const {
  useAddFavoriteRecipeMutation,
  useGetFavoriteQuery,
  useDeleteFavoriteMutation,
  useGetRecipeDetailsQuery,
  useGetIngredientWidgetQuery,
  useGetRecipeQuery,
  useLazyGetRecipeQuery,
  // useGetMultipleRecipeDetailsQuery,
} = apiSlice;
