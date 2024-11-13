import React from "react";
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

function App() {
  const location = useLocation();

  // Check if the current route is login or signup
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="App">
      {/* Only show navbar if not on login or signup pages */}
      {!isAuthPage && (
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="CalmHaven Logo" className="logo" />
            <p>CALM HAVEN</p>
          </div>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about-ptsd">ABOUT PTSD</Link></li>
            <li><Link to="/consult">CONSULT</Link></li>
            <li><Link to="/stories">STORIES OF STRENGTH</Link></li>
            <li><Link to="/resources">RESOURCES</Link></li>
            <li><Link to="/todo-list">TO-DO LIST</Link></li>
            {/* <li><Link to="/profile"><img src={profile_icon} alt="Profile-icon" className="profile" onClick={toggleChat} /></Link></li> */}
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
      </Routes>
      
      {/* Only show Chatbot if not on login or signup pages */}
      {!isAuthPage && <Chatbot />}
      
      {/* Only show footer if not on login or signup pages */}
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
