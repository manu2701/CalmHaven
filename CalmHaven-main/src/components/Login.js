import React from "react";
import "./Login.css";
import logo from "../assets/logo/logo_color5.png"; // Adjust the path as per your folder structure

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
          
          <button type="submit">Login</button>
        </form>
        <div className="google-login">
          <button onClick={handleGoogleLogin} className="google-button">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
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
