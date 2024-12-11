import React from "react";
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <section className="hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Reach out to us through the form below or contact us directly.</p>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section className="contact-details">
        <h2>Contact Information</h2>
        <p>Email: support@brandname.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Main Street, City, Country</p>
      </section>

      <section className="map">
        <h2>Find Us Here</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093744!2d144.96305791531868!3d-37.81410797975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774dd23092c3c!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633999423452!5m2!1sen!2sau"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}

export default Contact;
