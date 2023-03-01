import "./App.css";
import { useGetTokenQuery } from "./auth/authApi.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Nav from "./Nav";
import MainPage from "./MainPage";
import RecipeSearch from "./SearchRecipe";
import RecipeDetails from "./RecipeDetail";
import FavoriteRecipes from "./FavoriteRecipes";

function App() {
  const { data: tokenData } = useGetTokenQuery();
  const accountId = tokenData && tokenData.account && tokenData.account.id;
  useGetTokenQuery();
  return (
    <BrowserRouter>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="search-recipes" element={<RecipeSearch />} />
          <Route path="recipe-details/:id" element={<RecipeDetails />} />
          <Route path="favorites-recipes" element={<FavoriteRecipes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
