import React from 'react';
import './Header.css';
import SearchBar from './SearchBar';

function Header() {
  return (
    <div className="navbar">
      <div className="navbar-item">
        DEV@Deakin
      </div>
      <div className="navbar-item search">
        <div className="ui right aligned category search">
          <SearchBar />
        </div>
      </div>
      <div className="buttons">
        <button className="navbar-button">Post</button>
        <button className="navbar-button">Login</button>
      </div>
    </div>
  );
}

export default Header;
