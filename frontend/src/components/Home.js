import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for client-side navigation
import '../styling/Home.css';
import Footer from './Footer'; // Ensure Footer is imported correctly
import Navbar from './Navbar'; // Import the Navbar component

const Home = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = window.scrollY;

      if (scrollTop + clientHeight >= scrollHeight - 50) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="hero-section">
        
        <h1>Find Your Dream Home</h1>
        <p>Explore the best properties in your area</p>
        <div className="search-bar">
          <input type="text" placeholder="Search by city, neighborhood, or ZIP code" />
          <button>Search</button>
        </div>
        {/* Admin Login Button */}
        <div className="admin-login-container">
          <Link to="/admin-home" className="admin-login-button">Admin Login</Link>
        </div>
      </div>

      <div className="image-section">
        {/* Add any content or image here if needed */}
      </div>

      <Footer showFooter={showFooter} />
    </div>
  );
};

export default Home;
