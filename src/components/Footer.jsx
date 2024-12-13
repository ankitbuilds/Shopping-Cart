import React from "react";
import "../styles/Footer.css"; // Optional: Add a CSS file for styling
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          {/* Contact Section */}
          <div className="footer-contact">
            <h4>Contact</h4>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p><strong>Email:</strong> contact@brandname.com</p>
            <p><strong>Address:</strong> 123 Main Street, City, Country</p>
          </div>

          {/* Navigate Section */}
          <div className="footer-navigate">
            <h4>Navigate</h4>
            <ul>
            <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/new-products">New Products</Link></li>
          <li><Link to="/trending-categories">Trending Categories</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter for updates:</p>
            <form className="box">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 BrandName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
