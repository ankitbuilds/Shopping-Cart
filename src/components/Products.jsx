import React from "react";
import "../styles/Products.css";
import Image7 from "../assets/images/image7.jpg";
import Image8 from "../assets/images/image8.jpg";
import Image9 from "../assets/images/image9.jpg";
import Image10 from "../assets/images/image10.jpg";

function Products() {
  // Sample product data
  const products = [
    { id: 1, name: "Product 1", price: "$100", image: Image7 },
    { id: 2, name: "Product 2", price: "$200", image: Image8 },
    { id: 3, name: "Product 3", price: "$300", image: Image9 },
    { id: 4, name: "Product 4", price: "$400", image: Image10 },
  ];

  return (
    <section className="products">
      <h2>Featured Products</h2>
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

export default Products;
