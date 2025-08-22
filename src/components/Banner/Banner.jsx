import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Add this import for routing
import {
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code,
  Settings,
  Users,
  Server,
  Shield,
} from "lucide-react";
import "./banner.scss";

const services = [
  {
    id: 1,
    title: "Cloud Hosting",
    subtitle: "Scalable & Reliable",
    description:
      "High-performance cloud hosting solutions with 99.9% uptime guarantee",
    icon: Cloud,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&auto=format",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    id: 2,
    title: "Web Development",
    subtitle: "Modern & Responsive",
    description: "Custom web applications built with cutting-edge technologies",
    icon: Code,
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&auto=format",
    gradient: "from-green-600 to-blue-600",
  },
  {
    id: 3,
    title: "Managed Services",
    subtitle: "24/7 Support",
    description: "Complete infrastructure management and monitoring services",
    icon: Settings,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&auto=format",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    id: 4,
    title: "Consultancy",
    subtitle: "Expert Guidance",
    description:
      "Strategic technology consulting to accelerate your business growth",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format",
    gradient: "from-orange-600 to-red-600",
  },
  {
    id: 5,
    title: "DevOps",
    subtitle: "Streamlined Deployment",
    description:
      "Automated CI/CD pipelines and infrastructure as code solutions",
    icon: Server,
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop&auto=format",
    gradient: "from-teal-600 to-green-600",
  },
  {
    id: 6,
    title: "Backup & Recovery",
    subtitle: "Data Protection",
    description:
      "Comprehensive backup solutions with instant recovery capabilities",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop&auto=format",
    gradient: "from-indigo-600 to-purple-600",
  },
];

const Banner = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Preload images
  useEffect(() => {
    services.forEach((service, index) => {
      const img = new Image();
      img.onload = () => {
        setImageLoaded((prev) => ({ ...prev, [index]: true }));
      };
      img.src = service.image;
    });
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  // Handle Get Started button click - navigate to contact/form page
  const handleGetStarted = () => {
    navigate("/contact"); // Change this to your desired route
    // Alternative routes you might want to use:
    // navigate('/get-started');
    // navigate('/quote');
    // navigate('/contact-form');
  };

  // Handle Learn More button click - scroll to a section on the same page
  const handleLearnMore = () => {
    const targetSection = document.getElementById("services-section");
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Alternative: scroll to a specific section based on current service
    // const sectionId = `${services[currentSlide].title.toLowerCase().replace(/\s+/g, '-')}-section`;
    // const targetSection = document.getElementById(sectionId);
  };

  const CurrentIcon = services[currentSlide].icon;

  return (
    <div className="carousel-container">
      {/* Animated Background */}
      <div className="animated-bg">
        {/* Background Image with Parallax Effect */}
        <div className="bg-image-container">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-image ${index === currentSlide ? "active" : ""} ${
                imageLoaded[index] ? "loaded" : ""
              }`}
              style={{ backgroundImage: `url(${service.image})` }}
            />
          ))}
          <div className="image-overlay"></div>
        </div>

        {/* Floating Particles */}
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>

        {/* Moving Geometric Shapes */}
        <div className="floating-shapes">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`shape shape-${i + 1}`}>
              <div className="shape-inner"></div>
            </div>
          ))}
        </div>

        {/* Animated Lines */}
        <div className="moving-lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <div className="line line-4"></div>
        </div>

        {/* Bottom Moving Line */}
        <div className="bottom-moving-line">
          <div className="moving-dot"></div>
        </div>

        <div className="gradient-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="carousel-content">
        <div className="content-grid">
          {/* Left Side - Image */}
          <div className="image-section">
            <div className="service-image-container">
              <div
                className={`service-image ${
                  isAnimating ? "transitioning" : ""
                }`}
              >
                <img
                  src={services[currentSlide].image}
                  alt={services[currentSlide].title}
                  className={imageLoaded[currentSlide] ? "loaded" : ""}
                />
                <div className="image-frame"></div>
                <div className="floating-icon">
                  <CurrentIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-section">
            <div className={`slide-content ${isAnimating ? "animating" : ""}`}>
              <div className="slide-number">0{currentSlide + 1}</div>
              <h1 className="service-title">{services[currentSlide].title}</h1>
              <h2 className="service-subtitle">
                {services[currentSlide].subtitle}
              </h2>
              <p className="service-description">
                {services[currentSlide].description}
              </p>
              <div className="button-group">
                <button
                  className={`cta-button primary bg-gradient-to-r ${services[currentSlide].gradient}`}
                  onClick={handleGetStarted}
                >
                  Get Started
                </button>
                <button
                  className="cta-button secondary"
                  onClick={handleLearnMore}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="navigation">
          <button
            className="nav-btn prev-btn"
            onClick={prevSlide}
            disabled={isAnimating}
          >
            <ChevronLeft />
          </button>
          <button
            className="nav-btn next-btn"
            onClick={nextSlide}
            disabled={isAnimating}
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="dots-container">
          {services.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            >
              <span className="dot-number">{index + 1}</span>
            </button>
          ))}
        </div>

        {/* Service Navigation */}
        <div className="service-nav">
          <div className="service-list">
            {services.map((service, index) => (
              <button
                key={service.id}
                className={`service-item ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              >
                <service.icon className="service-nav-icon" />
                <span>{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${((currentSlide + 1) / services.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
