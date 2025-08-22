import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "./testimonialSlider.scss";

import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "ORA Tech transformed the way we manage our cloud infrastructure. Their team is quick, reliable, and always ready to solve challenges before they grow.",
    name: "Priya Mehra",
    position: "Head of IT, Zeon Networks",
  },
  {
    id: 2,
    quote:
      "Working with ORA Tech has been a game-changer for our business. Their innovative solutions and exceptional support have exceeded all our expectations.",
    name: "John Smith",
    position: "CTO, Tech Innovations",
  },
  {
    id: 3,
    quote:
      "The level of expertise and professionalism from ORA Tech is unmatched. They delivered exactly what we needed, on time and within budget.",
    name: "Sarah Johnson",
    position: "Director of Operations, Digital Solutions",
  },
  {
    id: 4,
    quote:
      "ORA Tech's commitment to excellence is evident in everything they do. Their team goes above and beyond to ensure client success.",
    name: "Michael Chen",
    position: "VP Technology, Global Enterprises",
  },
  {
    id: 5,
    quote:
      "From start to finish, ORA Tech provided outstanding service. Their technical expertise and customer-focused approach sets them apart.",
    name: "Emily Rodriguez",
    position: "IT Manager, Future Systems",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="container testimonial-section">
      <div className="testimonial-header">
        <span className="client-stories-badge">Client Stories</span>
        <h1 className="main-title">Trusted by Businesses, Loved by Clients</h1>
        <p className="subtitle">
          We take pride in delivering technology solutions that truly make a
          difference. Our clients value our expertise, responsiveness, and
          dedication — and their stories say it best.
        </p>
      </div>

      <div className="testimonial-slider-container">
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards, Navigation]}
          className="testimonial-swiper"
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          cardsEffect={{
            slideShadows: true,
            perSlideOffset: 10, // spacing between stacked cards
            perSlideRotate: 2, // small rotation for depth
            rotate: true, // allow rotation
          }}
          centeredSlides={true} // keep card centered
          slidesPerView={"auto"}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="testimonial-slide">
              <div className="testimonial-card">
                {/* Empty image placeholder */}
                <div className="testimonial-image"></div>

                <div className="testimonial-content">
                  <Quote size={28} strokeWidth={2} color="black" fill="black" />
                  <p className="quote">{testimonial.quote}</p>
                  <div className="author-info">
                    <h3 className="author-name">{testimonial.name}</h3>
                    <p className="author-position">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-navigation">
          <div className="swiper-button-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="swiper-button-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
