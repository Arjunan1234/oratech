import React, { useState } from "react";
import "./price.scss";
import PricingPlans from "./PricingPlans";

const Price = () => {
  const tabs = [
    { label: "Development Services" },
    { label: "Managed Services" },
  ];

  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="container priceContainer">
      <div className="offering">Our Offerings</div>
      <h3>Trusted by Businesses, Loved by Clients</h3>
      <p>
        We take pride in delivering technology solutions that truly make a
        difference. Our clients value our expertise, responsiveness, and
        dedication — and their stories say it best.
      </p>

      <div className="tab-switcher">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`tab-btn ${activeTab === idx ? "active" : ""}`}
            onClick={() => setActiveTab(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <PricingPlans />
    </section>
  );
};

export default Price;
