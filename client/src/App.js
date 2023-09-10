import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import BuyNow from "./components/buynow/BuyNow";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Header/Navbar";
import Navhead from "./components/Header/Navhead";
import MainComp from "./components/home/MainComp";
import Signup from "./components/signup_sign/Signup";
import Sign_in from "./components/signup_sign/Sign_in";
import PageNotFound from "./PageNotFound";
import LinearProgress from "@mui/material/LinearProgress";

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainComp />}></Route>
        <Route path="login" element={<Sign_in />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="/getproductsone/:id" element={<Cart />} />
        <Route path="buynow" element={<BuyNow />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
