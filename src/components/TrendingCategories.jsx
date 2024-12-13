import React from "react";
import "../styles/TrendingCategories.css";
import Image4 from "../assets/images/image4.jpg";
import Image5 from "../assets/images/image5.jpg";
import Image6 from "../assets/images/image6.jpg";

function TrendingCategories() {
  // Sample product data
  const products = [
    { id: 1, name: "Product 1", price: "$100", image: Image4 },
    { id: 2, name: "Product 2", price: "$200", image: Image5 },
    { id: 3, name: "Product 3", price: "$300", image: Image6 },
  ];

  return (
    <section className="trending-categories">
      <h2>Trending Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingCategories;
