import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Faq from "./components/faq/faq.jsx";
import CTASection from "./components/CTASection/CTASection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./container/Home.jsx";
import About from "./container/About.jsx";
import Services from "./container/Services.jsx";
import Works from "./container/Works.jsx";
import Internship from "./container/Internship.jsx";
import Contact from "./container/Contact.jsx";

import whatsapp from "../src/assets/images/whatsapp.webp";
import backtotop from "../src/assets/images/back.png";
import ScrollToTop from "./scroll.jsx";

const App = () => {
  const [showButton, setShowButton] = useState(false);

  // Show back-to-top button only after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Router>
        <ScrollToTop />
        <Title />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Faq />
        <CTASection />
        <Footer />

        {/* Floating Buttons (WhatsApp + Back to Top) */}
        <div
          style={{
            position: "fixed", // always fixed to viewport
            bottom: "20px",
            right: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            zIndex: 9999, // above all content
          }}
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/919876543210" // <-- replace with your number
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={whatsapp}
              alt="WhatsApp"
              style={{
                maxWidth: "80px",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </a>

          {/* Back to Top */}
          {showButton && (
            <img
              src={backtotop}
              alt="Back to Top"
              onClick={scrollToTop}
              style={{
                maxWidth: "65px",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          )}
        </div>
      </Router>
    </div>
  );
};

export default App;
