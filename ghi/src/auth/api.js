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
      query: (form) => {
        const formData = new FormData(form);
        const entries = Array.from(formData.entries());
        const data = entries.reduce((acc, [key, value]) => {
          acc[key] = Number.parseInt(value) || value;
          return acc;
        }, {});
        return {
          method: "post",
          url: "/favorites-recipes",
          credentials: "include",
          body: data,
        };
      },
      invalidatesTags: [{ type: "Recipes", id: "LIST" }],
    }),
    getFavorite: builder.query({
      query: () => `/favorites-recipes`,
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
    getRecipe: builder.mutation({
      query: () => `/search-recipes`,
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
    getRecipe: builder.query({
      // http://localhost:8000/search-recipes?diet=vegan&intolerances=dairy&includeIngredients=carrots&maxReadyTime=45
      query: (diet, intolerances, includeIngredients, maxReadyTime) => `/search-recipes?diet=${diet}&intolerances=${intolerances}&includeIngredients=${includeIngredients}&maxReadyTime=${maxReadyTime}`,
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
      query: () => `/recipe-details`,
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
  useGetRecipeMutation,
  useGetRecipeDetailsQuery,
  getRecipe,
  useGetRecipeQuery,
} = apiSlice;
