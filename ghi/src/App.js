import "./App.css";
import { useGetTokenQuery } from "./auth/authApi.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp.js";
import LogIn from "./LogIn.js";
import Nav from "./Nav";
import MainPage from "./MainPage";
import RecipeSearch from "./SearchRecipe";

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
