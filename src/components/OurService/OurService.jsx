import React from "react";
import "./ourService.scss";
import Button from "../Button/Button";
import ServicesGrid from "../ServiceGrid/ServiceGrid";
import { useNavigate } from "react-router-dom";

const OurService = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/services");
    window.scrollTo(0, 0);
  };

  return (
    <section className="container ourServiceContainer " id="services-section">
      <div className="service">Our Services</div>
      <div className="content">
        <h3>Smart IT & Cloud Solutions That Drive Growth</h3>
        <p>
          At ORA Tech, we provide secure, scalable, and high-performance IT
          services to help your business run smarter. Whether you're a startup
          or an enterprise, our solutions are tailored to fit your goals.
        </p>
      </div>
      <div className="learnMorebutton">
        <Button title="Learn More" onClick={handleRedirect} />
      </div>
      <ServicesGrid />
    </section>
  );
};

export default OurService;
