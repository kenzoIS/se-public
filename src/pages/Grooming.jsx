import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Grooming.css';

const Grooming = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCatSlide, setCurrentCatSlide] = useState(0); // New state for cat gallery
  const [currentPremiumSlide, setCurrentPremiumSlide] = useState(0); // New state for dog premium gallery

  const handleBookAppointment = () => {
    console.log('✅ Book Now button clicked!');
    console.log('🔄 Navigating to /booking route...');
    navigate('/booking');
  };

  const handleLearnMore = () => {
    console.log('✅ Learn More button clicked!');
    alert('Learn More clicked! This would show more information about services.');
  };

  // Function to navigate to next slide - Dog Deluxe Gallery (2 slides)
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 1 ? 0 : prevSlide + 1
    );
  };

  // Function to navigate to previous slide - Dog Deluxe Gallery (2 slides)
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? 1 : prevSlide - 1
    );
  };

  // Function to navigate to next slide - Cat Gallery (2 slides)
  const nextCatSlide = () => {
    setCurrentCatSlide((prevSlide) => 
      prevSlide === 1 ? 0 : prevSlide + 1
    );
  };

  // Function to navigate to previous slide - Cat Gallery (2 slides)
  const prevCatSlide = () => {
    setCurrentCatSlide((prevSlide) => 
      prevSlide === 0 ? 1 : prevSlide - 1
    );
  };

  // Function to navigate to next slide - Dog Premium Gallery (2 slides)
  const nextPremiumSlide = () => {
    setCurrentPremiumSlide((prevSlide) => 
      prevSlide === 1 ? 0 : prevSlide + 1
    );
  };

  // Function to navigate to previous slide - Dog Premium Gallery (2 slides)
  const prevPremiumSlide = () => {
    setCurrentPremiumSlide((prevSlide) => 
      prevSlide === 0 ? 1 : prevSlide - 1
    );
  };

  return (
    <div className="grooming-page">
      <section className="grooming-hero">
        <div className="hero-background">
          <div className="background-overlay"></div>
          <div 
            className="background-image"
            style={{ backgroundImage: 'url(/src/assets/grooming.png)' }}
          ></div>
        </div>

        <div className="hero-content">
          <div className="hero-container">
            <div className="hero-text-section">
              <h1 className="hero-title">GROOMING</h1>
              
              <p className="hero-description">
                Give your pets the ultimate grooming experience with our<br />
                skilled and caring professional groomers.
              </p>
              
              <div className="hero-buttons">
                <button 
                  className="hero-btn book-btn"
                  onClick={handleBookAppointment}
                >
                  Book Now
                </button>
                <button 
                  className="hero-btn learn-btn"
                  onClick={handleLearnMore}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grooming-services">
        <div className="container">
          <h2 className="services-title">OUR GROOMING PACKAGES</h2>
          
          
          <div className="packages-grid">
            {/* Cat Grooming Package */}
            <div className="package-card">
              <div className="card-header">
                <img 
                  src="/src/assets/cat-grooming.jpg" 
                  alt="Cat Grooming" 
                  className="card-image"
                />
              </div>
              <div className="package-content">
                <h3 className="package-title">Cat Grooming</h3>
                <div className="price-spacer"></div>
                <p className="package-price">₱499</p>
                <ul className="package-features">
                  <li>Haircut</li>
                  <li>Bath & dry</li>
                  <li>Ear cleaning with hair pull</li>
                  <li>Nail trim with nail file</li>
                  <li>Teeth brushing</li>
                  <li>Cologne spray</li>
                  <li>FREE cat stick tuna snack</li>
                </ul>
                <div 
                  className="learn-more-card"
                  onClick={handleLearnMore}
                >
                  <p className="learn-more-text">LEARN MORE</p>
                </div>
              </div>
            </div>
            
            {/* Dog Grooming - Deluxe */}
            <div className="package-card featured">
              <div className="most-popular-badge">MOST POPULAR</div>
              <div className="card-header">
                <img 
                  src="/src/assets/dog-deluxe.jpg" 
                  alt="Dog Grooming Deluxe" 
                  className="card-image"
                />
              </div>
              <div className="package-content">
                <h3 className="package-title">Dog Grooming - Deluxe</h3>
                <div className="price-container">
                  <span className="starts-at-label">Starts at:</span>
                  <p className="package-price">₱499</p>
                </div>
                <ul className="package-features">
                  <li>Haircut</li>
                  <li>Bath & dry</li>
                  <li>Anal sac drain</li>
                  <li>Ear cleaning with hair pull</li>
                  <li>Nail trim with nail file</li>
                  <li>Teeth brushing</li>
                  <li>Cologne spray</li>
                  <li>FREE doggie biscuit</li>
                </ul>
                <div 
                  className="learn-more-card"
                  onClick={handleLearnMore}
                >
                  <p className="learn-more-text">LEARN MORE</p>
                </div>
              </div>
            </div>
            
          {/* Dog Grooming - Premium */}
<div className="package-card">
  <div className="card-header">
    <img 
      src="/src/assets/dog-premium.jpg" 
      alt="Dog Grooming Premium" 
      className="card-image"
    />
  </div>
  <div className="package-content">
    <h3 className="package-title">Dog Grooming - Premium</h3>
    <div className="price-container">
      <span className="starts-at-label">Starts at:</span>
      <p className="package-price">₱359</p>
    </div>
    <ul className="package-features">
      <li>Haircut</li>
      <li>Bath & dry</li>
      <li>Anal sac drain</li>
      <li>Ear cleaning with hair pull</li>
      <li>Nail trim with nail file</li>
      <li>Teeth brushing</li>
      <li>Cologne spray</li>
       <li>Dematting</li>
      <li>FREE puppuccino</li>
    </ul>
    <div 
      className="learn-more-card"
      onClick={handleLearnMore}
    >
      <p className="learn-more-text">LEARN MORE</p>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

  {/* À La Carte Services Section - Clean Design */}
<section className="ala-carte-services">
  <div className="container">
    <div className="services-header">
      <h2>À LA CARTE SERVICES</h2>
      <p className="services-subtitle">Customize your pet's grooming experience with our individual services.</p>
    </div>
    
    <div className="ala-carte-grid">
      {/* Bath & Blow dry */}
      <div className="service-card">
        <h3 className="service-card-title">Bath & Blow Dry</h3>
        <div className="price-list">
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Small</span>
              <span className="size-weight">Below 5kg</span>
            </div>
            <span className="price-value">200</span>
          </div>
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Medium</span>
              <span className="size-weight">6-10kg</span>
            </div>
            <span className="price-value">250</span>
          </div>
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Large</span>
              <span className="size-weight">11-30kg</span>
            </div>
            <span className="price-value">300</span>
          </div>
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Extra Large</span>
              <span className="size-weight">31kg & up</span>
            </div>
            <span className="price-value">350</span>
          </div>
        </div>
      </div>

      {/* Nail clip with nail file */}
      <div className="service-card">
        <h3 className="service-card-title">Nail Clip with Nail File</h3>
        <div className="price-list">
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Small</span>
              <span className="size-weight">Below 5kg</span>
            </div>
            <span className="price-value">80</span>
          </div>
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Medium</span>
              <span className="size-weight">6-10kg</span>
            </div>
            <span className="price-value">100</span>
          </div>
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Large</span>
              <span className="size-weight">11-30kg</span>
            </div>
            <span className="price-value">120</span>
          </div>
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Extra Large</span>
              <span className="size-weight">31kg & up</span>
            </div>
            <span className="price-value">150</span>
          </div>
        </div>
      </div>

      {/* Face trim / Paw trim */}
      <div className="service-card">
        <h3 className="service-card-title">Face Trim / Paw Trim</h3>
        <div className="price-list">
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Small</span>
              <span className="size-weight">Below 5kg</span>
            </div>
            <span className="price-value">150</span>
          </div>
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Medium</span>
              <span className="size-weight">6-10kg</span>
            </div>
            <span className="price-value">150</span>
          </div>
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Large</span>
              <span className="size-weight">11-30kg</span>
            </div>
            <span className="price-value">200</span>
          </div>
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Extra Large</span>
              <span className="size-weight">31kg & up</span>
            </div>
            <span className="price-value">200</span>
          </div>
        </div>
      </div>

      {/* Dematting */}
      <div className="service-card">
        <h3 className="service-card-title">Dematting</h3>
        <div className="price-list">
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Small</span>
              <span className="size-weight">Below 5kg</span>
            </div>
            <span className="price-value">250</span>
          </div>
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Medium</span>
              <span className="size-weight">6-10kg</span>
            </div>
            <span className="price-value">250</span>
          </div>
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Large</span>
              <span className="size-weight">11-30kg</span>
            </div>
            <span className="price-value">350</span>
          </div>
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Extra Large</span>
              <span className="size-weight">31kg & up</span>
            </div>
            <span className="price-value">450</span>
          </div>
        </div>
      </div>

      {/* Doggy Spa */}
      <div className="service-card">
        <h3 className="service-card-title">Doggy Spa</h3>
        <div className="price-list">
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Small</span>
              <span className="size-weight">Below 5kg</span>
            </div>
            <span className="price-value">250</span>
          </div>
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Medium</span>
              <span className="size-weight">6-10kg</span>
            </div>
            <span className="price-value">250</span>
          </div>
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Large</span>
              <span className="size-weight">11-30kg</span>
            </div>
            <span className="price-value">350</span>
          </div>
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Extra Large</span>
              <span className="size-weight">31kg & up</span>
            </div>
            <span className="price-value">380</span>
          </div>
        </div>
      </div>

      {/* Pet Hair Color */}
      <div className="service-card">
        <h3 className="service-card-title">Pet Hair Color</h3>
        <div className="price-list">
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Small</span>
              <span className="size-weight">Below 5kg</span>
            </div>
            <span className="price-value">100</span>
          </div>
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Medium</span>
              <span className="size-weight">6-10kg</span>
            </div>
            <span className="price-value">120</span>
          </div>
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Large</span>
              <span className="size-weight">11-30kg</span>
            </div>
            <span className="price-value">150</span>
          </div>
          <div className="price-item">
            <div className="size-info">
              <span className="size-name">Extra Large</span>
              <span className="size-weight">31kg & up</span>
            </div>
            <span className="price-value">180</span>
          </div>
        </div>
      </div>
    </div>
    
   
  </div>
</section>

      {/* Cat Grooming Section */}
      <section className="cat-grooming-section">
        <div className="container">
          {/* Cat Grooming Header */}
          <div className="deluxe-header">
            <h2 className="deluxe-main-title">Cat Grooming</h2>
            <button 
              className="deluxe-book-button"
              onClick={handleBookAppointment}
            >
              Book Now
            </button>
          </div>
          
          {/* Cat Grooming Content */}
          <div className="deluxe-content">
            <p className="deluxe-description">
              Includes a haircut, bath and dry, ear cleaning, nail trimming, teeth brushing, a cologne spray, and a free cat tuna snack.
            </p>
            
            {/* Simple Vertical Price List */}
            <div className="simple-price-list">
              <div className="price-line">
                <span className="price-amount">₱499</span>
                
              </div>
            </div>
          </div>
          
          {/* Line below Cat Grooming */}
          <div className="section-divider"></div>
          
          {/* Cat Gallery Section */}
          <div className="gallery-section">
            <div className="gallery-header">
              <h3 className="gallery-title">Gallery</h3>
            </div>
            
            {/* 3-Photo Gallery Container */}
            <div className="three-photo-gallery-container">
              <button className="gallery-arrow prev-arrow" onClick={prevCatSlide}>
                ←
              </button>
              
              <div className="gallery-three-photos">
                <div 
                  className="gallery-three-wrapper"
                  style={{ transform: `translateX(-${currentCatSlide * 100}%)` }}
                >
                  {/* First group of 3 cat photos */}
                  <div className="photo-group">
                    <div className="photo-card">
                      <div className="photo-square">
                        <img 
                          src="/src/assets/leigh.jpg" 
                          alt="Leigh" 
                          className="gallery-photo"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/fff2fa/f53799?text=LEIGH';
                            e.target.alt = 'Leigh Placeholder';
                          }}
                        />
                      </div>
                      <div className="photo-name">LEIGH</div>
                    </div>
                    
                    <div className="photo-card">
                      <div className="photo-square">
                        <img 
                          src="/src/assets/milo.jpg" 
                          alt="Milo" 
                          className="gallery-photo"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/fff2fa/f53799?text=MILO';
                            e.target.alt = 'Milo Placeholder';
                          }}
                        />
                      </div>
                      <div className="photo-name">MILO</div>
                    </div>
                    
                    <div className="photo-card">
                      <div className="photo-square">
                        <img 
                          src="/src/assets/snowy.jpg" 
                          alt="Snowy" 
                          className="gallery-photo"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/fff2fa/f53799?text=SNOWY';
                            e.target.alt = 'Snowy Placeholder';
                          }}
                        />
                      </div>
                      <div className="photo-name">SNOWY</div>
                    </div>
                  </div>
                  
                  {/* Second group of 3 cat photos */}
                  <div className="photo-group">
                    <div className="photo-card">
                      <div className="photo-square">
                        <img 
                          src="/src/assets/coco.jpg" 
                          alt="Coco" 
                          className="gallery-photo"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/fff2fa/f53799?text=COCO';
                            e.target.alt = 'Coco Placeholder';
                          }}
                        />
                      </div>
                      <div className="photo-name">COCO</div>
                    </div>
                    
                    <div className="photo-card">
                      <div className="photo-square">
                        <img 
                          src="/src/assets/piero.jpg" 
                          alt="Piero" 
                          className="gallery-photo"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/fff2fa/f53799?text=PIERO';
                            e.target.alt = 'Piero Placeholder';
                          }}
                        />
                      </div>
                      <div className="photo-name">PIERO</div>
                    </div>
                    
                    <div className="photo-card">
                      <div className="photo-square">
                        <img 
                          src="/src/assets/shadow.jpg" 
                          alt="Shadow" 
                          className="gallery-photo"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/fff2fa/f53799?text=SHADOW';
                            e.target.alt = 'Shadow Placeholder';
                          }}
                        />
                      </div>
                      <div className="photo-name">SHADOW</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="gallery-arrow next-arrow" onClick={nextCatSlide}>
                →
              </button>
            </div>
            
            {/* Cat Gallery Indicators - 2 slides */}
            <div className="gallery-indicators">
              {[0, 1].map((index) => (
                <button
                  key={index}
                  className={`gallery-indicator ${index === currentCatSlide ? 'active' : ''}`}
                  onClick={() => setCurrentCatSlide(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Line below Cat Gallery */}
          <div className="section-divider"></div>
        </div>
      </section>

      {/* Dog Grooming-Deluxe Section with White Background */}
      <section className="dog-deluxe-section">
        <div className="container">
          {/* Dog Grooming - Deluxe Header */}
          <div className="deluxe-header">
            <h2 className="deluxe-main-title">Dog Grooming - Deluxe</h2>
            <button 
              className="deluxe-book-button"
              onClick={handleBookAppointment}
            >
              Book Now
            </button>
          </div>
          
          {/* Dog Grooming - Deluxe Content */}
          <div className="deluxe-content">
            <p className="deluxe-description">
              Includes a haircut, bath and dry, ear cleaning, nail trimming, teeth brushing, a cologne spray, and a free cat tuna snack.
            </p>
            
            {/* Simple Vertical Price List */}
            <div className="simple-price-list">
              <div className="price-line">
                <span className="price-amount">₱359</span>
                <span className="price-size">Small (under 5kg)</span>
              </div>
              <div className="price-line">
                <span className="price-amount">₱409</span>
                <span className="price-size">Medium (6-10kg)</span>
              </div>
              <div className="price-line">
                <span className="price-amount">₱709</span>
                <span className="price-size">Large (11-30kg)</span>
              </div>
              <div className="price-line">
                <span className="price-amount">₱949</span>
                <span className="price-size">Extra Large (31kg & up)</span>
              </div>
            </div>
          </div>
          
          {/* Line below Dog Grooming - Deluxe */}
          <div className="section-divider"></div>
          
          {/* Dog Gallery Section */}
          <div className="gallery-section">
            <div className="gallery-header">
              <h3 className="gallery-title">Gallery</h3>
            </div>
            
            {/* 3-Photo Gallery Container */}
            <div className="three-photo-gallery-container">
              <button className="gallery-arrow prev-arrow" onClick={prevSlide}>
                ←
              </button>
              
              <div className="gallery-three-photos">
                <div 
                  className="gallery-three-wrapper"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {/* First group of 3 dog photos */}
                  <div className="photo-group">
                    <div className="photo-card">
                      <div className="photo-square">
                        <img 
                          src="/src/assets/bella.jpg" 
                          alt="Bella" 
                          className="gallery-photo"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/fff2fa/f53799?text=BELLA';
                            e.target.alt = 'Bella Placeholder';
                          }}
                        />
                      </div>
                      <div className="photo-name">BELLA</div>
                    </div>
                    
                    <div className="photo-card">
                      <div className="photo-square">
                        <img 
                          src="/src/assets/chloe.jpg" 
                          alt="Chloe" 
                          className="gallery-photo"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/fff2fa/f53799?text=CHLOE';
                            e.target.alt = 'Chloe Placeholder';
                          }}
                        />
                      </div>
                      <div className="photo-name">CHLOE</div>
                    </div>
                    
                    <div className="photo-card">
                      <div className="photo-square">
                        <img 
                          src="/src/assets/fifteen.jpg" 
                          alt="Fifteen" 
                          className="gallery-photo"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/fff2fa/f53799?text=FIFTEEN';
                            e.target.alt = 'Fifteen Placeholder';
                          }}
                        />
                      </div>
                      <div className="photo-name">FIFTEEN</div>
                    </div>
                  </div>
                  
                  {/* Second group of 3 dog photos */}
                  <div className="photo-group">
                    <div className="photo-card">
                      <div className="photo-square">
                        <img 
                          src="/src/assets/ranne.jpg" 
                          alt="Ranne" 
                          className="gallery-photo"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/fff2fa/f53799?text=RANNE';
                            e.target.alt = 'Ranne Placeholder';
                          }}
                        />
                      </div>
                      <div className="photo-name">RANNE</div>
                    </div>
                    
                    <div className="photo-card">
                      <div className="photo-square">
                        <img 
                          src="/src/assets/sissy.jpg" 
                          alt="Sissy" 
                          className="gallery-photo"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/fff2fa/f53799?text=SISSY';
                            e.target.alt = 'Sissy Placeholder';
                          }}
                        />
                      </div>
                      <div className="photo-name">SISSY</div>
                    </div>
                    
                    <div className="photo-card">
                      <div className="photo-square">
                        <img 
                          src="/src/assets/louis.jpg" 
                          alt="Louis" 
                          className="gallery-photo"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/fff2fa/f53799?text=LOUIS';
                            e.target.alt = 'Louis Placeholder';
                          }}
                        />
                      </div>
                      <div className="photo-name">LOUIS</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="gallery-arrow next-arrow" onClick={nextSlide}>
                →
              </button>
            </div>
            
            {/* Dog Gallery Indicators - 2 slides */}
            <div className="gallery-indicators">
              {[0, 1].map((index) => (
                <button
                  key={index}
                  className={`gallery-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Line below Gallery */}
          <div className="section-divider"></div>
        </div>
      </section>

      {/* Dog Grooming-Premium Section with White Background */}
      <section className="dog-premium-section">
        <div className="container">
          {/* Dog Grooming - Premium Header */}
          <div className="deluxe-header">
            <h2 className="deluxe-main-title">Dog Grooming - Premium</h2>
            <button 
              className="deluxe-book-button"
              onClick={handleBookAppointment}
            >
              Book Now
            </button>
          </div>
          
          {/* Dog Grooming - Premium Content */}
          <div className="deluxe-content">
            <p className="deluxe-description">
              Includes a haircut, bath and dry, anal sac draining, ear cleaning, nail trim, teeth brushing, dematting, cologne spray, and a free puppuccino.
            </p>
            
            {/* Simple Vertical Price List */}
            <div className="simple-price-list">
              <div className="price-line">
                <span className="price-amount">₱499</span>
                <span className="price-size">Small (under 5kg)</span>
              </div>
              <div className="price-line">
                <span className="price-amount">₱599</span>
                <span className="price-size">Medium (6-10kg)</span>
              </div>
              <div className="price-line">
                <span className="price-amount">₱849</span>
                <span className="price-size">Large (11-30kg)</span>
              </div>
              <div className="price-line">
                <span className="price-amount">₱1,049</span>
                <span className="price-size">Extra Large (31kg & up)</span>
              </div>
            </div>
          </div>
          
          {/* Line below Dog Grooming - Premium */}
          <div className="section-divider"></div>
          
          {/* Dog Premium Gallery Section */}
          <div className="gallery-section">
            <div className="gallery-header">
              <h3 className="gallery-title">Gallery</h3>
            </div>
            
            {/* 3-Photo Gallery Container */}
            <div className="three-photo-gallery-container">
              <button className="gallery-arrow prev-arrow" onClick={prevPremiumSlide}>
                ←
              </button>
              
              <div className="gallery-three-photos">
                <div 
                  className="gallery-three-wrapper"
                  style={{ transform: `translateX(-${currentPremiumSlide * 100}%)` }}
                >
                  {/* First group of 3 dog premium photos */}
                  <div className="photo-group">
                    <div className="photo-card">
                      <div className="photo-square">
                        <img 
                          src="/src/assets/charm.jpg" 
                          alt="Charm" 
                          className="gallery-photo"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/fff2fa/f53799?text=CHARM';
                            e.target.alt = 'Charm Placeholder';
                          }}
                        />
                      </div>
                      <div className="photo-name">CHARM</div>
                    </div>
                    
                    <div className="photo-card">
                      <div className="photo-square">
                        <img 
                          src="/src/assets/choco.jpg" 
                          alt="Choco" 
                          className="gallery-photo"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/fff2fa/f53799?text=CHOCO';
                            e.target.alt = 'Choco Placeholder';
                          }}
                        />
                      </div>
                      <div className="photo-name">CHOCO</div>
                    </div>
                    
                    <div className="photo-card">
                      <div className="photo-square">
                        <img 
                          src="/src/assets/ekko.jpg" 
                          alt="Ekko" 
                          className="gallery-photo"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/fff2fa/f53799?text=EKKO';
                            e.target.alt = 'Ekko Placeholder';
                          }}
                        />
                      </div>
                      <div className="photo-name">EKKO</div>
                    </div>
                  </div>
                  
                  {/* Second group of 3 dog premium photos */}
                  <div className="photo-group">
                    <div className="photo-card">
                      <div className="photo-square">
                        <img 
                          src="/src/assets/miller.jpg" 
                          alt="Miller" 
                          className="gallery-photo"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/fff2fa/f53799?text=MILLER';
                            e.target.alt = 'Miller Placeholder';
                          }}
                        />
                      </div>
                      <div className="photo-name">MILLER</div>
                    </div>
                    
                    <div className="photo-card">
                      <div className="photo-square">
                        <img 
                          src="/src/assets/pinky.jpg" 
                          alt="Pinky" 
                          className="gallery-photo"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/fff2fa/f53799?text=PINKY';
                            e.target.alt = 'Pinky Placeholder';
                          }}
                        />
                      </div>
                      <div className="photo-name">PINKY</div>
                    </div>
                    
                    <div className="photo-card">
                      <div className="photo-square">
                        <img 
                          src="/src/assets/totie.jpg" 
                          alt="Totie" 
                          className="gallery-photo"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/fff2fa/f53799?text=TOTIE';
                            e.target.alt = 'Totie Placeholder';
                          }}
                        />
                      </div>
                      <div className="photo-name">TOTIE</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="gallery-arrow next-arrow" onClick={nextPremiumSlide}>
                →
              </button>
            </div>
            
            {/* Dog Premium Gallery Indicators - 2 slides */}
            <div className="gallery-indicators">
              {[0, 1].map((index) => (
                <button
                  key={index}
                  className={`gallery-indicator ${index === currentPremiumSlide ? 'active' : ''}`}
                  onClick={() => setCurrentPremiumSlide(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Line below Gallery */}
          <div className="section-divider"></div>
        </div>
      </section>
    </div>
  );
};

export default Grooming;