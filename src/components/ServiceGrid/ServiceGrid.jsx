import React from "react";
import { useNavigate } from "react-router-dom";
import "./servicesGrid.scss";
import arrow from "../../assets/images/arrow.svg";

const services = [
  {
    icon: "☁️",
    title: "Cloud Hosting",
    description:
      "Reliable and scalable cloud infrastructure to power your websites and applications.",
  },
  {
    icon: "🌐",
    title: "Website Development",
    description:
      "Custom, responsive websites built for performance, usability, and growth.",
  },
  {
    icon: "🛠️",
    title: "Managed Services",
    description:
      "Proactive IT support and infrastructure management to keep your business running smoothly.",
  },
  {
    icon: "💼",
    title: "Consultancy",
    description:
      "Expert IT guidance to align your tech strategy with your business goals.",
  },
  {
    icon: "⚙️",
    title: "DevOps",
    description:
      "Accelerate development with automated workflows, CI/CD pipelines, and infrastructure-as-code.",
  },
  {
    icon: "🔒",
    title: "Backup & Recovery",
    description:
      "Secure data protection solutions with automated backups and rapid disaster recovery.",
  },
];

const ServicesGrid = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Navigate to contact page
    navigate("/contact");
  };

  return (
    <div className="servicesContainerGrid">
      {services.map(({ icon, title, description }, idx) => (
        <div
          key={idx}
          className="serviceCard"
          onClick={handleCardClick}
          style={{ cursor: "pointer" }}
        >
          <span className="serviceIcon">{icon}</span>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="arrow">
            <div className="arrowWhite">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
