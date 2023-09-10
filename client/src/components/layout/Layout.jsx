import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../Header/Navbar";
import Navhead from "../Header/Navhead";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect } from "react";
const Layout = ({ children }) => {
  const [data, setData] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, []);
  return (
    <div>
      {data ? (
        <>
          <Navbar />
          <Navhead />
          {children}
          <Footer />
        </>
      ) : (
        <div className="relative top-[50%] bg-white flex items-center h-screen">
          {/* <LinearProgress /> */}
          <div className="w-full text-center">
            <LinearProgress />
            <h2 className="py-5 text-3xl font-medium tracking-[1px]">
              Getting <span className="italic font-semibold"> Best</span> for you...
            </h2>
            <CircularProgress />
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
