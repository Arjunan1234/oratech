import React from "react";

import WhyChoose from "../components/WhyChoose/WhyChoose";
import AboutUs from "../components/AboutUs/AboutUs";
import TestimonialSlider from "../components/TestimonialSlider/TestimonialSlider";
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
