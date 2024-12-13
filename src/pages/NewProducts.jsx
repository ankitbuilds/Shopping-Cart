import React from "react";
import '../styles/NewProducts.css';


function NewProducts() {
  const products = [
    { id: 1, name: "Product 1", price: "$100", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: "$200", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: "$300", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", price: "$400", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 5", price: "$500", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Product 6", price: "$600", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="new-products">
      <section className="hero">
        <h1>New Products</h1>
        <p>Discover the latest arrivals in our store!</p>
      </section>

      <section className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default NewProducts;
