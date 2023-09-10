import React from "react";
import Avatar from "@mui/material/Avatar";
import { LoginContext } from "../context/ContextProvider";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { yellow } from "@mui/material/colors";
// import { DrawerContext } from "../context/DrawerProvider";
const Rightheader = ({ Logclose }) => {
  const { account, setAccount } = useContext(LoginContext);
  //   const{close,setClose}=useContext(DrawerContext);

  return (
    <div className="w-[400px]">
      <main className="bg-slate-900 overflow-hidden relative">
        <button
          className="text-white text-2xl scale-[1.7] px-1 pt-2 absolute right-1 rotate-45"
          onClick={() => Logclose()}
        >
          +
        </button>
        <div className=" flex justify-center items-center whitespace-nowrap text-ellipsis h-[150px] w-[400px] ">
          {account ? (
            <div className="flex  w-full  items-center justify-center gap-x-4">
              <Avatar sx={{ bgcolor: yellow[700], width: 56, height: 56 }}>
                {account.fname[0].toUpperCase()}
              </Avatar>
              <h1 className="text-white">
                <p className="italic inline">hello,</p> {account.fname}
              </h1>
            </div>
          ) : (
            <div className="flex text-lg w-full  items-center justify-center gap-x-4">
              <Avatar
                sx={{ bgcolor: yellow[700], width: 56, height: 56 }}
              ></Avatar>
              <h1 className="text-white">
                <p className="italic inline">hello,</p> Sign in to continue
              </h1>
            </div>
          )}
        </div>
      </main>
      <div className="flex  flex-col gap-y-10 mt-6">
        <ul className="flex flex-col  border-b text-sm  border-black/30">
          <h1 className="text-xl font-semibold mb-2">
            <NavLink className="px-10 ">Trending</NavLink>
          </h1>
          <li className="hover:bg-gray-200 ease-in-out duration-125 py-4">
            <NavLink className="px-10 >Best Sellers">Best Sellers</NavLink>
          </li>
          <li className="hover:bg-gray-200 ease-in-out duration-125 py-4 ">
            <NavLink className="px-10 ">New Releases</NavLink>
          </li>
          <li className="hover:bg-gray-200 ease-in-out duration-125 py-4">
            <NavLink className="px-10 ">Movers & Shakers</NavLink>
          </li>
        </ul>
        <ul className="flex flex-col  border-b text-sm  border-black/30">
          <h1 className="text-xl font-semibold mb-2">
            <NavLink className="px-10 ">Shop By Category</NavLink>
          </h1>
          <li className="hover:bg-gray-200 ease-in-out duration-125 py-4">
            <NavLink className="px-10 >Best Sellers">Mobiles,Computers</NavLink>
          </li>
          <li className="hover:bg-gray-200 ease-in-out duration-125 py-4 ">
            <NavLink className="px-10 ">TV,Appliances,Electronics</NavLink>
          </li>
          <li className="hover:bg-gray-200 ease-in-out duration-125 py-4">
            <NavLink className="px-10 ">Men's Fashion</NavLink>
          </li>
          <li className="hover:bg-gray-200 ease-in-out duration-125 py-4">
            <NavLink className="px-10 ">Women's Fashion</NavLink>
          </li>
        </ul>
        <ul className="flex flex-col  text-sm  ">
          <h1 className="text-xl font-semibold mb-2">
            <NavLink className="px-10 ">Help & Settings</NavLink>
          </h1>
          <li className="hover:bg-gray-200 ease-in-out duration-125 py-4">
            {account ? (
              <NavLink to="/logout" className="px-10">
                Sign out
              </NavLink>
            ) : (
              <NavLink to="/login" className="px-10">
                Sign in
              </NavLink>
            )}
          </li>
          <li className="hover:bg-gray-200 ease-in-out duration-125 py-4">
            {account ? (
              <NavLink to="/buynow" className="px-10">
                Your orders
              </NavLink>
            ) : (
              <NavLink to="/" className="px-10">
                Your orders
              </NavLink>
            )}
          </li>
          <li className="hover:bg-gray-200 ease-in-out duration-125 py-4 ">
            <NavLink className="px-10 ">Coustomer Service</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightheader;
