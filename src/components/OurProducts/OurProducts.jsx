import React from "react";
import "./ourProduct.scss";

import arrow from "../../assets/images/blueArrow.svg";

import goyal from "../../assets/images/goyal.png";
import priya from "../../assets/images/priya.png";

const OurProducts = () => {
  const products = [
    {
      id: 1,
      image: goyal,
      alt: "Project 1",
      title: "Goyal Hospital",
      description:
        "Goyal Hospital: Efficiently showcase patient data, appointments, and facilities. Explore services, career opportunities, and advanced healthcare solutions.",
      link: "https://priyamua.co.in/", // internal link
      external: false,
    },
    {
      id: 2,
      image: priya,
      alt: "Project 2",
      title: "Bridal Website",
      description:
        "We created a stunning bridal website, optimized for speed and user experience. Showcase collections beautifully and engage clients seamlessly.",
      link: "https://priyamua.co.in/", // external link
      external: true,
    },
  ];

  return (
    <section className="container ourProductsContainer">
      <div className="product">Our Projects</div>
      <h3>Real Impact. Real Results.</h3>
      <p>
        At ORA Tech, we provide secure, scalable, and high-performance IT
        services to help your business run smarter. Whether you're a startup or
        an enterprise, our solutions are tailored to fit your goals.
      </p>
      <div className="products-grid">
        {products.map((product) => (
          <a
            key={product.id}
            href={product.link}
            className="product-item"
            target={product.external ? "_blank" : "_self"}
            rel={product.external ? "noopener noreferrer" : ""}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={product.image} alt={product.alt} />
            <div className="product-overlay">
              <div className="overlay-content">
                <h4 className="overlay-title">{product.title}</h4>
                <div className="arow">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
