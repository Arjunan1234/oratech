import React from "react";
import ContactSection from "../components/ContactSection/ContactSection";
import ContactUs from "../components/ContactUs/ContactUs";
import InternshipCards from "../components/InternshipCards/InternshipCards";
import Services from "./Services";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import AboutUs from "../components/AboutUs/AboutUs";
import TestimonialSlider from "../components/TestimonialSlider/TestimonialSlider";
import Price from "../components/Price/Price";
import OurProducts from "../components/OurProducts/OurProducts";

const About = () => {
  return (
    <div>
      <AboutUs />
      <WhyChoose />
      <TestimonialSlider />
      <OurProducts />
    </div>
  );
};

export default About;
