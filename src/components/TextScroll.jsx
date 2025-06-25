import React from "react";
import "../styles/TextScroll.css";

const TextScroll = () => {
  return (
    <div className="Banner-Wrapper">
      <div className="wrapper">
        <div className="text">
          <span className="banner-text">
            <b>Limited Time Offer:</b> Save up to <b>55%</b> on shopping today!
            Discover the <b>best</b> products at unbeatable prices!
          </span>
          <span className="banner-text">
            <b>Shop now:</b> Enjoy <b>exclusive discounts</b> on a wide range of
            items!
          </span>
        </div>
      </div>
    </div>
  );
};

export default TextScroll;
