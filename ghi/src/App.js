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
import { useState, useEffect } from "react";

function App() {
  const { data: tokenData } = useGetTokenQuery();
  const accountId = tokenData && tokenData.account && tokenData.account.id;
  useGetTokenQuery();
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, '');

  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {screenLoading ? (
        <div id="preloader">
        </div>
      ) : (
        <BrowserRouter basename="/cookease">
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
            <Footer />
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
