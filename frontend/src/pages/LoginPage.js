import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("login/", { username, password });

      localStorage.setItem("token", response.data.access);
      localStorage.setItem("role", response.data.user.role);

      switch (response.data.user.role) {
        case "project":
          navigate("/dashboard/project");
          break;
        case "supplier":
          navigate("/dashboard/supplier");
          break;
        case "bouwhub":
          navigate("/dashboard/bouwhub");
          break;
        case "admin":
          navigate("/dashboard/admin");
          break;
        default:
          navigate("/");
      }
    } catch (error) {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
