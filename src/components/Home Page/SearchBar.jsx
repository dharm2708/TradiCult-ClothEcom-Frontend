import React, { useState, useEffect, useRef } from "react";
import "../../styles/navbar.css";

const SearchBar = () => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const searchRef = useRef();

  // Close mobile search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsMobileSearchOpen(false);
      }
    };

    if (isMobileSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileSearchOpen]);

  return (
    <div className="search-bar-container" ref={searchRef}>
      {/* Desktop Search */}
      <div className="search-input-wrapper desktop">
        <input type="text" placeholder="Search..." />
      </div>

      {/* Search Icon (always visible) */}
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="searchBarIcon"
        onClick={() => setIsMobileSearchOpen((prev) => !prev)}
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

      {/* Mobile Search Bar (appears below navbar) */}
      <div className={`mobile-search ${isMobileSearchOpen ? "active" : ""}`}>
        <div className="search-input-wrapper">
          <input type="text" placeholder="Search..." autoFocus />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
