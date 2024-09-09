import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-title">HOMEEY</li>
        <div className="navbar-center">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/property" className="navbar-link">Property</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/review" className="navbar-link">Review</Link>
          </li>
          <li className="navbar-item">
            <Link to="/blog" className="navbar-link">Blog</Link>
          </li>
        </div>
        <div className="navbar-right">
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/signup" className="navbar-link">Sign Up</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
