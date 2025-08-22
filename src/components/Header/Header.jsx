import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import websiteLogo from "../../assets/images/websiteLogo.svg";
import "./header.scss";
import Button from "../Button/Button";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const handleGetStarted = () => {
    navigate("/contact");
    handleClose(); // close mobile drawer if open
  };

  return (
    <header className="header container">
      <img
        style={{ cursor: "pointer" }}
        src={websiteLogo}
        onClick={() => navigate("/")}
        alt="Website Logo"
        className="logo"
      />

      {/* Desktop Menu */}
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/internship"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Internship
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      {/* Get Started Button */}
      <Button onClick={handleGetStarted} />

      {/* Hamburger Icon (Mobile only) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" end onClick={handleClose}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleClose}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={handleClose}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/internship" onClick={handleClose}>
              Internship
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleClose}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Overlay for mobile drawer */}
      {isOpen && <div className="drawer-overlay" onClick={handleClose}></div>}
    </header>
  );
};

export default Header;
