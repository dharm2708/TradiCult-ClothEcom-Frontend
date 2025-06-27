import tshirts from "../../assets/Cat/Kid's/tshirts.svg";
import dress from "../../assets/Cat/Kid's/dress.svg";
import frok from "../../assets/Cat/Kid's/frok.svg";
import jacket from "../../assets/Cat/Kid's/jacket.svg";
import jumpsuits from "../../assets/Cat/Kid's/jumpsuits.svg";
import kidsCoat from "../../assets/Cat/Kid's/kids-coat.svg";
import partyDress from "../../assets/Cat/Kid's/party-dress.svg";
import shorts from "../../assets/Cat/Kid's/shorts.svg";
import sleepwear from "../../assets/Cat/Kid's/sleepwear.svg";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

const KidsCategories = [
  {
    id: 1,
    name: "T-Shirts ",
    icon: tshirts,
    description: "Versatile tees for relaxed, stylish looks.",
  },
  {
    id: 2,
    name: "Dress",
    icon: dress,
    description: "Elegant and chic dresses for all occasions.",
  },
  {
    id: 3,
    name: "Frok",
    icon: frok,
    description: "Timeless denim built for comfort and flair.",
  },
  {
    id: 4,
    name: "Jacket",
    icon: jacket,
    description: "Stretchy essentials for all-day ease.",
  },
  {
    id: 5,
    name: "Jump Suits",
    icon: jumpsuits,
    description: "Graceful ethnic wear for festive vibes.",
  },
  {
    id: 6,
    name: "Kids Coat",
    icon: kidsCoat,
    description: "Trendy tops to elevate everyday fashion.",
  },
  {
    id: 7,
    name: "Sleep Wear",
    icon: sleepwear,
    description: "Cozy and soft wear for restful nights.",
  },
  {
    id: 8,
    name: "Party Dress",
    icon: partyDress,
    description: "Feminine and flowy—ideal for any season.",
  },
  {
    id: 9,
    name: "Shorts",
    icon: shorts,
    description: "Breezy bottoms perfect for warm days.",
  },
];
const CategoryKids = () => {
  const navigate = useNavigate();
  const handleClickBack = () => {
    return navigate(-1);
  };
  const handleProductClick = (id) => {
    navigate(`/category/kids/${id}`);
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
      <section className="men-categories-section">
        <h1 className="men-categories-heading">Kid's Categories</h1>
        <div className="men-categories-grid">
          {KidsCategories.map((cat, index) => (
            <div
              className="men-category-card-3d"
              key={index}
              onClick={() => handleProductClick(cat.id)}
            >
              <div className="card-inner">
                <img
                  src={cat.icon}
                  alt={cat.name}
                  className="men-category-icon-3d"
                />
                <div className="card-text">
                  <h3>{cat.name}</h3>
                  <p>{cat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryKids;
