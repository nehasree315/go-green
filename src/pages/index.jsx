import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import NavbarComponent from "../components/navbar/Navbar";
import Home from "./home/Home";
import Order from "./order/Order";
import Shop from "./shop/Shop";
import About from "./about/About";

function MainRouter() {
  const location = useLocation();

  return (
    <>
      <NavbarComponent />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default MainRouter;
