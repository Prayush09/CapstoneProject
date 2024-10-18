import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './HomeComponents/Navbar';
import './stylesheets/SignUp.css';

const SignUp = () => {
  const [step, setStep] = useState(1); // Track the current step of the form
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
    
    // Handle the submission of the second form
    if (step === 2) {
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
        nav('/login');
      } catch (error) {
        console.error('Error during sign up:', error);
      }
    } else {
      // Validate password confirmation
      if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
      }
      // Move to the next step
      setStep(2);
    }
  };

  return (
    <>
      <div className="form-container">
        <div className="form-card">
          <h2 className="form-title">{step === 1 ? 'Create an Account' : 'Additional Information'}</h2>
          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input 
                    type="text"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input 
                    type="text" 
                    id="state"
                    value={state}
                    onChange={(e)=>setState(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input 
                    type="text" 
                    id="city"
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNo">Phone Number</label>
                  <input 
                    type="number" 
                    id="phoneNo"
                    value={phoneNo}
                    onChange={(e)=>setPhoneNo(e.target.value)}
                    required
                  />
                </div>
              </>
            )}
            <button type="submit" className="signup-btn">
              {step === 1 ? 'Next' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
