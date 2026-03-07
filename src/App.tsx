import { Route, Routes } from "react-router";

import "./App.css";
import Admin from "./components/Admin";
import Blog from "./components/blog/Blog";
import BlogDetail from "./components/blog/BlogDetail";
import LoginPage from "./components/blog/login/Login";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="blog" element={<Blog />} />{" "}
        <Route path="blog/:slug" element={<BlogDetail />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
