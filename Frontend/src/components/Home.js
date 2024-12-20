import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import './Home.css';
import ptsdoverview from "../assets/ptsd-overview.png";
import availability from "../assets/icons/availabilty_icon.png";
import copingstrat from "../assets/icons/personalization_icon.png";
import awarness from "../assets/icons/awarness_icon.png";
import guidance from "../assets/icons/resource_guidance_icon.png";
import confidential from "../assets/icons/confidential_icon.png";

function Home() {
  const navigate = useNavigate(); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in by looking for the token
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  const handleLogoutClick = () => {
    // Clear token and update state
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    // Optionally redirect to home page
    navigate('/');
  };

  return (
    <div className="home-container">
      <div className="quote-page">
        <div className="quote-section">
          <div className="q1">
            <p>"YOU ARE STRONGER THAN YOU THINK.</p> 
            <p>YOU HAVE GOTTEN THROUGH EVERY</p>
            <p>BAD DAY IN YOUR LIFE,</p>
            <p>AND YOU ARE UNDEFEATED."</p>
          </div>
          <div className="divquote"></div>
        </div>
        <div className="butt">  
          <div className="buttons">
            {!isLoggedIn ? (
              <button className="btn" onClick={handleLoginClick}>LOGIN</button>
            ) : (
              <button className="btn" onClick={handleLogoutClick}>LOGOUT</button>
            )}
          </div>
        </div>    
      </div>
      
      <div className="simple-technique">
        <p>Try this simple technique (Pat Pat Power) Right Now!</p>
        <div className="list-tech">
          <ol>
            <li>1. While sitting pat your right knee with your right hand, A then pat your left knee with your left hand, half second per knee, right left, right, etc...</li>
            <li>2. Talk out loud about the event that caused your trauma/fear/memory, while continuing to pat your knees.</li>
          </ol>
        </div>
      </div>

      <div className="about-ptsd">
        <div className="about-left">
          <p>Meet Your PTSD Support Chatbot</p>
          <div className="about-chatbot">
            Our PTSD chatbot is designed to provide personalized, real-time support to individuals dealing with the challenges of Post-Traumatic Stress Disorder. Whether you're looking for immediate coping strategies or simply someone to talk to, the chatbot is here to guide you through difficult moments with compassion and care.
          </div>
        </div>
        <div className="about-right">
          <img src={ptsdoverview} alt="PTSD Overview" className="chatbotscreenshot"/>
          <p>Reference chatbot image</p>
        </div>
        
        <div className="bot-features">
          <p>Key Features</p>
          <div className="features">
            <div className="feat1">
              <img src={awarness} alt="Emotional Awarness" className="icon"/>
              <br/> Emotional Awareness
            </div>
            <div className="feat2">
              <img src={copingstrat} alt="Coping Strategy" className="icon"/><br/>
              Personalized Coping Strategies
            </div>
            <div className="feat3">
              <img src={guidance} alt="Resource Guidance" className="icon"/><br/>
              Resource Guidance
            </div>
            <div className="feat4">
              <img src={availability} alt="Available" className="icon"/><br/>
              24/7 Availability
            </div>
            <div className="feat5">
              <img src={confidential} alt="Confidential Convo" className="icon"/><br/>
              Confidential Conversations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
