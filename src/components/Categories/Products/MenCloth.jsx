import React from "react";
import { categoriesMan } from "../../../API/categoriesMan";
import "../../../styles/productCard.css";
import { useNavigate } from "react-router-dom";

const MenCloth = ({ categoryId }) => {
  const navigate = useNavigate();
  const category = categoriesMan.find((cat) => cat.id === categoryId);
  console.log(category);
  if (!category) return <h2>Category not found</h2>;
  const handleClick = (category, name) => {
    navigate(`/category/men/${category}/${name}`);
  };
  console.log(category);
  return (
    <div className="background-blob-wrapper">
      <div className="animated-blobs"></div>
      <section className="category-clean">
        <h1 className="category-title">{category.category}</h1>
        <div className="product-grid">
          {category.products.map((product, index) => (
            <div key={index} className="product-card-clean">
              <div
                className="product-img-wrapper"
                onClick={() => {
                  handleClick(category.category, product.name);
                }}
              >
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
