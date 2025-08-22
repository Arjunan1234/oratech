import React from "react";
import "./footer.scss";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { RxEnvelopeClosed } from "react-icons/rx";
import footerImage from "../../assets/images/footerImage.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const naviation = (route) => {
    navigate(route);
  };
  const handleLearnMore = () => {
    navigate("/");
    const targetSection = document.getElementById("services-section");
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="container footerContainer">
      <div className="footer-top">
        {/* Left - Logo & Description */}
        <div className="footer-about">
          <div className="footer-logo">
            <img src={footerImage} alt="Oratech Solution" />
          </div>
          <p>
            Empowering your digital journey with robust cloud infrastructure,
            DevOps expertise, and tailored IT solutions for modern businesses.
          </p>
          <div className="footer-contact">
            <p>
              <FiPhone /> +91 92207 75290
            </p>
            <p>
              <MdEmail /> info@oratechsolution.com
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => naviation("/")}>Home</li>
            <li onClick={() => naviation("/about")}>About Us</li>
            <li onClick={() => naviation("/services")}>Services</li>
            <li onClick={() => naviation("/internship")}>Internship</li>
            <li onClick={() => naviation("/contact")}>Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-links">
          <h4>Services</h4>
          <ul onClick={() => handleLearnMore()}>
            <li>Cloud Hosting</li>
            <li>Website Development</li>
            <li>Managed Services</li>
            <li>Consultancy</li>
            <li>DevOps</li>
            <li>Backup & Recovery</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyrights © 2025 Oratech Solution</p>
        <div className="social-icons">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <RxEnvelopeClosed />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
