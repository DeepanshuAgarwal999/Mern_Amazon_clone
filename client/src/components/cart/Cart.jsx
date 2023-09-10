import { useContext, useLayoutEffect, useState } from "react";
import { useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
const Cart = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);
  const { id } = useParams("");
  // console.log(id);
  const history=useNavigate();
  const [singledata, setSingledata] = useState([]);
  console.log(singledata);
  const getsingledata = async () => {
    const res = await fetch(`/getproductsone/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // console.log(data);
    if (res.status !== 201) {
      console.log("not valid id");
    } else {
      console.log("getdata");
      setSingledata(data);
    }
  };
  // add to cart
  const {account,setAccount}=useContext(LoginContext);
  const addTocart = async (id) => {
    const checkers = await fetch(`/addcart/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ singledata }),
      credentials: "include",
    });
    const data1 = await checkers.json();
    // console.log(data1);
    if (checkers.status == 401 || !data1) {
      console.log("user invalid");
    } else {
     toast.success("Item added in your cart", {
        position: "top-center",
        pauseOnHover: false,
      });
      setAccount(data1);
      history("/buynow")
      console.log(data1)
    }
  };

  useEffect(() => {
    getsingledata();
  }, []);

  return (
    <Layout>
      <section className="max-w-screen-2xl mx-auto">
        {singledata && Object.keys(singledata).length && (
          <main className="px-6 py-10 w-full flex md:flex-row flex-col gap-x-5 gap-y-14 mx-auto">
            <div className=" md:w-1/2  w-full items-center   flex flex-col gap-y-10 justify-center">
              <img
                src={singledata.url}
                className="w-[17vw] max-w-[400px] min-w-[250px] mx-auto"
                alt="img_cart"
              />
              <div className="flex w-full justify-center gap-5 mt-6  mx-auto">
                <button
                  className="bg-[#FFD814] hover:bg-[#F7CA00] duration-100 ease-in w-[200px] h-[40px] rounded-[100px]"
                  onClick={() => {
                    addTocart(singledata.id);
                  }}
                >
                  Add to cart
                </button>
                <ToastContainer/>
                <button className="bg-[#FFA41C] hover:bg-[#FA8901] duration-100 ease-in w-[200px] h-[40px] rounded-[100px]">
                  Buy Now
                </button>
              </div>
            </div>
            {/* right */}

            <div className="border  md:w-1/2 w-full border-gray-400 p-6">
              <h1 className="text-4xl font-bold leading-[50px]">
                {singledata.title.shortTitle}
              </h1>
              <h2 className="text-2xl border-b border-gray-400 font-semibold py-6">
                {singledata.title.longTitle}
              </h2>
              <p className="text-[#373e3e] leading-[40px] ">
                MRP : &nbsp;
                <span className="line-through">{singledata.price.mrp}</span>
              </p>
              <p className="text-[#0F1111] leading-[40px] ">
                {singledata.tagline} :&nbsp;
                <span className="text-red-800">₹{singledata.price.cost}</span>
              </p>
              <p className="text-[#0F1111] leading-[40px]">
                You save: &nbsp;
                <span className="text-red-800">
                  ₹{singledata.price.mrp}-{singledata.price.cost}(
                  {singledata.price.discount})
                </span>
              </p>
              <p className="text-red-800 leading-[50px] text-xl">
                Discount:
                <span className="capitalize text-black  font-semibold">
                  &nbsp; {singledata.discount}
                </span>
              </p>
              <p className="text-sky-500 text-lg leading-[60px]">
                Free delivery :{" "}
                <span className="text-black font-semibold">oct8-21</span>&nbsp;
                <a href="#" className="cursor-pointer">
                  Details
                </a>
              </p>
              <p className="text-[#0F1111] leading-[40px]">
                Fastest delivery : &nbsp;
                <span className="text-black text-xl font-semibold">
                  Tomorrow 11 am
                </span>
              </p>
              <p className="py-12 font-bold text-2xl">
                About the Item : &nbsp;
                <span className="text-base font-medium text-[#0F1111]">
                  {singledata.description}
                </span>
              </p>
            </div>
          </main>
        )}
      </section>
    </Layout>
  );
};

export default Cart;
