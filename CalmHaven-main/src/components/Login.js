import React from "react";
import "./Login.css";
import logo from "../assets/logo/logo_color5.png"; 
import googleicon from "../assets/icons/google_icon.png";

function handleGoogleLogin() {
  alert("Google Login Clicked");
}

function Login() {
  return (
    <div className="login-page">
      <img src={logo} alt="CalmHaven Logo" className="logo-outside" />
      <p>CALMHAVEN</p>
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
          
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
          
          <div className="button-container"><button type="submit">Login</button></div>
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
          Don't have an account? <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
