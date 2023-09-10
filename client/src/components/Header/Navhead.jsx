import React, { useEffect, useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import Drawer from "@mui/material/Drawer";
import Rightheader from "./Rightheader";

const Navhead = () => {

  const [drawer, setDrawer] = useState(false);


  // let count=0;
  const handleOpen = () => {
    setDrawer(true);
    
  };
 
  const handleClose = () => {
    setDrawer(false);

  };


  // console.log(drawer);
  return (
    <header className="bg-slate-800 text-white w-full mt-[61px]  ">
      <section className=" flex items-center py-1 px-6 gap-5 overflow-hidden">
        <div className="flex items-center gap-1 cursor-pointer ">
          <HiMiniBars3
            className="text-[20px] scale-125  inline "
            onClick={handleOpen}
          />
          <Drawer open={drawer} onClose={handleClose}>
            <Rightheader Logclose={handleClose} />
          </Drawer>
          <p className="text-lg font-semibold">All</p>
        </div>
        <div className="w-full">
          <ul className="flex text-sm justify-evenly items-center gap-x-4 w-[1750px]">
            <li>Fresh</li>
            <li>Amazon minitv</li>
            <li>Sell</li>
            <li>Gift Cards</li>
            <li>Buy Again</li>
            <li>Baby</li>
            <li>
              <select name="" id="" className="bg-transparent">
                <option value="" className="bg-transparent">
                  Browsing Hisory
                </option>
              </select>
            </li>
            <li>Grocery & Gourmet Foods</li>
            <li>Subscribe & Save</li>
            <li>Pet Supplies</li>
            <li>Health</li>
            <li> Household & Personal Care </li>
            <li>Toys & games</li>
            <li className="xl:block hidden">Coupons</li>
            <li className="2xl:block hidden">Car & Motorbikes</li>
          </ul>
        </div>
      </section>
    </header>
  );
};

export default Navhead;
