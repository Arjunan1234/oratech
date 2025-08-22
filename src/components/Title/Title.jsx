import React from "react";
import "./Title.scss";
import { FaRegClock, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Title = () => (
  <div className="container title-bar">
    <div className="title-info">
      <FaRegClock className="title-icon" />
      <span>Office Hours: 10AM - 8PM</span>
    </div>
    <div className="title-contact">
      <div>
        <FaPhoneAlt className="title-icon" />
        <a href="tel:+919220775290">+91 92207 75290</a>
      </div>
      <div>
        <FaEnvelope className="title-icon" />
        <a href="mailto:info@oratechsolution.com">info@oratechsolution.com</a>
      </div>
    </div>
  </div>
);

export default Title;
