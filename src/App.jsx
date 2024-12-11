import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import NewProducts from "./pages/NewProducts";
import TrendingCategoriesPage from "./pages/TrendingCategoriesPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new-products" element={<NewProducts />} />
          <Route path="/trending-categories" element={<TrendingCategoriesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
