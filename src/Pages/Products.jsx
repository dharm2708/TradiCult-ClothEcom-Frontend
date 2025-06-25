import { FaCartPlus, FaStar } from "react-icons/fa";
import DenimJacket from "../assets/images/DenimJacket.jpg";
import "../styles/product-details.css";
const Product = () => {
  return (
    <section className="product-section">
      <div className="product-details-container">
        {/* Image Section */}
        <div className="product-image">
          <img src={DenimJacket} alt="Denim Jacket" />
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
              <span>(120 reviews)</span>
            </div>
          </div>

          <p className="small-desc">100% Cotton</p>

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
          <p className="description">
            Elevate your look with this stylish denim jacket. Perfect for casual
            outings, this jacket is made from high-quality fabric that provides
            comfort and durability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Product;
