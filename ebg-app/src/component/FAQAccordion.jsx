import React, { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

const FAQAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-gray-300 py-4"
        >
          <div
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-800"
          >
            <span>{faq.question}</span>
            <span>
              {activeIndex === index ? (
                <LuMinus />
              ) : (
                <LuPlus />
              )}
            </span>
          </div>
          <div
            className={`mt-3 text-gray-600 transition-all duration-300 ${
              activeIndex === index ? "block" : "hidden"
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
