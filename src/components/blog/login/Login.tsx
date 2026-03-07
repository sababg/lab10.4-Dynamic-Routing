"use client";

import { useAuth } from "../../hook/useAuth";

export default function LoginPage() {
  const { isAuth, login, logout } = useAuth();

  return (
    <div>
      <h1>Login</h1>

      {isAuth ? (
        <>
          <p>You are logged in</p>
          <button onClick={logout}>Log Out</button>
        </>
      ) : (
        <button onClick={login}>Log In</button>
      )}
    </div>
  );
}
