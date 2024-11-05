/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.loginId === loginId &&
      storedUser.password === password
    ) {
      navigate("/profile");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <input
        name="loginId"
        placeholder="Login ID"
        onChange={(e) => setLoginId(e.target.value)}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded mt-4">
        Login
      </button>
    </form>
  );
}

export default Login;
