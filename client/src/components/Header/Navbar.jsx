import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ImSearch } from "react-icons/im";
import { HiOutlineLocationMarker } from "react-icons/hi";
import logo from "../../images/amazon_logo.png";
import flag from "../../images/united-states.png";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
import { useContext } from "react";
import arrow from "../../images/arrow.png";
import Badge from "@mui/material/Badge";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { useSelector } from "react-redux";
const Navbar = () => {
  const history = useNavigate();
  const { account, setAccount } = useContext(LoginContext);
  const [textw, setTextw] = useState("");
  const [liopen, setLiopen] = useState(true);

  const { products } = useSelector((state) => state.GetProductsdata);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getdetailValiduser = async () => {
    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    if (res.status !== 201) {
      console.log("error");
    } else {
      // console.log("data valid");
      setAccount(data);
    }
  };

  const logOutuser = async () => {
    const res2 = await fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const logoutdata = await res2.json();
    // console.log(logoutdata);
    if (res2.status !== 201 || !logoutdata) {
      console.log("error");
    } else {
      // console.log("data valid");
      toast.success("Logout Successfully", {
        position: "top-center",
        pauseOnHover: false,
      });
      setAccount(false);
      history("/");
    }
  };
  const getText = (items) => {
    setTextw(items);
    // console.log(textw);
    setLiopen(false);
  };
  useEffect(() => {
    getdetailValiduser();
  }, []);
  return (
    <>
      <div className="w-full fixed top-0 z-[999] mt-[-5px] ">
        <nav className=" bg-[#0F1111]  text-white min-w-max h-[66px]  sticky">
          <section className="w-full  px-2 ">
            <main className="flex gap-x-3 justify-between">
              <div className="flex  items-center gap-x-5 w-[300px] flex-shrink-0 flex-grow-0 ">
                <NavLink to="/">
                  <div className="">
                    <img
                      className="w-[125px] pt-1 h-[74px]  inline "
                      src={logo}
                      alt=""
                    />
                    <span className="-ml-3 text-xs font-medium">.in</span>
                  </div>
                </NavLink>
                <div className="flex-none">
                  {account ? (
                    <div className="">
                      <h1 className="ml-[14px] text-xs leading-[10px] text-gray-300">
                        &nbsp;Deliver to {account.fname}
                      </h1>
                      <h2 className="flex items-center">
                        <HiOutlineLocationMarker />
                        <span className="font-semibold text-sm">
                          &nbsp;india
                        </span>
                      </h2>
                    </div>
                  ) : (
                    <div className="  hover:border border p-2 hover:border-white border-transparent">
                      <h1 className="ml-[14px] text-xs leading-[1px] pt-1 text-gray-300">
                        &nbsp;Deliver to
                      </h1>
                      <p className="text-[14px] pt-1 font-semibold text-white flex items-center">
                        <HiOutlineLocationMarker />
                        Update location
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* center */}

              <div className="flex items-center px-1  w-[60%] focus:outline-yellow-500 ">
                <select
                  name=""
                  id=""
                  className="h-[42px] text-black  bg-[#F3F3F3] text-xs text-center focus:outline-yellow-500 rounded-l-[5px] border-r-2 w-[55px] active:opacity-75"
                >
                  <option value="">All</option>
                </select>
                <div className="flex flex-col relative w-full">
                  <div className="flex">
                    <input
                      type="text"
                      className=" h-[42px] text-black w-full p-2 placeholder:font-medium outline-yellow-500"
                      // value="gfgdfsg"
                      value={textw}
                      name="search"
                      onChange={(e) => getText(e.target.value)}
                      placeholder="Search Amazon.in"
                    />
                    <button className="text-center h-[42px] rounded-r-md bg-yellow-500 outline-yellow-500 w-[50px] flex items-center justify-center">
                      <ImSearch className="text-black scale-125 cursor-pointer outline-yellow-500" />
                    </button>
                  </div>
                  <div className="position absolute top-9 w-[99%]">
                    {textw && (
                      <List
                        hidden={liopen}
                        // style={{ marginTop: "70px", zIndex: "999" }}
                      >
                        {products
                          .filter((product) =>
                            product.title.longTitle
                              .toLowerCase()
                              .includes(textw.toLowerCase())
                          )
                          .map((product, i) => (
                            <ListItem
                              key={i}
                              style={{
                                backgroundColor: "white",
                                color: "black",
                              }}
                            >
                              <NavLink
                                to={`/getproductsone/${product.id}`}
                                onClick={() => setLiopen(true)}
                              >
                                {product.title.longTitle}
                              </NavLink>
                            </ListItem>
                          ))}
                      </List>
                    )}
                  </div>
                </div>

                {/*  search filter */}
              </div>

              {/* right */}

              <div className="flex items-center   justify-between w-[400px] ">
                <div className="flex items-center flex-none  border px-1 py-1 hover:border-white border-transparent">
                  <img src={flag} className="w-[24px]" alt="" />
                  <select
                    name=""
                    id=""
                    className="py-2 lg:w-[40px] md:w-[30px] bg-transparent font-medium text-sm"
                  >
                    <option value="" className="text-black">
                      En
                    </option>
                    <option value="" className="text-black">
                      hindi
                    </option>
                    <option value="" className="text-black">
                      Marathi
                    </option>
                  </select>
                </div>
                <ToastContainer />
                <div className=" border  py-1 px-1 hover:border-white border-transparent">
                  {account ? (
                    <div className="">
                      <main
                        className=" text-white cursor-pointer  "
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        <h1 className="text-xs italic">
                          Hello,&nbsp;{account.fname}
                        </h1>
                        <p className="text-xs text-white -mt-[2px] ">
                          Account & lists
                          <ArrowDropDownIcon />
                        </p>
                      </main>
                    </div>
                  ) : (
                    <>
                      <main
                        className=" text-white cursor-pointer "
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        <p className="text-xs text-white  ">
                          <h1 className="text-xs italic ">
                            Hello,
                            <NavLink to="/login" className="text-sm">
                              &nbsp;sign in
                            </NavLink>
                          </h1>
                          <span className="font-semibold block w-[120px]">
                            Account & lists
                            <ArrowDropDownIcon />
                          </span>
                        </p>
                      </main>
                      {/* <img src={downarrow} className="w-[20px] " alt="" /> */}
                    </>
                  )}
                </div>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  {account ? (
                    <MenuItem onClick={handleClose}>
                      <button onClick={logOutuser}>
                        <LogoutIcon style={{ fontSize: 18 }} />
                        &nbsp; Logout
                      </button>
                    </MenuItem>
                  ) : (
                    <MenuItem onClick={handleClose}>
                      <NavLink to="/login">sign in</NavLink>
                    </MenuItem>
                  )}
                </Menu>

                <div className="  border   leading-[1px] p-2 hover:border-white border-transparent">
                  <h1 className="text-xs tracking-tight ">Returns</h1>
                  <h2 className="text-[13px] text-sm w-[70px]  font-semibold ">
                    & Orders
                  </h2>
                </div>
                {account ? (
                  <NavLink
                    to="/buynow"
                    className="flex gap-x-2 items-center  border  py-2 hover:border-white border-transparent"
                  >
                    <div className="absolute top-[10px]  bg-yellow-600 rounded-[50%]  md:right-[2%] right-{1%]">
                      <h2 className="px-[10px] py-[2px]  font-semibold text-xs text-center">
                        {/* {account.carts.length} */}
                        <Badge badgeContent={account.carts.length}></Badge>
                      </h2>
                    </div>
                    <FaShoppingCart className="text-3xl" />
                    <h1 className="font-bold text-xl">cart</h1>
                  </NavLink>
                ) : (
                  <NavLink
                    to="/login"
                    className="flex gap-x-2 px-1 items-center realtive hover:border border py-3 hover:border-white border-transparent"
                  >
                    <div className="absolute top-[10px]  bg-yellow-600 rounded-[50%]  right-[2%]">
                      <h2 className="px-[10px] py-[2px] text-white font-semibold text-xs text-center">
                        {/* {account.carts.length} */}
                        <Badge badgeContent={"0"}></Badge>
                      </h2>
                    </div>
                    <FaShoppingCart className="text-2xl" />
                    <h1 className="font-bold text-xl">cart</h1>
                  </NavLink>
                )}
              </div>
            </main>
          </section>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
