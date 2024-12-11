import React from "react";
import '../styles/AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <section className="hero">
        <h1>About Us</h1>
        <p>Learn more about our journey and what drives us.</p>
      </section>
      
      <section className="company-story">
        <h2>Our Story</h2>
        <p>
          We started as a small team passionate about delivering high-quality
          products to our customers. Over the years, we've grown into a brand
          trusted by thousands, maintaining our commitment to excellence.
        </p>
      </section>

      <section className="mission-vision">
        <h2>Our Mission</h2>
        <p>To provide innovative and sustainable products that make life easier.</p>

        <h2>Our Vision</h2>
        <p>To be a leader in the industry while staying true to our core values.</p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Head of Design</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
