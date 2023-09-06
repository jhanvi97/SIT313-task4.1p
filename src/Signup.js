import React from 'react';
import './Signup.css'

function Signup() {
  return (
    <div className="container">
      <div className="horizontal-container">
        <h1 className="custom-heading">SIGN UP FOR OUR DAILY INSIDER</h1>
        <form id="subscribeForm" action="#" method="post">
          <div className="input-button-container">
            <input type="email" id="emailInput" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
      <p id="confirmationMessage" className="hidden">Thank you for subscribing!</p>
    </div>
  );
}

export default Signup;
