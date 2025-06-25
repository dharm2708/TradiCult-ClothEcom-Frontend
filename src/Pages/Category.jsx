import React from "react";
import { useLocation } from "react-router-dom";
import CategoryMen from "../components/CategoryMen";
import Home from "./Home";
import CategoryWomen from "../components/CategoryWomen ";
import CategoryKids from "../components/CategoryKids";

const Category = () => {
  const location = useLocation();

  const pathParts = location.pathname.split("/");
  const categoryId = pathParts[2];

  const renderCategory = () => {
    switch (categoryId) {
      case "men":
        return <CategoryMen />;
      case "women":
        return <CategoryWomen />;
      case "kids":
        return <CategoryKids />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <section>{renderCategory()}</section>
    </>
  );
};

export default Category;
