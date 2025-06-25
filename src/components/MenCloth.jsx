import React from "react";
import { categoriesMan } from "../API/categoriesMan";
import "../styles/productCard.css";
const MenCloth = ({ categoryId }) => {
  const category = categoriesMan.find((cat) => cat.id === categoryId);
  if (!category) return <h2>Category not found</h2>;

  return (
    <div className="background-blob-wrapper">
      <div className="animated-blobs"></div>
      <section className="category-clean">
        <h1 className="category-title">{category.category}</h1>
        <div className="product-grid">
          {category.products.map((product, index) => (
            <div key={index} className="product-card-clean">
              <div className="product-img-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />
                {product.sale && <span className="tag-badge sale">Sale</span>}
                {product.bestSeller && (
                  <span className="tag-badge best">Best Seller</span>
                )}
              </div>
              <div className="product-details">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenCloth;
