
import "../styles/home.css";
import TextScroll from "../components/Home Page/TextScroll";
import ImageSlider from "../components/Home Page/ImageSlider";
import CatMen from "../assets/images/Category-mens.png";
import CatWomen from "../assets/images/Cat-Fe-Woman.png";
import CatKids from "../assets/images/Cat-Fe-Kids.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Home = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const handleClick = (name) => {
    let selectedId = 0;

    switch (name) {
      case "men":
        selectedId = "men";
        break;
      case "women":
        selectedId = "women";
        break;
      case "kids":
        selectedId = "kids";
        break;
      default:
        navigate("/");
        return;
    }

    setId(selectedId);
    navigate(`/category/${selectedId}`);
  };

  return (
    <>
      <div className="background-blob-wrapper">
        <div className="animated-blobs"></div>
        <TextScroll />
        <ImageSlider />
        <section className="elevated-categories">
          <h2 className="elevated-title">Elevate Your Style</h2>
          <div className="elevated-layout">
            {/* Left Featured Card */}
            <div
              className="feature-card large"
              onClick={() => handleClick("women")}
            >
              <img src={CatWomen} alt="Women" className="category-img" />
              <div className="card-content">
                <h3>Women</h3>
                <p>See All →</p>
              </div>
            </div>

            {/* Right Stacked Cards */}
            <div className="stacked-cards">
              <div
                className="feature-card small"
                onClick={() => handleClick("men")}
              >
                <img src={CatMen} alt="Men" className="category-img" />
                <div className="card-content">
                  <h3>Men</h3>
                  <p>See All →</p>
                </div>
              </div>
              <div
                className="feature-card small"
                onClick={() => handleClick("kids")}
              >
                <img src={CatKids} alt="Kids" className="category-img" />
                <div className="card-content">
                  <h3>Kids</h3>
                  <p>See All →</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
