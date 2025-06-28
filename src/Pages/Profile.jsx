import React from "react";
import { Link } from "react-router-dom";
import "../styles/profile.css";
const Profile = () => {
  return (
    <section>
      <div className="dasboard">
        <Link to="/">Dashboard</Link>
        <Link to="/">My Orders</Link>
        <Link to="/">Address</Link>
        <Link to="/">More Details</Link>
        <Link to="/">Logout</Link>
      </div>
    </section>
  );
};

export default Profile;
