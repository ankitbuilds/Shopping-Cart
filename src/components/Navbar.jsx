import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Import the CSS file

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu state
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">BrandName</Link>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/new-products" onClick={() => setIsMenuOpen(false)}>New Products</Link></li>
          <li><Link to="/trending-categories" onClick={() => setIsMenuOpen(false)}>Trending Categories</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
