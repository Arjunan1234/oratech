import React from "react";
import TestimonialSlider from "../components/TestimonialSlider/TestimonialSlider";
import ContactSection from "../components/ContactSection/ContactSection";
import ContactUs from "../components/ContactUs/ContactUs";
import InternshipCards from "../components/InternshipCards/InternshipCards";
import Services from "./Services";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import AboutUs from "../components/AboutUs/AboutUs";
import Price from "../components/Price/Price";
import Header from "../components/Header/Header";
import Marquee from "../components/Marquee/Marquee";
import OurService from "../components/OurService/OurService";
import OurProducts from "../components/OurProducts/OurProducts";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Marquee />
      <OurService />
      <OurProducts />
      <TestimonialSlider />
      <Price />
    </div>
  );
};

export default Home;
