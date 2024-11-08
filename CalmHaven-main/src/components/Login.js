import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import "./Login.css";
import logo from "../assets/logo/logo_color5.png"; 
import googleicon from "../assets/icons/google_icon.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    // Validation check
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Clear error message
    setError("");

    // Proceed with login logic (e.g., API call for authentication)
    // After successful login, navigate to the home page
    navigate("/");
  };

  const handleGoogleLogin = () => {
    alert("Google Login Clicked");
    // Add Google login logic here
  };

  return (
    <div className="login-page">
      <img src={logo} alt="CalmHaven Logo" className="logo-outside" />
      <p>CALMHAVEN</p>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          
          <label>Password:</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          
          {error && <p className="error-message">{error}</p>}

          <div className="button-container">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="google-login">
          <button onClick={handleGoogleLogin} className="google-button">
            <img
              src={googleicon}
              alt="Google Logo"
              className="google-icon"
            />
            Login with Google
          </button>
        </div>
        <div className="message">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
