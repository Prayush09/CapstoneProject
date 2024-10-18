import React from 'react';
import HeroSection from './HomeComponents/HeroSection';
import PropertyTypes from './HomeComponents/PropertyTypes';
import PopularDeals from './HomeComponents/PopularDeals';
import AboutUs from './HomeComponents/AboutUs';
import Reviews from './HomeComponents/Reviews'
import './stylesheets/Home.css'
function Home() {
  return (
    <div>
      <HeroSection />
      <PropertyTypes />
      <PopularDeals />
      <AboutUs />
      <Reviews />
    </div>
  );
}

export default Home;

