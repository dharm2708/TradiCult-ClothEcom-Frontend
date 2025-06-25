import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CONSTANTS from "../Constants/RouteConstants";
import Logo1 from "../assets/images/Logo-main.png";

const ForgetPass = () => {
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
            <h1 className="card--title">Forget Password</h1>
            <form className="card--form">
              <label htmlFor="email"> Email Id: </label>
              <input type="email" placeholder="Email" className="card--input" />
              <br />
              <button
                type="submit"
                className="card--button"
                onClick={() => Navigate("/verify-otp")}
              >
                Send Reset Link
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPass;
