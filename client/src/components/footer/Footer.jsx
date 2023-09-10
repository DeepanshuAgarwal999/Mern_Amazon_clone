import React, { useEffect } from "react";
import logo from "../../images/amazon_logo.png";
import { BsGlobe } from "react-icons/bs";
const Footer = () => {
  const year = new Date().getFullYear();

  const ftop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <section className="w-full  text-white mt-4 overflow-hidden ">
        <button
          onClick={() => ftop()}
          className="w-full block hover:opacity-90  ease-in bg-[#37475A] text-center text-white text-xs py-5 font-medium"
        >
          Back to top
        </button>
      </section>
      <main className="w-full bg-[#232F3E]  text-white border-b border-gray-600 overflow-hidden">
        <section className="w-[900px] mx-auto flex justify-between py-12 ">
          <ul className="text-[13px] flex flex-col gap-y-2 shrink-0">
            <li className="font-bold text-base">Get to Know Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
          <ul className="text-[13px] flex flex-col gap-y-2">
            <li className="font-bold text-[16px]">Connect with Us</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
          <ul className="text-[13px] flex flex-col gap-y-2">
            <li className="font-bold text-base">Make Money with Us</li>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Protect and Build Your Brand</li>
            <li>Amazon Global Selling</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchant</li>
          </ul>
          <ul className="text-[13px] flex flex-col gap-y-2">
            <li className="font-bold text-base">Let Us Help You</li>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Help</li>
          </ul>
        </section>
      </main>

      <div className="w-full bg-[#232F3E] h-500px] text-white whitespace-nowrap overflow-hidden">
        <section className="py-6">
          <figure className="flex justify-between w-[260px] h-[70px] mx-auto items-center py-2">
            <div>
              <img src={logo} className="w-[100px] inline " alt="" />
            </div>
            <div className="border flex items-center px-2 gap-1">
              <BsGlobe />
              <select
                name=""
                id=""
                className="bg-transparent text-xs outline-none py-2"
              >
                <option value="">English</option>
              </select>
            </div>
          </figure>
          <div className="w-[900px] mx-auto">
            <ul className="flex flex-wrap justify-normal gap-2  text-xs">
              <li>Australia</li>
              <li>Brazil</li>
              <li>Canada</li>
              <li>China</li>
              <li>France</li>
              <li>Germany</li>
              <li>Italy</li>
              <li>Japan</li>
              <li>Mexico</li>
              <li>Netherlands</li>
              <li>Poland</li>
              <li>Singapore</li>
              <li>Spain</li>
              <li>Turkey</li>
              <li>United Arab Emirates</li>
            </ul>
            <div className="mx-auto w-[210px]">
              <ul className="flex justify-evenly text-xs">
                <li>United Kingdom</li>
                <li>United States</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-[#131A22] text-white w-full overflow-hidden ">
        <main className="py-5  w-[1000px] mx-auto ">
          <div className="grid gap-x-20 grid-cols-5 text-[11px] gap-y-3 p-2 text-[#999] ">
            <ul>
              <ul className="hover:underline">
                <li className=" text-white leading-[10px]">AbeBooks</li>
                <li className="leading-[10px]">Books, art</li>
                <li>& collectibles</li>
              </ul>
              <ul className="hover:underline">
                <li className="mt-[20px]  text-white leading-[10px]">
                  Shopbop
                </li>
                <li className="leading-[10px]">Designer</li>
                <li>Fashion Brands</li>
              </ul>
            </ul>
            <ul>
              <ul className="hover:underline">
                <li className=" text-white leading-[10px]">
                  Amazon Web Services
                </li>
                <li className="leading-[10px]">Scalable Cloud</li>
                <li>Computing Services</li>
              </ul>

              <ul className="hover:underline">
                <li className="mt-[20px]  text-white leading-[10px]">
                  Amazon Business
                </li>
                <li className="leading-[10px]">Everything For</li>
                <li>Your Business</li>
              </ul>
            </ul>
            <ul>
              <ul className="hover:underline">
                <li className=" text-white leading-[10px]">Audible</li>
                <li className="leading-[10px]">Download</li>
                <li>Audio Books</li>
              </ul>

              <ul className="hover:underline">
                <li className="mt-[20px]  text-white leading-[10px]">
                  Prime Now
                </li>
                <li className="leading-[10px]">2-Hour Delivery</li>
                <li>on Everyday Items</li>
              </ul>
            </ul>
            <ul>
              <ul className="hover:underline">
                <li className=" text-white leading-[10px]">DPReview</li>
                <li className="leading-[10px]">Digital</li>{" "}
                <li className="">Photography</li>
              </ul>
              <ul className="hover:underline">
                <li className="mt-[20px] text-white leading-[10px]">
                  Amazon Prime Music
                </li>
                <li className=" w-[200px] leading-[12px]">
                  100 million songs, ad-free Over 15 million podcast episodes
                </li>
              </ul>
            </ul>
            <ul className="hover:underline ml-20 w-[200px]">
              <li className=" text-white leading-[10px]">IMDb</li>
              <li className="leading-[10px]">Movies, TV</li>
              <li>& Celebrities</li>
            </ul>
          </div>
        </main>
        <div className="text-center text-xs bg-[#131A22]  py-5">
          <h1 className="text-[#DDD]">
            Conditions of Use & Sale &nbsp; &nbsp; Privacy Notice &nbsp; &nbsp;
            Interest-Based Ads
          </h1>
          <p>© 1996-{year}, Amazon.com, Inc. or its affiliates</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
