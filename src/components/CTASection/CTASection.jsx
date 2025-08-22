import React from "react";
import { useNavigate } from "react-router-dom";
import "./ctaSection.scss";

const CTASection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/contact");
  };

  return (
    <section className="container ctaSection">
      <div className="cta-section">
        <h2 className="cta-title">
          Ready to Elevate Your Tech Infrastructure?
        </h2>
        <p className="cta-description">
          Join businesses that trust ORA Tech for reliable cloud solutions,
          expert development, and round-the-clock support tailored to your
          needs.
        </p>
        <button className="cta-button" onClick={handleNavigate}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CTASection;
