import { useEffect } from "react";
import Layout from "../layout/Layout";
import Banner from "./Banner";
import Slide from "./Slide";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/action";
import SlideSection from "./SlideSection";

const MainComp = () => {
  const { products } = useSelector(state => state.GetProductsdata);
  // console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="bg-[#E3E6E6] overflow-x-hidden">
      <Layout>
        <section className="bg-[#E3E6E6]">
          <div className="relative">
            <Banner />
            <div className="absolute  top-[42%] -left-2  z-50">
              <SlideSection />
            </div>
          </div>
          <main className="flex sm:flex-row flex-col gap-10 items-center max-w-[1500px] mt-[100px] overflow-hidden  mx-auto">
            {/* left-section */}
            <div className="max-w-5xl">
              <Slide products={products} />
            </div>
            {/* right-section */}
            <div className=" w-[440px] h-[450px] bg-white  p-4 mt-[20px] mx-auto ">
              <h1 className="text-center text-2xl font-bold">
                Festive latest launches
              </h1>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg"
                alt="rightimg"
                className="py-4 mx-auto max-w-max"
              />
              <a
                href="#"
                to=""
                className="text-blue-400 text-center block font-medium text-2xl"
              >
                See more
              </a>
            </div>
          </main>
          <div className="py-6 m-10">
            <img
              src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
              alt=""
              className="mx-auto"
            />
          </div>
          <Slide title="Today' Offer" products={products} />
          <Slide title="Best Seller" products={products} />
          {/* <Slide title="Up to 80% off" /> */}
          <Slide title="Recommendation" products={products} />
        </section>
      </Layout>
    </div>
  );
};

export default MainComp;
