import React from "react";
import "../styles/Blogs.css";

function Blogs() {
  // Sample blog data
  const blogs = [
    { id: 1, title: "Blog 1", description: "This is a short description of blog 1.", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Blog 2", description: "This is a short description of blog 2.", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Blog 3", description: "This is a short description of blog 3.", image: "https://via.placeholder.com/150" },
  ];

  return (
    <section className="blogs">
      <h2>Latest Blogs</h2>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
