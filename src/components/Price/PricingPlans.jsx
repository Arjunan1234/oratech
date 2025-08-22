import React from "react";
import { useNavigate } from "react-router-dom";
import "./pricePlans.scss";
import tick from "../../assets/images/tick.svg";

const plans = [
  {
    title: "Basic",
    price: 9,
    description:
      "Essential monitoring and support for small teams getting started.",
    features: [
      "16/7 System Monitoring",
      "On-Call Support",
      "Basic Security Scanning",
      "Cost Optimization Suggestions",
    ],
    popular: false,
  },
  {
    title: "Standard",
    price: 15,
    description:
      "Comprehensive package for growing teams needing full-time support.",
    features: [
      "24/7 System Monitoring",
      "Priority On-Call Support",
      "Advanced Security Scanning",
      "Cost Optimization Reports",
      "New Feature Implementation Assistance",
    ],
    popular: true,
  },
  {
    title: "Premium",
    price: 19,
    description:
      "Complete solution for enterprises with proactive management and strategy.",
    features: [
      "24/7 System Monitoring with Alerts",
      "Dedicated Support Manager",
      "Full Security Audits",
      "Automated Cost Optimization",
      "New Feature Implementation & Consulting",
    ],
    popular: false,
  },
];

const PricingPlans = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/contact");
  };

  return (
    <div className="pricing-container">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`pricing-card${plan.popular ? " popular" : ""}`}
        >
          {plan.popular && <div className="badge">Most Popular</div>}
          <h2 className="plan-title">{plan.title}</h2>
          <p className="description">{plan.description}</p>
          <div className="price">
            <span className="currency">$</span>
            <p className="amount">{plan.price}</p>/mo
          </div>
          <button
            className={`get-started ${plan.popular ? "extra-class" : ""}`}
            onClick={handleNavigate}
          >
            Get Started
          </button>

          <div className="features">
            <h3>What's Included</h3>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <img src={tick} className="checkmark" alt="tick" /> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
