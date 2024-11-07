import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AboutPTSD from "./components/AboutPTSD";
import Stories from "./components/Stories";
import Consult from "./components/Consult";
import "./App.css";
import logo from ".//assets/logo/logo_color5.png" ; 
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="logo">
            <img src={logo}  alt="CalmHaven Logo" className="logo" />
            <p>CALM HAVEN</p>
          </div>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about-ptsd">ABOUT PTSD</Link></li>
            <li><Link to="/consult">CONSULT</Link></li>
            <li><Link to="/stories">STORIES OF STRENGTH</Link></li>
            <li><Link to="/resources">RESOURCES</Link></li>
            <li><Link to="/todo-list">TO-DO LIST</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-ptsd" element={<AboutPTSD />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/consult" element={<Consult />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
