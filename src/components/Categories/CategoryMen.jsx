import React, { useState } from "react";
import "../../styles/categoris.css";
import tshirt from "../../assets/Cat/Men's/tshirt.svg";
import formal from "../../assets/Cat/Men's/formal.svg";
import hoodie from "../../assets/Cat/Men's/hoodie.svg";
import jacket from "../../assets/Cat/Men's/jacket.svg";
import jeans from "../../assets/Cat/Men's/jeans.svg";
import jogger from "../../assets/Cat/Men's/jogger.svg";
import kurta from "../../assets/Cat/Men's/kurta.svg";
import nehru from "../../assets/Cat/Men's/nehru jacket.svg";
import shirt from "../../assets/Cat/Men's/shirt.svg";
import shoes from "../../assets/Cat/Men's/shoes.svg";
import Shorts from "../../assets/Cat/Men's/Shorts.svg";
import sleepwear from "../../assets/Cat/Men's/sleepwear.svg";
import suits from "../../assets/Cat/Men's/suits.svg";
import sweater from "../../assets/Cat/Men's/sweater.svg";
import trousers from "../../assets/Cat/Men's/trousers.svg";
import underwear from "../../assets/Cat/Men's/underwear.svg";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const menCategories = [
  {
    id: 1,
    name: "T-Shirts",
    icon: tshirt,
    description: "Casual wear for everyday comfort.",
  },
  {
    id: 2,
    name: "Shirts",
    icon: shirt,
    description: "Formal and semi-formal shirts.",
  },
  {
    id: 3,
    name: "Jeans",
    icon: jeans,
    description: "Classic denims for a rugged style.",
  },
  {
    id: 4,
    name: "Trousers",
    icon: trousers,
    description: "Perfect fit for office or outings.",
  },
  {
    id: 5,
    name: "Joggers",
    icon: jogger,
    description: "Relaxed and sporty lower wear.",
  },
  {
    id: 6,
    name: "Shorts",
    icon: Shorts,
    description: "Beat the heat in style and comfort.",
  },
  {
    id: 7,
    name: "Blazers",
    icon: suits,
    description: "Sleek layering for formal occasions.",
  },
  {
    id: 8,
    name: "Jackets",
    icon: jacket,
    description: "Stylish outerwear for all seasons.",
  },
  {
    id: 9,
    name: "Hoodies",
    icon: hoodie,
    description: "Warm & trendy streetwear staples.",
  },
  {
    id: 10,
    name: "Sweaters",
    icon: sweater,
    description: "Knit comfort for the colder months.",
  },
  {
    id: 11,
    name: "Ethnic Wear",
    icon: kurta,
    description: "Traditional outfits for festivals.",
  },
  {
    id: 12,
    name: "Nehru Jackets",
    icon: nehru,
    description: "Classic Indian formal wear.",
  },
  {
    id: 13,
    name: "Innerwear",
    icon: underwear,
    description: "Soft and breathable essentials.",
  },
  {
    id: 14,
    name: "Sleepwear",
    icon: sleepwear,
    description: "Comfy sets for a peaceful night.",
  },
  {
    id: 15,
    name: "Footwear",
    icon: shoes,
    description: "Shoes, sandals & more for every fit.",
  },
  {
    id: 16,
    name: "Formal Wear",
    icon: formal,
    description: "Perfect attire for meetings & events.",
  },
];
const CategoryMen = () => {
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate(-1);
  };
  const handleProductClick = (id) => {
    navigate(`/category/men/${id}`);
  };
  return (
    <div className="background-blob-wrapper">
      <div className="animated-blobs"></div>
      <section className="men-categories-section">
        <IoChevronBack
          style={{ fontSize: "2rem", cursor: "pointer" }}
          onClick={handleClick}
        />
        <h1 className="men-categories-heading">Men's Categories</h1>
        <div className="men-categories-grid">
          {menCategories.map((cat, index) => (
            <div className="men-category-card-3d" key={index}>
              <div
                className="card-inner"
                onClick={() => handleProductClick(cat.id)}
              >
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

export default CategoryMen;
