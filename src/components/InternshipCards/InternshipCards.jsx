import React from "react";
import {
  Cloud,
  GitBranch,
  Code,
  Brain,
  Users,
  Clock,
  Globe,
  Award,
} from "lucide-react";
import "./internshipCards.scss";
import cloud from "../../assets/images/cloud.svg";
import devops from "../../assets/images/devops.svg";
import fullstack from "../../assets/images/fullstack.svg";
import aiml from "../../assets/images/aiml.svg";

import expert from "../../assets/images/expert.svg";
import clock from "../../assets/images/clock.svg";
import world from "../../assets/images/world.svg";
import achieve from "../../assets/images/achieve.svg";

import tick1 from "../../assets/images/tick1.svg";
import Button from "../Button/Button";

const InternshipCards = () => {
  const programs = [
    {
      id: 1,
      title: "Cloud Infrastructure",
      description:
        "Hands-on experience with cloud computing and infrastructure management",
      icon: cloud,
      price: "4,999",
      features: [
        "AWS/Azure/GCP Hands-on Projects",
        "Infrastructure as Code Practice",
        "Container Orchestration Experience",
        "Real-world Cloud Security Implementation",
      ],
    },
    {
      id: 2,
      title: "DevOps",
      description: "Practical experience with DevOps tools and practices",
      icon: devops,
      price: "6,999",
      features: [
        "CI/CD Pipeline Development",
        "Infrastructure Automation Projects",
        "Scripting & Programming Practice",
        "Monitoring & Alerting Systems",
      ],
    },
    {
      id: 3,
      title: "Full Stack",
      description: "End-to-end web development with modern technologies",
      icon: fullstack,
      price: "7,999",
      features: [
        "Frontend & Backend Development",
        "Database Design & Management",
        "API Development & Integration",
        "Deployment Practices",
      ],
    },
    {
      id: 4,
      title: "AI/ML",
      description:
        "Machine learning and artificial intelligence implementation",
      icon: aiml,
      price: "14,999",
      features: [
        "Machine Learning Algorithms",
        "Infrastructure as Code Practice",
        "Data Preprocessing & Analysis",
        "Model Deployment & Production",
      ],
    },
  ];

  const features = [
    { icon: expert, title: "Expert Mentors" },
    { icon: clock, title: "2 months Duration" },
    { icon: world, title: "Online Mode" },
    { icon: achieve, title: "Industry Certification" },
  ];

  return (
    <div className="internship-container">
      <div className="background-lines"></div>

      <header className="headerIntern">
        <div className="adf">AWS Cloud Engineer Internship</div>
        <h1 className="title">Professional Internship Programs</h1>
        <p className="subtitle">
          Gain hands-on experience with our industry-leading internship programs
          <br />
          mentored by experts with 8+ years of experience
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <img src={feature.icon} alt="" />
              <span className="feature-text">{feature.title}</span>
            </div>
          ))}
        </div>
      </header>

      <div className="programs-grid">
        {programs.map((program) => (
          <div key={program.id} className="program-card">
            <img src={program.icon} alt="" />

            <h3 className="card-title">{program.title}</h3>
            <p className="card-description">{program.description}</p>

            <div className="card-features">
              <div className="feature-row">
                <Users size={16} />
                <span>8+ Years Expert Mentor</span>
              </div>
              <div className="feature-row">
                <Clock size={16} />
                <span>2 Months Duration</span>
              </div>
              <div className="feature-row">
                <Globe size={16} />
                <span>Online Mode</span>
              </div>
              <div className="feature-row">
                <Award size={16} />
                <span>Industry Certification</span>
              </div>
            </div>

            <div className="what-youll-learn">
              <h4>What You'll Learn:</h4>
              <ul className="learning-list">
                {program.features.map((feature, index) => (
                  <li key={index}>
                    <img src={tick1} alt="" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-footer">
              <div className="price">{program.price}</div>
              <Button title="Apply for Internship" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipCards;
