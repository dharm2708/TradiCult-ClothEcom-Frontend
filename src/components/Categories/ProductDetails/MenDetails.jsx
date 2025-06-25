import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { categoriesMan } from "../../../API/categoriesMan";
import { FaCartPlus, FaStar } from "react-icons/fa";
import "../../../styles/product-details.css";
const MenDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathParts = location.pathname.split("/");

  const categoryType = pathParts[2];
  const clothType = decodeURIComponent(pathParts[3]); 
  const productName = decodeURIComponent(pathParts[4]); 

  const categories = categoryType === "men" ? categoriesMan : []; 

  const category = categories.find((cat) => cat.category === clothType);
  const product = category?.products.find((p) => p.name === productName);

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <>
      <section className="product-section">
        <div className="product-details-container">
          {/* Image Section */}
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>

          {/* Product Info Section */}
          <div className="product-info">
            <h1>Denim Jacket</h1>

            <div className="product-price-rating">
              <p className="price">$20.00</p>
              <div className="rating">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="star" />
                ))}
                <span>{product.review} reviews</span>
              </div>
            </div>

            <p className="small-desc">100% {product.type}</p>

            {/* Product Options */}
            <div className="options">
              <div className="option">
                <p>Color:</p>
                <div className="color-options">
                  <span
                    className="color-circle"
                    style={{ backgroundColor: "#1f1f1f" }}
                  ></span>
                  <span
                    className="color-circle"
                    style={{ backgroundColor: "#708090" }}
                  ></span>
                  <span
                    className="color-circle"
                    style={{ backgroundColor: "#a0522d" }}
                  ></span>
                </div>
              </div>

              <div className="option">
                <p>Size:</p>
                <select>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>

            <div className="availability">
              <p>
                <strong>Availability:</strong> In Stock
              </p>
            </div>

            <div className="add-to-cart">
              <button className="cart-button">
                <FaCartPlus className="cart-icon" /> Add to Cart
              </button>
            </div>
            <p className="description">{product.description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenDetails;
