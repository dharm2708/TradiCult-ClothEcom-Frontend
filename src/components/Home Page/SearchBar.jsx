import React from "react";
import "../../styles/searchBar.css";
import { useState } from "react";

const SearchBar = () => {
  return (
    <>
      <div className="search-bar-container">
        <div className="search-input-wrapper">
          <input type="text" placeholder="Search..." />
        </div>
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="searchBarIcon"
        >
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="#171717"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 22L20 20"
            stroke="#171717"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* {isOpen && <div className="overlay" />} */}
      </div>
    </>
  );
};

export default SearchBar;
