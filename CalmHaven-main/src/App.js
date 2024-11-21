import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./components/Home";
import AboutPTSD from "./components/AboutPTSD";
import Stories from "./components/Stories";
import Consult from "./components/Consult";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import "./App.css";
import logo from "./assets/logo/logo_color5.png";
import profile_icon from "./assets/icons/profile_icon.png";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Survey from "./components/Survey";


function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/survey";

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const username = "John Doe"; // Replace this with dynamic username if available

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    // Implement logout functionality here
    console.log("User logged out");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="App">
      {!isAuthPage && (
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="CalmHaven Logo" className="logo" />
            <p>CALM HAVEN</p>
          </div>
          <button className="menu-button" onClick={toggleMobileMenu}>☰</button>
          <ul className={isMobileMenuOpen ? 'active' : ''}>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about-ptsd">ABOUT PTSD</Link></li>
            <li><Link to="/consult">CONSULT</Link></li>
            <li><Link to="/stories">STORIES OF STRENGTH</Link></li>
            <li><Link to="/resources">RESOURCES</Link></li>
            <li><Link to="/todo-list">TO-DO LIST</Link></li>
            <li>
              <img src={profile_icon} alt="Profile Icon" className="profile-icon" onClick={toggleProfileMenu} />
              {isProfileOpen && (
                <div className="profile-dropdown">
                  <p>{username}</p>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </li>
          </ul>
        </nav>
      )}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-ptsd" element={<AboutPTSD />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/survey" element={<Survey />} />

      </Routes>
      
      {!isAuthPage && <Chatbot />}
      {!isAuthPage && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
