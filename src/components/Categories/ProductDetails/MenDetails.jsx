import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { categoriesMan } from "../../../API/categoriesMan";
import { FaCartPlus, FaStar, FaStarHalf } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import { categoriesKids } from "../../../API/categoriesKids";
import { categoriesWomen } from "../../../API/categoriesWomen";
import "../../../styles/product-details.css";
import "../../../styles/productCard.css";
import "../../../styles/categoris.css";
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

  //Suggested Content
  const womenCat = categoriesWomen.find(
    (cat) => cat.category === category?.category
  );
  const kidsCat = categoriesKids.find(
    (cat) => cat.category === category?.category
  );
  console.log(kidsCat);
  //Click Handler
  const handleClickKids = (category, name) => {
    navigate(`/category/kids/${category}/${name}`);
  };
  if (!product) return <h2>Product Not Found</h2>;

  return (
    <>
      <div className="background-blob-wrapper">
        <div className="animated-blobs"></div>
        <section className="product-section">
          <div className="product-details-container">
            {/* Image Section */}
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="btn">
                <div className="add-to-cart">
                  <button className="cart-button">
                    <FaCartPlus className="cart-icon" /> Add to Cart
                  </button>
                </div>
                <div className="buy-now-btn">
                  <button className="buy-btn">
                    <BsLightningFill className="cart-icon" />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Product Info Section */}
            <div className="product-info">
              <h1>{product.name}</h1>
              <p className="description">{product.description}</p>

              <div className="product-price-rating">
                <div className="price-group">
                  <p className="price">₹{product.price}</p>
                  <p className="old-price">₹{product.oldPrice}</p>
                  <p className="discount">({product.discount} OFF)</p>
                </div>
                <div className="rating">
                  {[...Array(4)].map((_, index) => (
                    <FaStar key={index} className="star" />
                  ))}
                  <FaStarHalf className="star" />
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

                <div className="option-size">
                  <p>Size:</p>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </div>
              </div>

              <div className="availability">
                <p>
                  <strong>Availability:</strong> In Stock
                </p>
              </div>

              <div className="product-details">
                <h4>Product Details</h4>
                <div className="sub-content">
                  <h5>Material type</h5>
                  <p>{product.type}</p>
                  <h5>Length</h5>
                  <p>{product.length}</p>
                  <h5>Style</h5>
                  <p>{product.style}</p>
                  <h5>Ocassion Type</h5>
                  <p>{product.ocatype}</p>
                  <h5>Generic Name</h5>
                  <p>{product.genericnam}</p>
                  <h5>Weight</h5>
                  <p>{product.weight}</p>
                  <h5>Net Quantity</h5>
                  <p>{product.quantity}</p>
                  <h5>Manufacturer </h5>
                  <p>{product.manufacturer}</p>
                  <h5>Country of Origin</h5>
                  <p>{product.origin}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Suggestion Section */}
        <section className="suggested-content">
          <h1 className="suggest-title">Suggested Product</h1>
          <div className="product-grid">
            {kidsCat &&
              kidsCat.products &&
              kidsCat.products.map((product, index) => (
                <div key={index} className="product-card-clean">
                  <div
                    className="product-img-wrapper"
                    onClick={() => {
                      handleClickKids(category.category, product.name);
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-img"
                    />
                    {product.sale && (
                      <span className="tag-badge sale">Sale</span>
                    )}
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
            {womenCat &&
              womenCat.products &&
              womenCat.products.map((product, index) => (
                <div key={index} className="product-card-clean">
                  <div
                    className="product-img-wrapper"
                    onClick={() => {
                      handleClickKids(category.category, product.name);
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-img"
                    />
                    {product.sale && (
                      <span className="tag-badge sale">Sale</span>
                    )}
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
    </>
  );
};

export default MenDetails;
