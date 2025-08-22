import React from "react";
import Slider from "react-slick";
import "./testimonialCarousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    image: "/mnt/data/c93a4733-9cbc-4788-938c-5f0b9a4f33de.png",
    quote:
      "ORA Tech transformed the way we manage our cloud infrastructure. Their team is quick, reliable, and always ready to solve challenges before they grow.",
    name: "Priya Mehra",
    designation: "Head of IT, Zeon Networks",
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Another testimonial example to showcase carousel functionality.",
    name: "Jane Doe",
    designation: "CTO, Example Corp",
  },
  // Add more testimonial objects here as needed
];

const NextArrow = ({ onClick }) => (
  <button className="arrow nextArrow" onClick={onClick} aria-label="Next">
    →
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="arrow prevArrow" onClick={onClick} aria-label="Previous">
    ←
  </button>
);

const TestimonialCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
  };

  return (
    <div className="testimonialCarousel">
      <Slider {...settings}>
        {testimonials.map(({ image, quote, name, designation }, idx) => (
          <div className="testimonialCard" key={idx}>
            <div className="imageContainer">
              <img src={image} alt={name} />
            </div>
            <div className="content">
              <div className="quoteMark">“</div>
              <p className="quote">{quote}</p>
              <p className="name">{name}</p>
              <p className="designation">{designation}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
