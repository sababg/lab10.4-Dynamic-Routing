import * as React from "react";
import { Link } from "react-router";
import { useAuth } from "./hook/useAuth";

const Navbar: React.FC = () => {
  const { isAuth, logout } = useAuth();

  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "10px",
        alignItems: "center",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>

      {!isAuth ? (
        <Link to="/login">Log In</Link>
      ) : (
        <>
          <Link to="/admin">Admin</Link>
          <button onClick={logout}>Log Out</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
