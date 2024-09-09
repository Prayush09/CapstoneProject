import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Property from './components/Property';
import About from './components/About';
import Review from './components/Review';
import Blog from './components/Blog';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes for Login and SignUp */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Routes for NavBar elements */}
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
