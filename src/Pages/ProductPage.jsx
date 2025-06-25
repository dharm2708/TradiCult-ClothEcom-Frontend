import React from "react";
import { useLocation } from "react-router-dom";
import MenCloth from "../components/MenCloth";
import WomenCloth from "../components/WomenCloth";
import KidsCloth from "../components/KidsCloth";

const ProductPage = () => {
  const location = useLocation();

  // Get category and ID from URL path
  const pathParts = location.pathname.split("/");
  const categoryName = pathParts[2]; // men/women/kids
  const categoryId = parseInt(pathParts[3]); // id as number

  const renderCategory = () => {
    switch (categoryName) {
      case "men":
        return <MenCloth categoryId={categoryId} />;
      case "women":
        return <WomenCloth categoryId={categoryId} />;
      case "kids":
        return <KidsCloth categoryId={categoryId} />;
      default:
        return <h2>Category not found</h2>;
    }
  };

  return <div>{renderCategory()}</div>;
};

export default ProductPage;
