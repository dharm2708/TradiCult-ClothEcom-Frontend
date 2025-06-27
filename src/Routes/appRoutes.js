import React from "react";
import { lazy, Suspense } from "react";
import Login from "../Pages/Login";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import CONSTANTS from "../Constants/RouteConstants";
import Loader from "../components/Global/Loader";
const Cart = lazy(() => import("../Pages/Cart"));
const Product = lazy(() => import("../Pages/Products"));
const ScrollToTop = lazy(() => import("../components/Home Page/scrollToTop"));
const ProductPage = lazy(() => import("../Pages/ProductPage"));
const NOPAGEFOUND = lazy(() => import("../Pages/NoPageFound"));
const Category = lazy(() => import("../Pages/Category"));
const Register = lazy(() => import("../Pages/Register"));
const ForgetPass = lazy(() => import("../Pages/ForgetPass"));
const About = lazy(() => import("../Pages/About"));
const ContactUs = lazy(() => import("../Pages/ContactUs"));
const MainLayout = lazy(() => import("../Layout/MainLayout"));
const VerifyOtp = lazy(() => import("../Pages/VerifyOtp"));
const TermsConditions = lazy(() =>
  import("../components/Home Page/TermsConditions")
);
const PrivacyPolicy = lazy(() =>
  import("../components/Home Page/PrivacyPolicy")
);
const Home = lazy(() => import("../Pages/Home"));

const appRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={CONSTANTS.HOME} element={<MainLayout />}>
              <Route path={CONSTANTS.HOME} element={<Home />} />
              <Route path={CONSTANTS.ABOUT} element={<About />} />
              <Route path={CONSTANTS.CONTACT} element={<ContactUs />} />
              <Route path={CONSTANTS.TERMS} element={<TermsConditions />} />
              <Route path={CONSTANTS.POLICY} element={<PrivacyPolicy />} />
              <Route path={CONSTANTS.CATEGORY} element={<Category />} />
              <Route path={CONSTANTS.PRODUCTS} element={<ProductPage />} />
              <Route path={CONSTANTS.PRODUCT_DETAILS} element={<Product />} />
              <Route path={CONSTANTS.CART} element={<Cart />} />
            </Route>
            <Route path={CONSTANTS.LOGIN} element={<Login />} />
            <Route path={CONSTANTS.REGISTER} element={<Register />} />
            <Route path={CONSTANTS.FORGOTPASS} element={<ForgetPass />} />
            <Route path={CONSTANTS.VERIFY_OTP} element={<VerifyOtp />} />
            <Route path={CONSTANTS.NOPAGEFOUND} element={<NOPAGEFOUND />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default appRoutes;
