import React, { useState } from "react";
import "../styles/cart.css";
import "../styles/categoris.css";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeCart } from "../Redux/Slices/shoppingCartSlices";
const Cart = () => {
  const cart = useSelector((state) => state.productsData.cart);
  const dispatch = useDispatch();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="background-blob-wrapper">
      <div className="animated-blobs"></div>
      <section className="cart-wrapper">
        <h2 className="cart-title">Your Shopping Cart</h2>

        <div className="cart-container">
          {cart.map((item, index) => (
            <div className="cart-card" key={index}>
              <div className="cart-image-wrapper">
                <img src={item.image} alt={item.name} className="cart-image" />
                {item.sale && (
                  <span className="cart-sale-tag">-{item.discount}</span>
                )}
                {item.bestSeller && (
                  <span className="cart-badge">Best Seller</span>
                )}
              </div>

              <div className="cart-info">
                <h3 className="cart-name">{item.name}</h3>
                <p className={`cart-stock ${item.stock <= 0 ? "out" : "in"}`}>
                  {item.stock <= 0 ? "Out of Stock" : "In Stock"}
                </p>

                <div className="cart-price">
                  <span className="price-new">₹{item.price}</span>
                  {item.sale && (
                    <span className="price-old">₹{item.oldPrice}</span>
                  )}
                </div>

                <div className="cart-quantity">
                  <button>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </div>

                <div className="cart-subtotal">
                  Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  className="cart-remove"
                  onClick={() => dispatch(removeCart(item.name))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="clear-btn" onClick={() => dispatch(clearCart())}>
          <button>Clear Cart</button>
        </div>

        <div className="cart-total-bar">
          <h3>Total: ₹{total.toFixed(2)}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
