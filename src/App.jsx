import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/ContactUs";
// import EmptyCart from "./pages/EmptyCart";
// import SingleItem from "./pages/SingleItem";

function App() {
  const homeRef = useRef();

  const scrollToContact = () => {
    if (window.location.pathname !== "/") {
      // If not on the home page, navigate to home and then scroll
      window.location.href = "/#contact";
    } else {
      // If on the home page, scroll directly
      homeRef.current?.scrollToContact();
    }
  };

  return (
    <>
      <Navbar scrollToContact={scrollToContact} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home ref={homeRef} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/cart" element={<EmptyCart />} /> */}
        {/* <Route path="/single-item" element={<SingleItem />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
