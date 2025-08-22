import React, { useState } from "react";
import "./faqAccordion.scss";

const Accordion = () => {
  const [openItems, setOpenItems] = useState({});

  const accordionData = [
    {
      id: 1,
      title: "What services does ORA Tech offer?",
      content:
        " Yes, we offer flexible and scalable solutions that can be customized to match your goals, whether you're a startup or an enterprise.",
    },
    {
      id: 2,
      title: "Can I get a customized plan based on my business needs?",
      content:
        "Yes, we offer flexible and scalable solutions that can be customized to match your goals, whether you're a startup or an enterprise.",
    },
    {
      id: 3,
      title: "How secure is my data with ORA Tech?",
      content:
        "We follow industry-leading security protocols to protect your data.",
    },
    {
      id: 4,
      title: "Do you provide post-launch support and maintenance?",
      content: "Yes, we offer ongoing support and maintenance services.",
    },
    {
      id: 5,
      title: "How do I get started with ORA Tech?",
      content:
        "Simply reach out to our team through our contact form or email.",
    },
  ];

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="accordion-wrapper">
      <div className="accordion-list">
        {accordionData.map((item, index) => (
          <div key={item.id} className="accordion-item">
            <div
              className={`accordion-question ${
                openItems[item.id] ? "active" : ""
              }`}
              onClick={() => toggleItem(item.id)}
            >
              <h3>{item.title}</h3>
              <span className="accordion-symbol">
                {openItems[item.id] ? "−" : "+"}
              </span>
            </div>

            <div
              className={`accordion-answer ${openItems[item.id] ? "open" : ""}`}
            >
              <p >{item.content}</p>
            </div>

            {index < accordionData.length - 1 && (
              <div className="accordion-separator"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
