import React from "react";
import Carousel from "react-material-ui-carousel";

const Banner = () => {
  const data = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/prime/New_Benefits/Gaming/Prime_Gaming_HP_3000x1200._CB600093818_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Ref-3000x1200._CB598688702_.jpg",
    "https://m.media-amazon.com/images/I/61+q1Y7jngL._SX3000_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Travel/MonsoonOffers/Non-CBCC_Monsoon-offer-PC_Hero_3000x1200._CB598617707_.jpg",
    "https://m.media-amazon.com/images/I/81F61eXwlmL._SX3000_.jpg",

    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2023/Aug/GW/Latest_Styles-_PCnew._CB598690919_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/Local/PC_Hero_3000x1200_01._CB596236870_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/Sep/OneCard-2000/5._CB596196592_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/School_Friends/PC_Hero/3000x1200_V2._CB597192726_.jpg",
  ];

  return (
   <section className="max-w-[1500px]  h-auto mx-auto">
     <Carousel
      className="caraousol"
      autoPlay={true}
      animation="slide"
      indicators={false}
      duration={500}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style:{
            scale:"3",
            backgroundColor:"transparent",
            color:"black",
            borderRadius:0,
            height:"204px",
            marginTop: "-200px",
            width:"80px",
            
        }
      }}
    >
      {data.map((img, i) => {
        return (
          <div key={i}  className="w-full"  >
            <img src={img} alt="" className="md:w-[100vw] min-w-[1000px] " />
          </div>
        );
      })}
    </Carousel>
   </section>
  );
};

export default Banner;
