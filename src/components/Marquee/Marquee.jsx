import React from "react";
import "./marquee.scss";

import audi from "../../assets/images/audi.svg";
import coca from "../../assets/images/coca.svg";
import disnep from "../../assets/images/disnep.svg";
import google from "../../assets/images/google.svg";
import master from "../../assets/images/master.svg";
import visa from "../../assets/images/visa.svg";

const images = [audi, coca, disnep, google, master, visa];

const Marquee = () => {
  return (
    <section className="container marqueeContainer">
      <h3>
        Businesses Across India and Beyond Rely on ORA Tech's Scalable IT
        Solutions
      </h3>
      <div className="marqueeWrapper">
        <div className="marqueeContent">
          {/* First set of images */}
          {images.map((imgSrc, index) => (
            <img
              key={`first-${index}`}
              src={imgSrc}
              alt={`brand-logo-${index}`}
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((imgSrc, index) => (
            <img
              key={`second-${index}`}
              src={imgSrc}
              alt={`brand-logo-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
