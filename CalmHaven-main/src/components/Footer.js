import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import fb from "C:/Users/manus/Downloads/CalmHaven-main/CalmHaven-main/src/assets/icons/fbicon.svg";
import insta from "C:/Users/manus/Downloads/CalmHaven-main/CalmHaven-main/src/assets/icons/instaicon.svg";
import lin from "C:/Users/manus/Downloads/CalmHaven-main/CalmHaven-main/src/assets/icons/linkedin-icon.png";
function Footer() {
  return (
    <footer style={{ backgroundColor: '#004C4C', color: 'white', padding: '20px', marginTop: '30px' }}>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd" target="_blank" rel="noopener noreferrer">NIMH - PTSD Info</a></li>
            <li><a href="https://www.samhsa.gov/" target="_blank" rel="noopener noreferrer">SAMHSA - Mental Health</a></li>
            <li><a href="https://www.who.int/mental_health" target="_blank" rel="noopener noreferrer">WHO - Mental Health</a></li>
            <li><a href="https://www.va.gov/health-care/health-needs-conditions/mental-health/ptsd/" target="_blank" rel="noopener noreferrer">VA - National Center for PTSD</a></li>
            <li><a href="https://www.cdc.gov/mentalhealth/" target="_blank" rel="noopener noreferrer">CDC - Mental Health</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support Resources</h3>
          <ul>
            <li><a href="/find-doctor">Find a Doctor</a></li>
            <li><a href="/emergency-helpline">Emergency Helpline</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Community & Inspiration</h3>
          <ul>
            <li><Link to="/join-community">Join Our Community</Link></li>
            <li><Link to="/stories">Success Stories</Link></li>
            <li><Link to="/volunteer">Volunteer Opportunities</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Email: support@calmhaven.com</p>
          <p>Phone: +91-1234567890</p>
          <div className="social-links">
            <a href="/fb"><img src={fb}  alt="fb" className="mediaicon"/></a>  <a href="/twitter"><img src={insta}  alt="insta" className="mediaicon"/></a>  <a href="/linkedin"><img src={lin}  alt="ledin" className="mediaicon"/></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Legal & Privacy</h3>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Use</Link></li>
            <li><Link to="/disclaimer">Medical Disclaimer</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Calm Haven. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;