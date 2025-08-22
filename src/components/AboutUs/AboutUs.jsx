// import React, { useState, useEffect } from "react";
// import "./about.scss";
// import missionImg from "../../assets/images/mission.png";
// import visionImg from "../../assets/images/vision.png";
// import valuesImg from "../../assets/images/values.png";
// import Button from "../Button/Button";

// // custom hook for scroll-reveal
// const useScrollReveal = (selector) => {
//   useEffect(() => {
//     const elements = document.querySelectorAll(selector);
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, [selector]);
// };

// const AboutUs = () => {
//   const [activeImage, setActiveImage] = useState(0);

//   useScrollReveal(".scroll-reveal");

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const triggerHeight = 300;

//       if (scrollY < triggerHeight) {
//         setActiveImage(0);
//       } else if (scrollY < triggerHeight * 2) {
//         setActiveImage(1);
//       } else {
//         setActiveImage(2);
//       }
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="about-us">
//       {/* Section Heading */}
//       <div className="about-header scroll-reveal">
//         <span className="tag">About Us</span>
//         <h1>Driving Digital Growth with Purpose and Innovation</h1>
//         <p>
//           ORA Tech Solutions is a team of creative tech professionals focused on
//           building smart, scalable digital solutions. We blend design,
//           development, and cloud expertise to help businesses grow with
//           confidence.
//         </p>
//       </div>

//       <div className="about-content">
//         {/* Left Column */}
//         <div className="about-left">
//           <h2 className="scroll-reveal">
//             Shaping the Future with Smart Digital Solutions
//           </h2>
//           <p className="scroll-reveal">
//             Purpose-led, tech-driven — discover the spirit behind ORA Tech.
//           </p>
//           <Button
//             title="Join Our Journey"
//             className="journey-btn scroll-reveal"
//           />

//           {/* Content Cards */}
//           <div className="content-cards">
//             <div
//               className={`content-card scroll-reveal ${
//                 activeImage === 0 ? "active" : ""
//               }`}
//             >
//               <h3>🎯 Our Mission</h3>
//               <p>
//                 We deliver smart, scalable digital solutions that help
//                 businesses grow, making technology simple and innovation
//                 accessible.
//               </p>
//             </div>

//             <div
//               className={`content-card scroll-reveal ${
//                 activeImage === 1 ? "active" : ""
//               }`}
//             >
//               <h3>🌍 Our Vision</h3>
//               <p>
//                 To be a trusted digital partner, empowering businesses with
//                 future-ready design, cloud, and tech solutions.
//               </p>
//             </div>

//             <div
//               className={`content-card scroll-reveal ${
//                 activeImage === 2 ? "active" : ""
//               }`}
//             >
//               <h3>💡 Our Core Values</h3>
//               <p>
//                 We believe in innovation, transparency, teamwork, and a
//                 client-first approach to deliver meaningful and lasting digital
//                 solutions.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Images */}
//         <div className="about-right">
//           <div className="image-container">
//             <img
//               src={missionImg}
//               alt="Our Mission"
//               className={`mission-img scroll-reveal ${
//                 activeImage === 0 ? "active" : ""
//               }`}
//             />
//             <img
//               src={visionImg}
//               alt="Our Vision"
//               className={`vision-img scroll-reveal ${
//                 activeImage === 1 ? "active" : ""
//               }`}
//             />
//             <img
//               src={valuesImg}
//               alt="Our Core Values"
//               className={`values-img scroll-reveal ${
//                 activeImage === 2 ? "active" : ""
//               }`}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;


import React, { useState, useEffect, useRef } from "react";
import "./about.scss";
import missionImg from "../../assets/images/mission.png";
import visionImg from "../../assets/images/vision.png";
import valuesImg from "../../assets/images/values.png";
import Button from "../Button/Button";

const useScrollReveal = (selector) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
};

const AboutUs = () => {
  const [activeImage, setActiveImage] = useState(0);
  const cardRefs = useRef([]);

  useScrollReveal(".scroll-reveal");

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if card is in middle of viewport
        if (rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2) {
          setActiveImage(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="about-us">
      {/* Section Heading */}
      <div className="about-header scroll-reveal">
        <span className="tag">About Us</span>
        <h1>Driving Digital Growth with Purpose and Innovation</h1>
        <p>
          ORA Tech Solutions is a team of creative tech professionals focused on
          building smart, scalable digital solutions. We blend design,
          development, and cloud expertise to help businesses grow with
          confidence.
        </p>
      </div>

      <div className="about-content">
        {/* Left Column */}
        <div className="about-left">
          <h2 className="scroll-reveal">
            Shaping the Future with Smart Digital Solutions
          </h2>
          <p className="scroll-reveal">
            Purpose-led, tech-driven — discover the spirit behind ORA Tech.
          </p>
          <Button
            title="Join Our Journey"
            className="journey-btn scroll-reveal"
          />

          {/* Content Cards */}
          <div className="content-cards">
            {[
              {
                title: "🎯 Our Mission",
                text: "We deliver smart, scalable digital solutions that help businesses grow, making technology simple and innovation accessible.",
              },
              {
                title: "🌍 Our Vision",
                text: "To be a trusted digital partner, empowering businesses with future-ready design, cloud, and tech solutions.",
              },
              {
                title: "💡 Our Core Values",
                text: "We believe in innovation, transparency, teamwork, and a client-first approach to deliver meaningful and lasting digital solutions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`content-card scroll-reveal ${
                  activeImage === index ? "active" : ""
                }`}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Images */}
        <div className="about-right">
          <div className="image-container">
            <img
              src={missionImg}
              alt="Our Mission"
              className={`mission-img ${activeImage === 0 ? "active" : ""}`}
            />
            <img
              src={visionImg}
              alt="Our Vision"
              className={`vision-img ${activeImage === 1 ? "active" : ""}`}
            />
            <img
              src={valuesImg}
              alt="Our Core Values"
              className={`values-img ${activeImage === 2 ? "active" : ""}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
