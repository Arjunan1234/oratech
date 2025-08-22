import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import "./contactSection.scss";

import contact from "../../assets/images/contact.png";
import contactBack from "../../assets/images/contactback.png";

const ContactSection = () => {
  return (
    <div className="contact-section">
      {/* Header */}
      <div className="headerContact">
        <span className="contact-badge">Contact Us</span>
        <h1 className="title">Get in Touch with Us</h1>
        <p className="subtitle">
          We'd love to hear from you! Whether it's about a reservation,
          feedback, or any inquiries, please use the form below to send us a
          message.
        </p>
      </div>

      {/* Content Cards */}
      <div className="content-cards">
        {/* Team Image Card */}
        <div className="team-card">
          <img src={contact} alt="" />
        </div>

        {/* Contact Info Card */}
        <div
          className="contact-info-card"
          style={{ backgroundImage: `url(${contactBack})` }}
        >
          <h2 className="contact-info-title">Contact Info</h2>

          <div className="contact-details">
            <div className="contact-item">
              <MapPin className="contact-icon" size={40} />
              <span>293, Western Marg Saiduajab, New Delhi, 110030</span>
            </div>

            <div className="contact-item">
              <Phone className="contact-icon" size={40} />
              <span>+91 92207 75290</span>
            </div>

            <div className="contact-item">
              <Mail className="contact-icon" size={40} />
              <span>Info@Oratechsolution.Com</span>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-link facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-link instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-link twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
