import React, { useState } from "react";
import "./contactUs.scss";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";

import send from "../../assets/images/send.svg";
import mapbutton from "../../assets/images/map.svg";
import FadeUp from "../FadeUp/FadeUp";
import MapIframe from "../MapComponent/MapIframe";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);

      const scriptURL =
        "https://script.google.com/macros/s/AKfycbwmYFyZ0qCnzZIradspRZHNW6rAl5YZm_sLVDFzHq7-rJi22kZfcix9iVB29EbmvFSH/exec";
      const payload = {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      };

      const formBody = new URLSearchParams(payload).toString();

      try {
        const response = await fetch(scriptURL, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formBody,
        });

        if (response.ok) {
          toast.success("Message sent successfully!");
          setFormData({ fullName: "", phone: "", email: "", message: "" });
        } else {
          toast.error("Failed to send message.");
        }
      } catch (error) {
        console.error("Error sending data:", error);
        alert("Something went wrong!");
      } finally {
        setLoading(false);
      }
    }
  };

  const isFormValid = () => {
    return (
      formData.fullName.trim() &&
      formData.phone.trim() &&
      formData.email.trim() &&
      formData.message.trim()
    );
  };

  const handleDirectionClick = () => {
    const googleMapsUrl = "https://maps.app.goo.gl/HW4XG2Hju2Af67SD6";
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <section className="contactSection container">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
      />

      <div className="contactContainer">
        <div className="mapContainer">
          <MapIframe />
          <button className="directionButton" onClick={handleDirectionClick}>
            Get Direction <img src={mapbutton} alt="" />
          </button>
        </div>

        <form className="contactForm" onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          <Input
            label="Phone Number"
            name="phone"
            placeholder="Enter your mobile number"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            type="tel"
          />
          <Input
            label="Email Address"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            type="email"
          />
          <TextArea
            label="Message"
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            type="text"
          />

          <button
            type="submit"
            className="sendButton"
            disabled={!isFormValid() || loading}
            style={{
              opacity: !isFormValid() || loading ? 0.6 : 1,
              cursor: !isFormValid() || loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Sending..." : "Send Message"} <img src={send} alt="" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
