import React from 'react';
import './HappyTailsNavbar.css';

const HappyTailsNavbar = () => {
  return (
    <>
      {/* Main Header with Logo and Navigation */}
      <header className="main-header">
        <div className="header-container">
          {/* Logo Area - Add your logo image here */}
          <div className="logo-area">
            <div className="logo-placeholder">
              {/* Replace this div with your actual logo image */}
              <div className="logo-image">
                {/* Your logo will go here */}
                <span className="logo-text">HappyTails Logo</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="main-navigation">
            <a href="/" className="nav-item">Home</a>
            
            <div className="nav-item dropdown">
              <a href="/services" className="nav-link">
                Services <span className="dropdown-icon">▼</span>
              </a>
            </div>
            
            <div className="nav-item dropdown">
              <a href="/shop" className="nav-link">
                Shop <span className="dropdown-icon">▼</span>
              </a>
            </div>
            
            <a href="/cafe" className="nav-item">Pet Cafe</a>
            <a href="/about" className="nav-item">About Us</a>
          </nav>
        </div>

        {/* Moving Banner at bottom of header - Light Pink */}
        <div className="moving-banner">
          <div className="banner-scroll">
            <div className="banner-content">
              <span className="banner-item">EVERY WEEKDAYS 🎁 5% OFF</span>
              <span className="banner-item">EVERY WEEKDAYS 🎁 5% OFF</span>
              <span className="banner-item">EVERY WEEKDAYS 🎁 5% OFF</span>
              <span className="banner-item">EVERY WEEKDAYS 🎁 5% OFF</span>
              <span className="banner-item">EVERY WEEKDAYS 🎁 5% OFF</span>
              <span className="banner-item">EVERY WEEKDAYS 🎁 5% OFF</span>
              <span className="banner-item">EVERY WEEKDAYS 🎁 5% OFF</span>
              <span className="banner-item">EVERY WEEKDAYS 🎁 5% OFF</span>
              <span className="banner-item">EVERY WEEKDAYS 🎁 5% OFF</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HappyTailsNavbar;