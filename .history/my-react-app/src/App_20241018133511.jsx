import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Property from './components/Property';
import About from './components/About';
import Review from './components/Review';
import Blog from './components/Blog';
import Login from './components/Login';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import Preferences from './components/Perferences'
import Dashboard from './components/Dashboard';
import Navbar from './components/HomeComponents/Navbar';
import './App.css';

function App() {
  return (
    <>
    //TODO Create an admin (who lists stuffs)
    <Router>
      <Navbar />
      <Routes>
        {/* Routes for Login and SignUp */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/preferences" element={<Preferences />} />
        {/* Routes for NavBar elements */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property" element={<Property />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
   
      </Routes>
    </Router>
    </>
  );
}

export default App;
