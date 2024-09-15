import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserProfile from "../assets/userprofile.jpg"
import "../App.css";

import showPasswordIcon from "../assets/visible.jpg"; // Update the path if needed
import hidePasswordIcon from "../assets/notvisible.jpg"; // Update the path if needed

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate successful login
    console.log("Login successful with email:", email);
    setMessage("Login successful! Redirecting to dashboard...");
    
    // Simulate storing user data in localStorage
    localStorage.setItem("userEmail", email);

    // Redirect to dashboard after 1.5 seconds
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="container">
      <div className="form-container">
        <img
          src={UserProfile}
          width={100}
          height={100}
          alt="User Icon"
          className="user-icon"
        />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ flex: "1", marginRight: "8px", marginBottom:"5px" }}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              style={{ flex: "0 0 15%", background: "none", border: "none", cursor: "pointer" }}
            >
              <img
                src={showPass ? hidePasswordIcon : showPasswordIcon}
                alt={showPass ? "Hide password" : "Show password"}
                style={{ width: "100%", height: "100%"}}
              />
            </button>
          </div>
          <button type="submit">Login</button>
        </form>
        {message && (
          <p style={{ color: "green" }}>{message}</p>
        )}
        <p className="text">Don't have an account? <a href="/register">Register here</a></p>
      </div>
    </div>
  );
};

export default Login;
