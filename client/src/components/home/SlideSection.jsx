import React from "react";
import { NavLink } from "react-router-dom";

const SlideSection = () => {
  return (
    <section className="lg:w-[100vw] w-[1000px] px-2  mx-auto ">
      <div className="flex justify-center gap-x-5 mx-auto">
        <div className="w-[350px] h-[430px]  bg-white ">
          <h1 className="text-xl px-4 font-semibold pt-4">Keep shopping for</h1>
          <NavLink className="p-4 mt-2 block">
            <figure className="w-full bg-pink-50 ">
              <img
                src="https://m.media-amazon.com/images/I/41I0NtaJocL._MCnd_AC_.jpg"
                alt=""
                className="w-[180px] mix-blend-darken p-1 mx-auto"
              />
            </figure>
            <p className="text-sm py-2">laptops</p>
          </NavLink>
          <NavLink className="p-4 block">
            <figure className="w-full bg-pink-50 ">
              <img
                src="https://m.media-amazon.com/images/I/31na34LxwmL._MCnd_AC_.jpg"
                alt=""
                className="w-[130px] p-2 mix-blend-darken mx-auto"
              />
            </figure>
            <p className="text-sm py-2">Electric kettles</p>
          </NavLink>
        </div>
        <div className="w-[350px] h-[430px] bg-white">
          <h1 className="text-xl font-semibold pt-4 px-4">
            Pick up where you left off
          </h1>
          <main className="grid grid-cols-2 pt-4">
            <NavLink className="p-4 text-ellipsis whitespace-nowrap overflow-hidden">
              <figure className="w-full">
                <img
                  src="https://m.media-amazon.com/images/I/71NxKpg1NIL._AC_SY135_.jpg"
                  alt=""
                  className="w-[150px]  scale-110 mix-blend-darken  p-1 mx-auto"
                />
              </figure>
              <p className="text-xs py-2 ">Asus tuf gaming 2023</p>
            </NavLink>
            <NavLink className="p-4">
              <figure className="w-full py-2 block">
                <img
                  src="https://m.media-amazon.com/images/I/71vXD7cLZfL._AC_SY135_.jpg"
                  alt=""
                  className=" w-[170px] p-1 mix-blend-darken scale-125 mx-auto"
                />
              </figure>
              <p className="text-xs py-2 ">MSI Katana GF66 </p>
            </NavLink>
            <NavLink className="p-4">
              <figure className="w-full  ">
                <img
                  src="https://m.media-amazon.com/images/I/71o5s6rOJGL._AC_SY135_.jpg"
                  alt=""
                  className="w-[150px] mix-blend-darken py-1 scale-110 mx-auto"
                />
              </figure>
              <p className="text-xs py-2">Acer Nitro 5 12th </p>
            </NavLink>
            <NavLink className="p-4">
              <figure className="w-full ">
                <img
                  src="https://m.media-amazon.com/images/I/71ZxVXxFhAL._AC_SY135_.jpg"
                  alt=""
                  className="w-[180px] py-2 mix-blend-darken scale-110 mx-auto"
                />
              </figure>
              <p className="text-xs py-2">asus tuf gaming 15 </p>
            </NavLink>
          </main>
        </div>
        <div className="w-[350px] h-[430px] bg-white">
          <h1 className="text-xl font-semibold pt-4 px-4">
            Categories to explore
          </h1>
          <main className="mt-1 flex flex-col ">
            <div className="flex items-center w-full">
              <NavLink className="p-4 ">
                <figure className="w-full  ">
                  <img
                    src="https://m.media-amazon.com/images/I/415gV21fNCL._MCnd_AC_.jpg"
                    alt=""
                    className="max-w-[150px] scale-110 mix-blend-darken p-1 mx-auto"
                  />
                </figure>
                <p className="text-xs py-2">Tablets</p>
              </NavLink>
              <NavLink className="p-4">
                <figure className="w-full  ">
                  <img
                    src="https://m.media-amazon.com/images/I/51rzz4zoUBL._MCnd_AC_.jpg"
                    alt=""
                    className="w-[150px] p-1 scale-110 mix-blend-darken mx-auto"
                  />
                </figure>
                <p className="text-xs py-2">Laptop sleeves & slip... </p>
              </NavLink>
            </div>
            <div className="flex items-center -mt-4">
              <NavLink className="p-4 ">
                <figure className="w-full  ">
                  <img
                    src="https://m.media-amazon.com/images/I/51RIf1+p78L._MCnd_AC_.jpg"
                    alt=""
                    className="w-[150px] mix-blend-darken p-1 mx-auto"
                  />
                </figure>
                <p className="text-xs py-2">Posters </p>
              </NavLink>
              <NavLink className="p-4">
                <figure className="w-full bg-pink-50 ">
                  <img
                    src="https://m.media-amazon.com/images/I/51XOLkgr62L._MCnd_AC_.jpg"
                    alt=""
                    className="w-[150px] h-[140px] scale-110  p-1 mix-blend-darken mx-auto"
                  />
                </figure>
                <p className="text-xs py-2">laptop and skins </p>
              </NavLink>
            </div>
          </main>
        </div>
        <div className="w-[350px] bg-white h-[150px] xl:block hidden">
          <div className="flex justify-around w-full h-full  items-center">
            <div className="w-1/2 self-start py-4">
              <h1 className="text-xl font-semibold ">
                Get 50% off on Selling fee
              </h1>
              <NavLink className="block mt-2 text-[12px]  text-[#007185]">
                Become a Seller
              </NavLink>
            </div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/landing/ATF-imagery-card--V2-28-AUG-50._CB596983957_.jpg"
              alt="seller"
              className="w-[100px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideSection;
