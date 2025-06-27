import tshirt from "../../assets/Cat/Women's/tshirt.svg";
import bra from "../../assets/Cat/Women's/bra.svg";
import dress from "../../assets/Cat/Women's/dress.svg";
import ethnicSets from "../../assets/Cat/Women's/ethnic-sets.svg";
import jeans from "../../assets/Cat/Women's/jeans.svg";
import jumpSuit from "../../assets/Cat/Women's/jump-suit.svg";
import leggings from "../../assets/Cat/Women's/leggings.svg";
import lehnga from "../../assets/Cat/Women's/lehnga.svg";
import saree from "../../assets/Cat/Women's/saree.svg";
import shorts from "../../assets/Cat/Women's/shorts.svg";
import skirts from "../../assets/Cat/Women's/skirts.svg";
import sleepware from "../../assets/Cat/Women's/sleepware.svg";
import sportsBra from "../../assets/Cat/Women's/sports-bra.svg";
import top from "../../assets/Cat/Women's/top.svg";
import underwear from "../../assets/Cat/Women's/underwear.svg";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

const WomenCategories = [
  {
    id: 1,
    name: "T-Shirts Women",
    icon: tshirt,
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
    name: "Jeans",
    icon: jeans,
    description: "Timeless denim built for comfort and flair.",
  },
  {
    id: 4,
    name: "Leggings",
    icon: leggings,
    description: "Stretchy essentials for all-day ease.",
  },
  {
    id: 5,
    name: "Lehnga",
    icon: lehnga,
    description: "Graceful ethnic wear for festive vibes.",
  },
  {
    id: 6,
    name: "Top",
    icon: top,
    description: "Trendy tops to elevate everyday fashion.",
  },
  {
    id: 7,
    name: "SleepWare",
    icon: sleepware,
    description: "Cozy and soft wear for restful nights.",
  },
  {
    id: 8,
    name: "Skirts",
    icon: skirts,
    description: "Feminine and flowy—ideal for any season.",
  },
  {
    id: 9,
    name: "Shhorts",
    icon: shorts,
    description: "Breezy bottoms perfect for warm days.",
  },
  {
    id: 10,
    name: "Saree",
    icon: saree,
    description: "Iconic drapes for timeless tradition.",
  },
  {
    id: 11,
    name: "Jump Suits",
    icon: jumpSuit,
    description: "Effortless one-piece elegance and ease.",
  },
  {
    id: 12,
    name: "Ethnic Sets",
    icon: ethnicSets,
    description: "Complete traditional outfits with flair.",
  },
];

const CategoryWomen = () => {
  const navigate = useNavigate();
  const handleClickBack = () => {
    return navigate(-1);
  };
  const handleProductClick = (id) => {
    navigate(`/category/women/${id}`);
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
        <h1 className="men-categories-heading">Women's Categories</h1>
        <div className="men-categories-grid">
          {WomenCategories.map((cat, index) => (
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

export default CategoryWomen;
