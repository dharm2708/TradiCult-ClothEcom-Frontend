import "../styles/style.css";
import { Link, useNavigate } from "react-router-dom";
import CONSTANTS from "../Constants/RouteConstants";
import Logo1 from "../assets/images/Logo-main.png";
const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <Logo /> */}
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
            <h1 className="card--title">Welcome Back</h1>
            {/* <p className='card--text'>Please Enter valid credenrials</p> */}
            <form className="card--form">
              <label htmlFor="email"> Email Id: </label>
              <input type="email" placeholder="Email" className="card--input" />
              <br />
              <label htmlFor="pass"> Password: </label>
              <input
                type="password"
                placeholder="Password"
                className="card--pass"
              />
              <p className="card--forgot">
                <Link to={CONSTANTS.FORGOTPASS} className="text--forgot">
                  Forget Password?
                </Link>
              </p>
              <button type="submit" className="card--button">
                Login
              </button>
              <p className="card--text">
                Don't have an account?{" "}
                <Link to={CONSTANTS.REGISTER}>Create an account</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
