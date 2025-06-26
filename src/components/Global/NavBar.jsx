import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../assets/images/Logo-main.png";
import CONSTANTS from "../../Constants/RouteConstants";
import SearchBar from "../Home Page/SearchBar";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleClick = (name) => {
    if (name === "cart") navigate("/cart");
    if (name === "profile") navigate("/profile");
  };
  return (
    <>
      <nav className="navbar-main">
        <div className="Logo" onClick={() => navigate(CONSTANTS.HOME)}>
          <img src={logo} alt="Logo" />
        </div>
        <div className="icon">
          {/* Search Bar */}
          <SearchBar />

          {/* Hamburger icon for mobile */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link
            to={CONSTANTS.HOME}
            className="links-a"
            style={isActive === "Home" ? { color: "#0097a7" } : {}}
            onClick={() => {
              setMenuOpen(false);
              setIsActive("Home");
            }}
          >
            Home
          </Link>
          <Link
            className="links-a"
            to={CONSTANTS.ABOUT}
            style={isActive === "About" ? { color: "#0097a7" } : {}}
            onClick={() => {
              setMenuOpen(false);
              setIsActive("About");
            }}
          >
            About
          </Link>
          <Link
            className="links-a"
            to={CONSTANTS.CONTACT}
            style={isActive === "Contact" ? { color: "#0097a7" } : {}}
            onClick={() => {
              setMenuOpen(false);
              setIsActive("Contact");
            }}
          >
            Contact Us
          </Link>
          <Link
            className="links-a"
            to={CONSTANTS.LOGIN}
            style={isActive === "Login" ? { color: "#0097a7" } : {}}
            onClick={() => {
              setMenuOpen(false);
              setIsActive("Login");
            }}
          >
            Login
          </Link>
        </div>
        <div className="icon-btn">
          <IoCartOutline className="btn-nav" onClick={() => handleClick("cart")} />
          <FiUser className="btn-nav" onClick={() => handleClick("profile")} />
        </div>
        {menuOpen && (
          <div className="overlay" onClick={() => setMenuOpen(false)} />
        )}
      </nav>
    </>
  );
};

export default Navbar;
