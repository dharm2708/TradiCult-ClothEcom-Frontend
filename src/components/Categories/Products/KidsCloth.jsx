import { categoriesKids } from "../../../API/categoriesKids";
import "../../../styles/productCard.css";
import { useNavigate } from "react-router-dom";

const KidsCloth = ({ categoryId }) => {
  const navigate = useNavigate();
  const category = categoriesKids.find((cat) => cat.id !== categoryId);
  if (!category) return <h2>No Product Found</h2>;
  const handleClick = (category, name) => {
    navigate(`/category/kids/${category}/${name}`);
  };
  return (
    <>
      <div className="background-blob-wrapper">
        <div className="animated-blobs"></div>
        <section className="category-clean">
          <h1 className="category-title">{category.category}</h1>
          <div className="product-grid">
            {category.products.map((product, index) => (
              <div key={index} className="product-card-clean">
                <div
                  className="product-img-wrapper"
                  onClick={() => {
                    handleClick(category.category, product.name);
                  }}
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
    </>
  );
};

export default KidsCloth;
