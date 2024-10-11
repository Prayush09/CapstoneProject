import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './HomeComponents/Navbar';
{/* Create a Preferences page which will be used in the ml model */}
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  const nav = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/signup', {
        username,
        email,
        password,
        country,
        state, 
        city,
        phoneNo
      });
      console.log('Sign up successful:', response.data);
      nav('/preferences');
      // Handle successful sign up (e.g., redirect, show message, etc.)
    } catch (error) {
      console.error('Error during sign up:', error);
      // Handle error (e.g., show error message, etc.)
    }
  };

  return (
    <>
    <Navbar />
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="country">
            Country: 
          </label>
          <input 
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="state">State:</label>
          <input 
            type="text" 
            id="state"
            value={state}
            onChange={(e)=>setState(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="city">City:</label>
          <input 
            type="text" 
            id="city"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="phoneNo">Phone No:</label>
          <input 
            type="number" 
            id="phoneNo"
            value={phoneNo}
            onChange={(e)=>setPhoneNo(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </>
  );
};

export default SignUp;
