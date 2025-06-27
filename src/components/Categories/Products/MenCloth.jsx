import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../../styles/productCard.css";
import { IoChevronBack } from "react-icons/io5";

const MenCloth = ({ categoryId }) => {
  const { products } = useSelector((state) => state.productsData);
  const navigate = useNavigate();

  const menCategories = products.men || [];
  const category = menCategories.find((cat) => cat.id === categoryId);

  if (!category) return <h2>Category not found</h2>;

  const handleClick = (categoryName, productName) => {
    navigate(`/category/men/${categoryName}/${productName}`);
  };
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
        onClick={handleClickBack}
      >
        <IoChevronBack
          style={{ fontSize: "2rem", cursor: "pointer", display: "flex" }}
        />
        Back
      </span>
      <section className="category-clean">
        <h1 className="category-title">{category.category}</h1>
        <div className="product-grid">
          {category.products.map((product, index) => (
            <div key={index} className="product-card-clean">
              <div
                className="product-img-wrapper"
                onClick={() => handleClick(category.category, product.name)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />
                {product.sale && <span className="tag-badge sale">Sale</span>}
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
  );
};

export default MenCloth;
