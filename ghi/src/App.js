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
import Footer from "./Footer";

function App() {
  const { data: tokenData } = useGetTokenQuery();
  const accountId = tokenData && tokenData.account && tokenData.account.id;
  useGetTokenQuery();
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, '');
  return (
    <BrowserRouter basename={basename}>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn accountId={accountId} />} />
          <Route path="search-recipes" element={<RecipeSearch />} />
          <Route path="recipe-details/:id" element={<RecipeDetails />} />
          <Route path="favorites-recipes" element={<FavoriteRecipes />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
