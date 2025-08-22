// Services.js
import React, { useEffect, useRef, useState } from "react";
import cloud from "../../assets/images/cloud.png";
import web from "../../assets/images/websiteDev.png";
import manage from "../../assets/images/manageService.png";
import consultancy from "../../assets/images/consultancy.png";
import devops from "../../assets/images/Devops.png";
import backup from "../../assets/images/BackupRecovery.png";
import "./services.scss";
import tick1 from "../../assets/images/tick1.svg";

const sections = [
  {
    title: "Cloud Hosting",
    desc: "Experience reliable and scalable cloud hosting built to support websites, web apps, and digital platforms. Our infrastructure ensures high performance, uptime, and flexibility as you grow.",
    features: [
      "High availability",
      "Auto-scaling resources",
      "Uptime assurance",
      "Data backup management",
      "Performance monitoring",
    ],
    img: cloud,
  },
  {
    title: "Website Development",
    desc: "We build custom, responsive websites designed for speed, usability, and scalability. Crafted to deliver seamless user experiences and support your business growth.",
    features: [
      "Responsive design",
      "CMS or custom development",
      "SEO optimization",
      "UI/UX optimization",
      "Fast loading times",
    ],
    img: web,
  },
  {
    title: "Managed Services",
    desc: "Get proactive IT support and infrastructure monitoring to ensure smooth, uninterrupted operations. We handle performance, security, and maintenance—so you can focus on growth.",
    features: [
      "24/7 Monitoring",
      "Proactive support",
      "Performance optimization",
      "Incident management",
      "Resource planning",
    ],
    img: manage,
  },
  {
    title: "Consultancy",
    desc: "Expert IT consultancy to design, migrate, and optimize your cloud infrastructure with tailored solutions. We align your technology strategy with your business goals to drive growth and efficiency.",
    features: [
      "Cloud architecture design",
      "Migration planning",
      "Cost optimization",
      "Security advisory",
      "AWS integration",
    ],
    img: consultancy,
  },
  {
    title: "DevOps",
    desc: "Streamline development with automated workflows and continuous delivery pipelines. Implement infrastructure as code to ensure faster, reliable, and scalable deployments.",
    features: [
      "CI/CD implementation",
      "Infrastructure as code (IaC)",
      "Monitoring & alerting",
      "Containerization with Docker/Kubernetes",
    ],
    img: devops,
  },
  {
    title: "Backup & Recovery",
    desc: "Safeguard your business data with reliable, automated backup solutions designed for security and compliance.Achieve rapid disaster recovery and seamless continuity with minimal downtime.",
    features: [
      "Scheduled backup",
      "Cloud storage options",
      "Fast restore options",
      "Data encryption",
      "Real-time recovery",
    ],
    img: backup,
  },
];

function ServiceItem({ section, index }) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-title={section.title} // used for scroll detection
      className={`service-item ${isVisible ? "in-view" : ""} ${
        index % 2 === 0 ? "left" : "right"
      }`}
    >
      <img src={section.img} alt={section.title} className="service-image" />
      <div className="service-content">
        <h2 className="service-title">{section.title}</h2>
        <p className="service-desc">{section.desc}</p>
        <ul className="service-features">
          {section.features.map((feat) => (
            <li key={feat}>
              <img src={tick1} alt="" />
              {feat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ServicesData() {
  const [activeSection, setActiveSection] = useState("");
  const [showNavigation, setShowNavigation] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    // Observer for showing/hiding navigation based on header visibility
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Show navigation when header is out of view (not intersecting)
          setShowNavigation(!entry.isIntersecting);
        });
      },
      {
        threshold: 0.1, // Show nav when header is barely visible
        rootMargin: "0px 0px 0px 0px",
      }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    // Observer for tracking active section
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const title = entry.target.getAttribute("data-title");

          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveSection(title);
          }
        });
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    const items = document.querySelectorAll(".service-item");
    items.forEach((item) => sectionObserver.observe(item));

    return () => {
      headerObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const handleNavClick = (title) => {
    const element = document.querySelector(`[data-title='${title}']`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="services-container">
      <div ref={headerRef} className="services-header">
        <span className="services-badge">Our Services</span>
        <h1 className="services-title">
          Smart IT & Cloud Solutions That Drive Growth
        </h1>
        <p className="services-subtitle">
          At ORA Tech, we provide secure, scalable, and high-performance IT
          services to help your business run smarter. Whether you're a startup
          or an enterprise, our solutions are tailored to fit your goals.
        </p>
      </div>

      {showNavigation && (
        <nav className="services-nav">
          {sections.map((s) => (
            <button
              key={s.title}
              className={`nav-btn ${activeSection === s.title ? "active" : ""}`}
              onClick={() => handleNavClick(s.title)}
            >
              {s.title}
            </button>
          ))}
        </nav>
      )}

      <div className="services-list">
        {sections.map((section, idx) => (
          <ServiceItem key={section.title} section={section} index={idx} />
        ))}
      </div>
    </div>
  );
}

export default ServicesData;
