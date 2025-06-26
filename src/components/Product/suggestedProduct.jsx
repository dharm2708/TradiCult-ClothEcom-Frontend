import React from "react";
import { categoriesKids } from "../../API/categoriesKids";
import { categoriesMan } from "../../API/categoriesMan";
import { categoriesWomen } from "../../API/categoriesWomen";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/productCard.css";
const SuggestedProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathParts = location.pathname.split("/");

  const categoryType = pathParts[2];
  const clothType = decodeURIComponent(pathParts[3]);
  const productName = decodeURIComponent(pathParts[4]);

  let categories = [];
  switch (categoryType) {
    case "men":
      categories = categoriesMan;
      break;
    case "women":
      categories = categoriesWomen;
      break;
    case "kids":
      categories = categoriesKids;
      break;
    default:
      categories = [];
  }

  const category = categories.find((cat) => cat.category === clothType);
  const product = category?.products.find((p) => p.name === productName);

  //Suggested Content
  const womenCat =
    categoryType !== "women"
      ? categoriesWomen.find((cat) => cat.category === category.category)
      : null;
  const kidsCat =
    categoryType !== "kids"
      ? categoriesKids.find((cat) => cat.category === category.category)
      : null;
  const manCat =
    categoryType !== "men"
      ? categoriesMan.find((cat) => cat.category === category.category)
      : null;

  // Click Handlers
  const handleClick = (type, category, name) => {
    navigate(`/category/${type}/${category}/${name}`);
  };

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <section className="suggested-content">
      <h1 className="suggest-title">Suggested Product</h1>
      <div className="product-grid">
        {categoryType !== "kids" &&
          kidsCat &&
          kidsCat.products &&
          kidsCat.products.map((product, index) => (
            <div key={`kids-${index}`} className="product-card-clean">
              <div
                className="product-img-wrapper"
                onClick={() =>
                  handleClick("kids", category.category, product.name)
                }
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
                <h2 className="product-name" style={{ textAlign: "center" }}>
                  {product.name}
                </h2>
                <p className="product-price" style={{ textAlign: "center" }}>
                  ₹{product.price}
                </p>
              </div>
            </div>
          ))}
        {categoryType !== "women" &&
          womenCat &&
          womenCat.products &&
          womenCat.products.map((product, index) => (
            <div key={`women-${index}`} className="product-card-clean">
              <div
                className="product-img-wrapper"
                onClick={() =>
                  handleClick("women", category.category, product.name)
                }
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
                <h2 className="product-name" style={{ textAlign: "center" }}>
                  {product.name}
                </h2>
                <p className="product-price" style={{ textAlign: "center" }}>
                  ₹{product.price}
                </p>
              </div>
            </div>
          ))}
        {categoryType !== "men" &&
          manCat &&
          manCat.products &&
          manCat.products.map((product, index) => (
            <div key={`men-${index}`} className="product-card-clean">
              <div
                className="product-img-wrapper"
                onClick={() =>
                  handleClick("men", category.category, product.name)
                }
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
                <h2 className="product-name" style={{ textAlign: "center" }}>
                  {product.name}
                </h2>
                <p className="product-price" style={{ textAlign: "center" }}>
                  ₹{product.price}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SuggestedProduct;
