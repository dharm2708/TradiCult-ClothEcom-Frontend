import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../assets/images/Logo-main.png";
import CONSTANTS from "../../Constants/RouteConstants";
import SearchBar from "../Home Page/SearchBar";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (name) => {
    if (name === "cart") navigate("/cart");
    if (name === "profile") navigate("/profile");
  };

  return (
    <nav className="navbar-main">
      <div className="Logo" onClick={() => navigate(CONSTANTS.HOME)}>
        <img src={logo} alt="Logo" />
      </div>

      <div className="icon">
        <SearchBar />

        {/* Hamburger for mobile */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </div>
      </div>

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}

      {menuOpen && (
        <div className="mobile-sidebar">
          <nav className="mobile-nav-links">
            {["Home", "About", "Contact", "Login"].map((item) => (
              <Link
                key={item}
                to={CONSTANTS[item.toUpperCase()]}
                className={`links-a ${
                  location.pathname === CONSTANTS[item.toUpperCase()]
                    ? "active"
                    : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <div className="nav-links desktop-only">
        {["Home", "About", "Contact", "Login"].map((item) => (
          <Link
            key={item}
            to={CONSTANTS[item.toUpperCase()]}
            className={`links-a ${
              location.pathname === CONSTANTS[item.toUpperCase()]
                ? "active"
                : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="icon-btn">
        <IoCartOutline
          className="btn-nav"
          onClick={() => handleClick("cart")}
        />
        <p>(0)</p>
        <FiUser className="btn-nav" onClick={() => handleClick("profile")} />
      </div>
    </nav>
  );
};

export default Navbar;
