import React from 'react';
import NavBar from './NavBar';
import './Home.css'
function Home() {
  return (
    <>
      <NavBar />
      <div className="welcome">
        {/* Add content or other components here */}
        <h1>Welcome to the Home Page</h1>
      </div>
    </>
  );
}

export default Home;
