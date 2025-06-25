import React from "react";
import CONSTANTS from "../Constants/RouteConstants";
import Logo1 from "../assets/images/Logo-main.png";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="card--main">
        <div className="card-container">
          <div className="card">
            <img
              src={Logo1}
              alt="logo1"
              onClick={() => {
                navigate(CONSTANTS.HOME);
              }}
            />
            <h1 className="card--title">Create an Account</h1>
            <form className="card--form">
              <label htmlFor="name"> Name: </label>
              <input
                type="text"
                placeholder="Full Name"
                className="card--input"
              />
              <br />
              <label htmlFor="email"> Email Id: </label>
              <input type="email" placeholder="Email" className="card--input" />
              <br />
              <label htmlFor="email"> Mobile No:- </label>
              <input
                type="text"
                placeholder="Mobile No"
                className="card--input"
              />
              <label htmlFor="pass"> Password: </label>
              <input
                type="password"
                placeholder="Password"
                className="card--input"
              />{" "}
              <br />
              <button type="submit" className="card--button">
                Register
              </button>
            </form>
            <p className="card--text">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
