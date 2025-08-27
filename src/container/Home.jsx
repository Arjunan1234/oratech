import React from "react";
import TestimonialSlider from "../components/TestimonialSlider/TestimonialSlider";

import Price from "../components/Price/Price";
import Marquee from "../components/Marquee/Marquee";
import OurService from "../components/OurService/OurService";
import OurProducts from "../components/OurProducts/OurProducts";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <Marquee /> */}
      <OurService />
      <OurProducts />
      <TestimonialSlider />
      <Price />
    </div>
  );
};

export default Home;
