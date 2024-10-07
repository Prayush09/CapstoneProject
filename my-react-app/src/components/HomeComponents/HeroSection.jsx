import React from 'react';
import '../Home.css'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content text-center">
        <div className="hero-text-info">
        <h1>Find Your Ideal <br /><span className="highlight">Roommate</span></h1>
        <p>"In the cookie of life, friends are the chocolate chips" - Sun Tzu</p>
        <div className="search-box d-flex justify-content-center">
          <button className="btn room-find-button me-2">Find Room</button>
          <button className="btn people-find-button">Find People</button>
        </div>
        <form className="search-form d-flex justify-content-center mt-4">
          <select className="form-select me-2" aria-label="Location">
            <option selected>Location</option>
            <option value="1">New York</option>
            <option value="2">Los Angeles</option>
            <option value="3">Chicago</option>
          </select>
          <select className="form-select me-2" aria-label="Property">
            <option selected>Property</option>
            <option value="1">Apartment</option>
            <option value="2">Private Room</option>
            <option value="3">House</option>
          </select>
          <input type="text" className="form-control me-2" placeholder="Price" />
          <button type="submit" className="btn form-button-hero">Search</button>
        </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
