import React from "react";
import CONSTANTS from "../../Constants/RouteConstants";
import "../../styles/footer.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo-main.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <footer className="footer">
        <section className="flex">
          <div className="logo" onClick={() => navigate(CONSTANTS.HOME)}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="box">
            <Link to={CONSTANTS.HOME}>
              <span>Home</span>
            </Link>
            <Link to={CONSTANTS.ABOUT}>
              <span>About</span>
            </Link>
            <Link to={CONSTANTS.CONTACT}>
              <span>Contact-us</span>
            </Link>
          </div>
          <div className="box">
            <Link to={CONSTANTS.TERMS}>
              <span>Terms & Conditions</span>
            </Link>
            <Link to={CONSTANTS.POLICY}>
              <span>Privacy Policy</span>
            </Link>
          </div>
          <div className="box">
            <a href="tel:1234567890">
              <i className="fas fa-phone"></i>
              <span>+91 6355006862</span>
            </a>
            <a href="tel:1112223333">
              <i className="fa-solid fa-blender-phone"></i>
              <span>+1800 190 112255</span>
            </a>
            <a href="https://workspace.google.com/intl/en-US/gmail/">
              <i className="fas fa-envelope"></i>
              <span>tradiCult@gmail.com</span>
            </a>
            <a href="https://www.google.com/maps/@22.1625752,71.6682601,20z?entry=ttu&g_ep=EgoyMDI1MDYwOC4wIKXMDSoASAFQAw%3D%3D">
              <i className="fas fa-map-marker-alt"></i>
              <span>Botad, Gujarat-364710</span>
            </a>
          </div>
        </section>
        <div className="credit">
          &copy; copyright @ {new Date().getFullYear()} by{" "}
          <span>TradiCult.CO</span> | All Rights Reserved!
          <div className="box-icon">
            <Link to={CONSTANTS.CONTACT}>
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to={CONSTANTS.CONTACT}>
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to={CONSTANTS.CONTACT}>
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to={CONSTANTS.CONTACT}>
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
