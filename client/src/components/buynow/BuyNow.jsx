import { useEffect, useState } from "react";
import Emptycart from "../cart/Emptycart";
import Layout from "../layout/Layout";
import Option from "./Option";

const BuyNow = () => {
  const [cartdata, setCartdata] = useState("");
  let money = 0;
  const getdatabuy = async () => {
    try {
      const res = await fetch("/cartdetails", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();

      if (res.status !== 201 || !data) {
        console.log("error");
      } else {
        setCartdata(data.carts);
        // console.log(cartdata);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getdatabuy();
  }, []);
  return (
    <div className="bg-[#E3E6E6]">
      <Layout>
        <>
          {cartdata.length ? (
            <section className="w-full bg-[#E3E6E6] overflow-hidden relative ">
              <main className="flex md:flex-row flex-col  max-w-screen-[1600] gap-x-5 gap-y-10 p-8 items-center justify-around mx-auto">
                <div className="bg-white  p-4 rounded-[24px] min-w-[1000px] max-w-[1200px]">
                  <h1 className="text-5xl font-semibold py-2">Shopping cart</h1>
                  <a className="text-sky-400 text-xl py-2 block ">
                    Select all items
                  </a>
                  <h2 className="text-end font-bold text-2xl tracking-[2px] uppercase">
                    price
                  </h2>
                  <hr />
                  {cartdata.map((e, i) => {
                    // console.log(e)
                    //total amount
                    money = e.price.cost + money;
                    return (
                      <div key={i}>
                        <section className="flex my-10 py-2  ">
                          <figure className="flex items-center w-[180px] justify-center">
                            <img
                              src={e.url}
                              alt=""
                              className="mt-2 max-w-[180px] p-4  min-w-[140px]"
                            />
                          </figure>
                          <div className="flex justify-between w-[1000px] ">
                            <div className="px-10">
                              <h1 className="text-xl ">{e.title.longTitle}</h1>
                              <h1 className="pt-4 text-lg ">
                                {e.title.shortTitle}
                              </h1>
                              <p className="text-orange-600 py-2">
                                Usually dispatched in &nbsp;{Math.floor(Math.random() * 10)} days
                              </p>
                              <p className="py-2 font-semibold">{e.discount}</p>
                              <img
                                src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                                alt="img"
                                width={"100px"}
                              />
                              <div className="mt-[40px]">
                                <Option deleteData={e.id} get={getdatabuy} />
                              </div>
                            </div>
                            <div>
                              <span className="text-xl font-semibold ">
                                ${e.price.cost}.00
                              </span>
                            </div>
                          </div>
                        </section>
                        <hr />
                      </div>
                    );
                  })}

                  <hr />
                  <h3 className="text-3xl py-5 text-end ">
                    Subtotal ({cartdata.length} items):{" "}
                    <span className="font-semibold">${money}.00</span>
                  </h3>
                </div>

                <div className="w-[500px] self-start h-[400px] bg-white text-center px-4 py-12 rounded-[24px]">
                  <h1 className="text-sky-400 ">
                    Your oder is elgible for FREE Delivery
                  </h1>
                  <h2 className="text-[#0F1111]">
                    Select this option at checkout. Details
                  </h2>
                  <h3 className="text-3xl py-5 mt-4">
                    Subtotal ({cartdata.length} items):{" "}
                    <span className="font-semibold">${money}.00</span>
                  </h3>
                  <button className="bg-[#FFD814] w-[80%] mt-[16px] h-[38px]  hover:bg-[#F7CA00] rounded-[8px] ">
                    Proceed to Buy
                  </button>
                  <div className="border border-black py-4 text-2xl w-[400px] mx-auto mt-10">
                    EMI AVAILABLE
                  </div>
                </div>
              </main>
            </section>
          ) : (
            <Emptycart/>
          )}
        </>
      </Layout>
    </div>
  );
};

export default BuyNow;
