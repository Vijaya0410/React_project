import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api.js";
import "../App.css";

const Register = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData)
      .then(response => {
        console.log('Registration successful:', response.data);
        setError('Registration successful! You can now log in.');
      })
      .catch(error => {
        if (error.response && error.response.status === 409) {
          setError('Email already registered. Please log in.');
        } else {
          setError('There was an error registering! Please try again later.');
        }
      });
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
        <h2>Register Your Business</h2>
        <form onSubmit={handleSubmit}>
          <label>Business Name:</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <label>Password:</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <span className="showPass" onClick={() => setShowPass(!showPass)}>
              {showPass ? "😃" : "😌"}
            </span>
          </div>
          <button type="submit">Register</button>
        </form>
        {error && (
          <p style={{ color: error.includes('successful') ? 'green' : 'red' }}>
            {error}
          </p>
        )}
        {error.includes('successful') && (
          <button onClick={() => navigate("/login")}>Go to Login</button>
        )}
        <p>Already have an account? <a href="/login">Login here</a></p>
      </div>
    </div>
  );
};

export default Register;
