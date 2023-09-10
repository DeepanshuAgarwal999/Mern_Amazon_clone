import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {  NavLink } from "react-router-dom";
// import { products } from './productdata';
const Slide = ({ title, products }) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
 
  return (
    <div className="max-w-[1500px] mx-auto overflow-hidden">
      <section className="p-4 bg-white my-4 ">
        <div className="w-full flex items-center gap-x-6 border-b border-gray-400">
          <h1 className="text-2xl font-bold py-5">{title}</h1>
          <a href="#" className="text-blue-400 ">
            see all deals
          </a>
        </div>
        <Carousel
          
          responsive={responsive}
          infinite={true}
          draggable={true}
          swipeable={true}
          showDots={false}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >
          {products?.map((e) => {
            return (
              <NavLink to={`/getproductsone/${e.id}`} key={e.id}>
                <div className="p-5 flex flex-col items-center gap-y-4 mt-[10px] cursor-pointer">
                  <div>
                    <img
                      src={e.url}
                      alt=""
                      className="w-[150px] h-[150px] object-contain"
                    />
                  </div>
                  <p>{e.title.shortTitle}</p>
                  <p>{e.discount}</p>
                  <p>{e.tagline}</p>
                </div>
              </NavLink>
            );
          })}
        </Carousel>
      </section>
    </div>
  );
};

export default Slide;
