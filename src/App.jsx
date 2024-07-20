import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./pages/Navbar";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-col place-items-center mx-10 px-5">
        <h1 className="text-5xl left-5 m-5 font-extrabold">Blog Base</h1>
        <Routes>
          <Route path="/" errorElement={<NotFoundPage />} element={<Homepage />}>
          </Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/articleList" element={<ArticleListPage />}></Route>
          <Route path="/article/:articleId" element={<ArticlePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signUp" element={<CreateAccountPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
