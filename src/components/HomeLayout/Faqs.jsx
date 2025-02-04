import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import faqsData from "../FaqsData";

function Faqs() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section className="faqs-section">
      <div className="max-width">
        <h2>Frequently Asked Questions</h2>
        <div className="faqs--wrapper">
          {faqsData.map((faq, index) => (
            <article
              key={index}
              className={`faq--item ${openFaq === index ? "open" : ""}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq--question">
                <h5>{faq.question}</h5>{" "}
                <Icon icon="ri:arrow-down-s-line" className={`dropdown-icon ${openFaq === index ? "rotate" : ""}`} />
              </div>
              <div className="faq--answer">
                <p>{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
