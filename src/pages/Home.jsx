import React, { useState, useEffect } from "react";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Blogs from "../components/Blogs";
import TrendingCategories from "../components/TrendingCategories";
import '../styles/Home.css';


function Home() {
    const slides = [
      "https://via.placeholder.com/1200x300?text=Slide+1",
      "https://via.placeholder.com/1200x300?text=Slide+2",
      "https://via.placeholder.com/1200x300?text=Slide+3",
    ];
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    // Automatically change slides every 3 seconds
    useEffect(() => {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 3000);
  
      return () => clearInterval(slideInterval); // Cleanup interval on component unmount
    }, [slides.length]);
  
  return (
    <div>
      {/* Slider Section */}
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
      </div>

      
      <TrendingCategories/>
      <section className="products-section">
        <Products/>
      </section>

      <section className="blogs-section">
        <Blogs/>
      </section>

      <footer>© 2024 My E-Commerce Website</footer>
    </div>
  );
}

export default Home;
