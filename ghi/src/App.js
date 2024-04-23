import "./App.css";
import { useGetTokenQuery } from "./auth/authApi.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./routes/SignUp.js";
import LogIn from "./routes/LogIn.js";
import Nav from "./routes/Nav.js";
import MainPage from "./routes/MainPage.js";
import RecipeSearch from "./routes/SearchRecipe.js";
import RecipeDetails from "./routes/RecipeDetail.js";
import FavoriteRecipes from "./routes/FavoriteRecipes.js";
import Footer from "./routes/Footer.js";
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
