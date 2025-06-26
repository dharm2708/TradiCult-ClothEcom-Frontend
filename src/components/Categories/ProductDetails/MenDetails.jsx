import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { categoriesMan } from "../../../API/categoriesMan";
import { FaCartPlus, FaStar, FaStarHalf } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { RiTimerFlashLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { LiaShippingFastSolid } from "react-icons/lia";

import { BsLightningFill } from "react-icons/bs";
import { categoriesKids } from "../../../API/categoriesKids";
import { categoriesWomen } from "../../../API/categoriesWomen";
import "../../../styles/product-details.css";
import "../../../styles/productCard.css";
import "../../../styles/categoris.css";
import SuggestedProduct from "../../Product/suggestedProduct";
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
  const handleClickwomen = (category, name) => {
    navigate(`/category/women/${category}/${name}`);
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
              <h1 className="product-title">{product.name}</h1>

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
          <div className="extra">
            <div className="offers">
              <h2 className="offer-title">Offers</h2>
              <div className="offer-content">
                <BiSolidOffer />
                <p className="offer-info">
                  SOS1200 - Extra Rs.1200 Off On Min. Purchase of Rs. 7999
                </p>
                <BiSolidOffer />
                <p className="offer-info">
                  SOS1200 - Extra Rs.1200 Off On Min. Purchase of Rs. 7999
                </p>
                <BiSolidOffer />
                <p className="offer-info">
                  SOS1200 - Extra Rs.1200 Off On Min. Purchase of Rs. 7999
                </p>
              </div>
            </div>
            <div className="deliver-details">
              <h2 className="deliver-title">Delivery Details</h2>
              <div className="check-loc">
                <input type="text" placeholder="Enter Pin Code" />
                <button>Check</button>
              </div>
              <div className="delivery-time">
                <div className="info-grp">
                  <RiTimerFlashLine className="del-icon" />
                  <h2 className="deliver-time">Express Delivery</h2>
                </div>
                <p className="del-info">Get Product By Today</p>
                <div className="info-grp">
                  <LiaShippingFastSolid className="del-icon" />
                  <h2 className="deliver-time">Fast Delivery</h2>
                </div>
                <p className="del-info">Get Product By Tommorow</p>
                <div className="info-grp">
                  <TbTruckDelivery className="del-icon" />
                  <h2 className="deliver-time">Standard Delivery</h2>
                </div>
                <p className="del-info">Get Product By 2 Days</p>
              </div>
            </div>
          </div>
        </section>
        {/* Suggestion Section */}
        <SuggestedProduct />
      </div>
    </>
  );
};

export default MenDetails;
