import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styling/Navbar.css'; // Ensure this path is correct

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      <Link to="/" className="home-link">Landsters RealEstates</Link>
      <ul className="nav-links">
        <li><Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link></li>
        <li><Link to="/signup" className={location.pathname === '/signup' ? 'active' : ''}>Signup</Link></li>
        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>

        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
        {/* <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li> */}
        {/* <li><Link to="/property-list" className={location.pathname === '/property-list' ? 'active' : ''}>Property List</Link></li> */}
        <li><Link to="/add-listing" className={`btn-add-listing ${location.pathname === '/add-listing' ? 'active' : ''}`}>Add Listing</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
