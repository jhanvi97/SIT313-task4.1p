import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-color">
        <div className='footer'>
      <div className="footer-section">
        <h2>Explore</h2>
        <ul>
          <li>Home</li>
          <li>Question</li>
          <li>Article</li>
          <li>Tutorials</li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Support</h2>
        <ul>
          <li>FAQs</li>
          <li>Help</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Stay Connected</h2>
        <ul className="social-icons">
          <li><img src="/img/logo.jpg" alt="Facebook" /></li>
         
        </ul>
      </div>
      </div>
      <div className="footer-bottom">
        <h1>Dev@Deakin 2022</h1>
        <ul className="footer-list">
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>Code of Conduct</li>
        </ul>
      </div>
    </footer>
    
  );
}

export default Footer;