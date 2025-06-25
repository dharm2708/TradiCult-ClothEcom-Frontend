import React from "react";
import "../styles/filterButtons.css";
import CategoryMens from "../assets/images/Category-mens.png";
const FilterButtons = ({ filterItem, filterCategories }) => {
  return (
    <>
      <div className="filter-container">
        <div className="btn-group">
          {filterCategories.map((item) => {
            return (
              <div className="">
                {/* <img src={CategoryMens} alt="" /> */}
                <button
                  className="btn-group__item"
                  onClick={() => filterItem(item)}
                  key={item}
                >
                  {item}
                </button>
              </div>
            );
          })}
          <button
            className="btn-group__item"
            onClick={() => filterItem("All")}
            key="all"
          >
            All
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterButtons;
