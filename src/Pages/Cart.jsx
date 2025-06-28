import React, { useState } from "react";
import "../styles/cart.css";
import "../styles/categoris.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeCart,
  changeQuantity,
  decQuantity,
} from "../Redux/Slices/shoppingCartSlices";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const cart = useSelector((state) => state.productsData.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const handleClickCart = () => {
    navigate(-1);
  };
  return (
    <div className="background-blob-wrapper">
      <div className="animated-blobs"></div>
      <section className="cart-wrapper-elevated">
        <h2 className="cart-title-elevated">🛒 Your Shopping Cart</h2>

        <div className="cart-items-grid">
          {cart.map((item, index) => (
            <div className="cart-item-glass" key={index}>
              <div className="cart-item-left">
                <img
                  src={item.image}
                  alt={item.name}
                  onClick={() => {
                    handleClickCart();
                  }}
                  className="cart-img"
                />
                {item.sale && (
                  <span className="badge sale">-{item.discount}</span>
                )}
                {item.bestSeller && (
                  <span className="badge best">Best Seller</span>
                )}
              </div>

              <div className="cart-item-right">
                <h3>{item.name}</h3>
                <p className={`stock ${item.stock <= 0 ? "out" : "in"}`}>
                  {item.stock <= 0 ? "Out of Stock" : "In Stock"}
                </p>

                <div className="price-section">
                  <span className="new-price">₹{item.price}</span>
                  {item.sale && (
                    <span className="old-price">₹{item.oldPrice}</span>
                  )}
                </div>

                <div className="qty-controls">
                  <button onClick={() => dispatch(decQuantity(item.name))}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(changeQuantity(item.name))}>
                    +
                  </button>
                </div>

                <div className="subtotal">
                  Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                </div>
                <div className="cart-btn-rem">
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeCart(item.name))}
                  >
                    ✖ Remove
                  </button>
                  <button
                    className="now-btn"
                    onClick={() => dispatch(removeCart(item.name))}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="clear-cart" onClick={() => dispatch(clearCart())}>
            <button>🧹 Clear Cart</button>
          </div>
          <div className="checkout-bar">
            <h3>Total: ₹{total.toFixed(2)}</h3>
            <button className="checkout-btn">🚀 Proceed to Checkout</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
