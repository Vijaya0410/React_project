import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api.js";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser({ email, password })
      .then((response) => {
        console.log("Login successful:", response.data);
        setIsSuccess(true);
        setMessage("Login successful! Redirecting to dashboard...");
        const userId = response.data.user_id;
        const phoneNumber = response.data.phone;
        localStorage.setItem("userId", userId);
        localStorage.setItem("phoneNumber", phoneNumber);
        setTimeout(() => {
          navigate("/dashboard");
          if (phoneNumber) {
            sendWelcomeMessage(phoneNumber);
          } else {
            console.error("User phone number is not available");
          }
        }, 1500);
      })
      .catch((error) => {
        console.error("Invalid login:", error.response?.data || error);
        setIsSuccess(false);
        setMessage("Invalid email or password");
      });
  };

  const sendWelcomeMessage = (phone) => {
    fetch("/api/v1/sendWelcomeMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Message sent:", data))
      .catch((error) => console.error("Error sending message:", error));
  };

  return (
    <div className="container">
      <img
        src="https://p99soft.com/wp-content/uploads/2023/09/logo-1024x319.png"
        width={200}
        height={75}
        alt="Company Logo"
      />
      <div className="form-container">
        <img
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
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
            />
            <span
              className="showPass"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? "😃" : "😌"}
            </span>
          </div>
          <button type="submit">Login</button>
        </form>
        {message && (
          <p style={{ color: isSuccess ? "green" : "red" }}>{message}</p>
        )}
        <p>
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
