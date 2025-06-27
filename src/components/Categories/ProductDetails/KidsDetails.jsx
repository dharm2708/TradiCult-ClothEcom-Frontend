import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { categoriesKids } from "../../../API/categoriesKids";
import { FaCartPlus, FaStar, FaStarHalf } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import SuggestedProduct from "../../Product/suggestedProduct";
import { TbTruckDelivery } from "react-icons/tb";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiTimerFlashLine } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/Slices/shoppingCartSlices";
import "../../../styles/product-details.css";
import { IoChevronBack } from "react-icons/io5";

const WomenDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pathParts = location.pathname.split("/");

  const categoryType = pathParts[2];
  const clothType = decodeURIComponent(pathParts[3]);
  const productName = decodeURIComponent(pathParts[4]);

  const categories = categoryType === "kids" ? categoriesKids : [];

  const category = categories.find((cat) => cat.category === clothType);
  const product = category?.products.find((p) => p.name === productName);

  if (!product) return <h2>Product Not Found</h2>;
  const handleClickBack = () => {
    return navigate(-1);
  };
  return (
    <div className="background-blob-wrapper">
      <div className="animated-blobs"></div>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          width: "100px",
          fontSize: "1.2rem",
          margin: "2rem",
        }}
      >
        <IoChevronBack
          style={{ fontSize: "2rem", cursor: "pointer", display: "flex" }}
        />
        Back
      </span>
      <section className="product-section">
        <div className="product-details-container">
          {/* Image Section */}
          <div className="product-image">
            <img src={product.image} alt={product.name} />
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
            <div className="btn">
              <div className="add-to-cart">
                <button
                  className="cart-button"
                  onClick={() => dispatch(addToCart(product))}
                >
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
          <div className="product-detail">
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
        </div>
      </section>
      <SuggestedProduct />
    </div>
  );
};

export default WomenDetails;
