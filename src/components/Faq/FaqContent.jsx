import React from "react";
import "./faq.scss";
import FAQAccordion from "./FAQAccordion";

const FaqContent = () => {
  return (
    <section className="container faqContainer">
      <div className="faq">FAQs</div>
      <h3>Answers That Make Things Simple</h3>
      <p>
        We're here to help you make informed decisions. From setup to security,
        billing to support — find clear, honest answers to the most common
        questions our clients ask us every day.
      </p>
      <FAQAccordion />
    </section>
  );
};

export default FaqContent;
