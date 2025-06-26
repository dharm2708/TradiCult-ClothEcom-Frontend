import React, { useState } from "react";
import "../styles/cart.css";
import "../styles/categoris.css";
const initialCartItems = [
  {
    name: "Logo-Graphic Crew Neck Tee",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTEdZ38AB7lrZ_Qgob7vaZ9h8qr5yb1b4Xj3DBQqnM3VF4G6NlMu_Yex8RB2Ow7vTLCcfs867YsQvT1xlk6xVLJXcFP22ny_hB2gh22dHw72RFlKezt_pSrKg",
    price: 749,
    sale: true,
    oldPrice: 800,
    discount: "25%",
    bestSeller: true,
    stock: 40,
    quantity: 1,
  },
  {
    name: "Vintage Oversized Graphic Tee",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQzs6fnscWN4XRsMGbdwecpVCBDonwc6hgpxu78UdT6qu_q44dx_Ipn9HMwgtN8nd3MzPyZPPuy8gNwuVayhewd8IxBkQ0klnDKLHemtB8DMrkgjJVzhXr3",
    price: 899,
    sale: false,
    oldPrice: 800,
    discount: "25%",
    bestSeller: false,
    stock: 25,
    quantity: 1,
  },
  {
    name: "Striped V-Neck Tee",
    image: "https://images.meesho.com/images/products/375137834/75tbn_1200.jpg",
    price: 599,
    sale: true,
    oldPrice: 800,
    discount: "25%",
    bestSeller: false,
    stock: 0,
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const increment = (index) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrement = (index) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="background-blob-wrapper">
      <div className="animated-blobs"></div>
      <section className="cart-wrapper">
        <h2 className="cart-title">Your Shopping Cart</h2>

        <div className="cart-container">
          {cartItems.map((item, index) => (
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
                  <button onClick={() => decrement(index)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increment(index)}>+</button>
                </div>

                <div className="cart-subtotal">
                  Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  className="cart-remove"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
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
