import React, { useState } from 'react';
import './HappyTails2.css';

const HappyTails2 = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  // Signup form states
  const [signupFirstName, setSignupFirstName] = useState('');
  const [signupLastName, setSignupLastName] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleLoginDropdown = () => {
    setIsLoginOpen(!isLoginOpen);
    // Reset to login form when opening
    if (!isLoginOpen) {
      setIsLoginForm(true);
    }
  };

  const switchToLogin = () => {
    setIsLoginForm(true);
  };

  const switchToSignup = () => {
    setIsLoginForm(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password, rememberMe });
    alert('Login successful!');
    setIsLoginOpen(false);
    setEmail('');
    setPassword('');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup submitted:', { 
      firstName: signupFirstName,
      lastName: signupLastName,
      phone: signupPhone,
      email: signupEmail,
      password: signupPassword
    });
    alert('Account created successfully!');
    setIsLoginOpen(false);
    // Clear all signup fields
    setSignupFirstName('');
    setSignupLastName('');
    setSignupPhone('');
    setSignupEmail('');
    setSignupPassword('');
    setSignupConfirmPassword('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleSignupPasswordVisibility = () => {
    setShowSignupPassword(!showSignupPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      {/* Main Header with Logo and Navigation - Using ht2- prefix */}
      <header className="ht2-main-header">
        <div className="ht2-header-container">
          {/* Logo Area with Title on LEFT side of logo */}
          <div className="ht2-logo-area">
            <div className="ht2-logo-placeholder">
              {/* Text Title on LEFT side of logo */}
              <div className="ht2-logo-title">
                <span className="ht2-logo-happy">Happy</span>
                <span className="ht2-logo-tails">Tails</span>
              </div>
              {/* Logo Image on RIGHT side of text */}
              <img 
                src="/src/assets/logo.png" 
                alt="HappyTails Logo" 
                className="ht2-logo-image"
              />
            </div>
          </div>
          
          {/* Navigation Links - Pushed to the right */}
          <nav className="ht2-main-navigation">
            <a href="/" className="ht2-nav-item">Home</a>
            
            <div className="ht2-nav-item ht2-dropdown">
              <a href="/services" className="ht2-nav-link">
                Services <span className="ht2-dropdown-icon">▼</span>
              </a>
            </div>
            
            <div className="ht2-nav-item ht2-dropdown">
              <a href="/shop" className="ht2-nav-link">
                Shop <span className="ht2-dropdown-icon">▼</span>
              </a>
            </div>
            
            <a href="/cafe" className="ht2-nav-item">Pet Cafe</a>
            <a href="/about" className="ht2-nav-item">About Us</a>
            
            {/* Login/Signup Dropdown with Box Container */}
            <div className="ht2-nav-item ht2-login-dropdown-container">
              <div className="ht2-login-signup-box">
                <button 
                  className="ht2-login-signup-btn"
                  onClick={toggleLoginDropdown}
                  aria-expanded={isLoginOpen}
                >
                  Login/Sign up <span className="ht2-dropdown-icon">▼</span>
                </button>
                
                {isLoginOpen && (
                  <div className="ht2-login-dropdown">
                    <div className="ht2-login-content">
                      {isLoginForm ? (
                        <form className="ht2-login-form" onSubmit={handleLoginSubmit}>
                          <h3 className="ht2-form-title">Login</h3>
                          
                          <div className="ht2-form-group">
                            <label htmlFor="ht2-email" className="ht2-form-label">
                              <i className="bi bi-envelope" style={{ marginRight: '8px' }}></i> Email
                            </label>
                            <input
                              type="email"
                              id="ht2-email"
                              className="ht2-form-input"
                              placeholder="Enter your email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                          
                          <div className="ht2-form-group">
                            <label htmlFor="ht2-password" className="ht2-form-label">
                              <i className="bi bi-lock" style={{ marginRight: '8px' }}></i> Password
                            </label>
                            <div className="ht2-password-input-container">
                              <input
                                type={showPassword ? "text" : "password"}
                                id="ht2-password"
                                className="ht2-form-input"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                              />
                              <button 
                                type="button" 
                                className="ht2-password-toggle"
                                onClick={togglePasswordVisibility}
                              >
                                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                              </button>
                            </div>
                          </div>
                          
                          <div className="ht2-remember-forgot">
                            <label className="ht2-checkbox-label">
                              <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="ht2-checkbox"
                              />
                              Remember me
                            </label>
                          </div>
                          
                          <button type="submit" className="ht2-submit-btn ht2-login-submit">
                            Login
                          </button>
                          
                          <div className="ht2-signup-prompt">
                            <p>Don't have an account? <button type="button" className="ht2-switch-to-signup-btn" onClick={switchToSignup}>Create Account</button></p>
                          </div>
                        </form>
                      ) : (
                        <form className="ht2-signup-form" onSubmit={handleSignupSubmit}>
                          <h3 className="ht2-form-title">Create Account</h3>
                          
                          <div className="ht2-form-group ht2-name-group">
                            <div className="ht2-name-row">
                              <div className="ht2-name-field">
                                <label htmlFor="ht2-first-name" className="ht2-form-label">First Name</label>
                                <input
                                  type="text"
                                  id="ht2-first-name"
                                  className="ht2-form-input"
                                  placeholder="First name"
                                  value={signupFirstName}
                                  onChange={(e) => setSignupFirstName(e.target.value)}
                                  required
                                />
                              </div>
                              <div className="ht2-name-field">
                                <label htmlFor="ht2-last-name" className="ht2-form-label">Last Name</label>
                                <input
                                  type="text"
                                  id="ht2-last-name"
                                  className="ht2-form-input"
                                  placeholder="Last name"
                                  value={signupLastName}
                                  onChange={(e) => setSignupLastName(e.target.value)}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="ht2-form-group">
                            <label htmlFor="ht2-signup-phone" className="ht2-form-label">
                              <i className="bi bi-telephone" style={{ marginRight: '8px' }}></i> Phone Number
                            </label>
                            <input
                              type="tel"
                              id="ht2-signup-phone"
                              className="ht2-form-input"
                              placeholder="Enter your phone number"
                              value={signupPhone}
                              onChange={(e) => setSignupPhone(e.target.value)}
                              required
                            />
                          </div>
                          
                          <div className="ht2-form-group">
                            <label htmlFor="ht2-signup-email" className="ht2-form-label">
                              <i className="bi bi-envelope" style={{ marginRight: '8px' }}></i> Email
                            </label>
                            <input
                              type="email"
                              id="ht2-signup-email"
                              className="ht2-form-input"
                              placeholder="Enter your email"
                              value={signupEmail}
                              onChange={(e) => setSignupEmail(e.target.value)}
                              required
                            />
                          </div>
                          
                          <div className="ht2-form-group">
                            <label htmlFor="ht2-signup-password" className="ht2-form-label">
                              <i className="bi bi-lock" style={{ marginRight: '8px' }}></i> Password
                            </label>
                            <div className="ht2-password-input-container">
                              <input
                                type={showSignupPassword ? "text" : "password"}
                                id="ht2-signup-password"
                                className="ht2-form-input"
                                placeholder="Create a password"
                                value={signupPassword}
                                onChange={(e) => setSignupPassword(e.target.value)}
                                required
                              />
                              <button 
                                type="button" 
                                className="ht2-password-toggle"
                                onClick={toggleSignupPasswordVisibility}
                              >
                                <i className={`bi ${showSignupPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                              </button>
                            </div>
                          </div>
                          
                          <div className="ht2-form-group">
                            <label htmlFor="ht2-confirm-password" className="ht2-form-label">
                              <i className="bi bi-lock-fill" style={{ marginRight: '8px' }}></i> Confirm Password
                            </label>
                            <div className="ht2-password-input-container">
                              <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="ht2-confirm-password"
                                className="ht2-form-input"
                                placeholder="Confirm your password"
                                value={signupConfirmPassword}
                                onChange={(e) => setSignupConfirmPassword(e.target.value)}
                                required
                              />
                              <button 
                                type="button" 
                                className="ht2-password-toggle"
                                onClick={toggleConfirmPasswordVisibility}
                              >
                                <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                              </button>
                            </div>
                          </div>
                          
                          <button type="submit" className="ht2-submit-btn ht2-signup-submit">
                            Sign Up
                          </button>
                          
                          <div className="ht2-login-prompt">
                            <p>Already have an account? <button type="button" className="ht2-switch-to-login-btn" onClick={switchToLogin}>Login</button></p>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>

        {/* Moving Banner */}
        <div className="ht2-moving-banner">
          <div className="ht2-banner-scroll">
            <div className="ht2-banner-content">
              <span className="ht2-banner-item">EVERY WEEKDAYS 🎁 5% OFF</span>
              <span className="ht2-banner-item">EVERY WEEKDAYS 🎁 5% OFF</span>
              <span className="ht2-banner-item">EVERY WEEKDAYS 🎁 5.0% OFF</span>
              <span className="ht2-banner-item">EVERY WEEKDAYS 🎁 5% OFF</span>
              <span className="ht2-banner-item">EVERY WEEKDAYS 🎁 5% OFF</span>
              <span className="ht2-banner-item">EVERY WEEKDAYS 🎁 5% OFF</span>
              <span className="ht2-banner-item">EVERY WEEKDAYS 🎁 5.0% OFF</span>
              <span className="ht2-banner-item">EVERY WEEKDAYS 🎁 5% OFF</span>
              <span className="ht2-banner-item">EVERY WEEKDAYS 🎁 5% OFF</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HappyTails2;