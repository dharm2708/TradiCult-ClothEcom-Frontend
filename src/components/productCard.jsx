import React from "react";
import "../styles/productCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ productData }) => {
  const navigate = useNavigate();
  const handleClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };
  return (
    <>
      <div className="product-container">
        {productData.map((product) => (
          <div className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              onClick={() => handleClick(product)}
            />
            {product.discount && (
              <span className="product-discount">{product.discount}</span>
            )}
            {product.bestSeller && (
              <span className="best-seller-badge">Best Seller</span>
            )}
            <h2 className="product-name">{product.name}</h2>
            <h4 className="product-category">{product.category}</h4>
            <div className="product-price">
              <span className="product-discount-price">
                {product.discount ? `$${product.discountPrice}` : null}
              </span>
              <span
                className="product-price"
                style={{
                  textDecoration: product.discount ? "line-through" : "none",
                }}
              >
                ${product.price}
              </span>
            </div>

            <p className="product-description">{product.description}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
