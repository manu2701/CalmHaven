import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AboutPTSD from "./components/AboutPTSD";
import "./App.css";
import logo from "src/assets/logo/logo_color5.png"; 

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="logo">
          <img src={logo}  alt="CalmHaven Logo" className="logo" />
          <h1>CALM HAVEN</h1>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-ptsd">About PTSD</Link></li>
            <li><Link to="/chatbot">Chatbot</Link></li>
            <li><Link to="/stories">Stories of Strength</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/todo-list">To-Do List</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-ptsd" element={<AboutPTSD />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
