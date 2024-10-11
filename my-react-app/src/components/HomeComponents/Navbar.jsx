import React from 'react';
import '../Home.css';
import { Link } from 'react-router-dom';
import homeeyLogo from '../../assets/Homeey-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-5-strong mask-custom p-2 fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={homeeyLogo} alt="Homeey Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/property">Property</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/review">Review</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
          <Link className="btn nav-signup me-3" to="/signup">Sign up</Link>
          <Link className="btn nav-signin" to="/login">Sign in</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
