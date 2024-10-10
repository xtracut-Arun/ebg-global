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
          className="border-b border-gray-200 py-5 "
        >
          <div
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center cursor-pointer text-lg font-semibold "
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
            className={`my-10 text-sm text-neutral-500 transition duration-150 ease-out ${
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
