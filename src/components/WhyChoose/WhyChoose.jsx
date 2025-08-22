// OraTechBanner.jsx
import React from "react";
import whyChoose from "../../assets/images/whyChoose.svg";
import tick from "../../assets/images/tick.svg";
import "./whyChoose.scss";
import Button from "../Button/Button";

const benefits = [
  "Proven expertise in IT, Cloud, and DevOps solutions",
  "Scalable services for startups to large enterprises",
  "Enterprise-grade security & data protection",
  "Agile support with fast response times",
  "Transparent pricing with flexible plans",
  "Client-first approach with tailored solutions",
];

const WhyChoose = () => {
  return (
    <section className="container whyChooseContainer">
      <div className=" ora-tech-banner">
        <div className="ora-tech-left">
          <img src={whyChoose} alt="Why Choose ORA Tech?" />
        </div>
        <div className="ora-tech-right">
          <ul className="ora-tech-list">
            {benefits.map((benefit, idx) => (
              <li key={idx}>
                <span className="checkmark">
                  <img src={tick} alt="Tick" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
          <Button title="Get Started with ORA Tech" />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
