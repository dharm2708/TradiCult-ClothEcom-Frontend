import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Global/NavBar";
import Footer from "../components/Global/Footer";
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
