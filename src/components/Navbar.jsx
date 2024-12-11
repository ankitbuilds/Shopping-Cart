import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">BrandName</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/new-products">New Products</Link></li>
          <li><Link to="/trending-categories">Trending Categories</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
