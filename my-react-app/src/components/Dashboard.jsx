import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './HomeComponents/Navbar';
const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Get token from local storage
    const token = localStorage.getItem('token');

    // Make authenticated request to the protected route
    axios.get('http://localhost:3000/protected-route', {
      headers: {
        Authorization: `Bearer ${token}`, // Include token in Authorization header
      },
    })
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error("Error fetching user data", error);
      });
  }, []);

  return (
    <div className="">
      <Navbar />
      <h1>Dashboard</h1>
      {userData ? (
        <div>Welcome, {userData.username}!</div>
      ) : (
        <p>Loading user data...</p>
      )}
      <img src=""></img>
    </div>
  );
};

export default Dashboard;
