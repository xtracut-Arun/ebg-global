import React from 'react';
import { LuArrowRight } from "react-icons/lu";

const formFields = [
  { name: "Name", type: "text", placeholder: "Name" },
  { name: "Mobile", type: "tel", placeholder: "Mobile" },
  { name: "Email", type: "email", placeholder: "Email" },
  { name: "State", type: "select", options: ["Choose State", "State 1", "State 2"] },
  { name: "City", type: "select", options: ["Choose City", "City 1", "City 2"] },
  { name: "DealerHub", type: "select", options: ["Dealer Hub 1", "Dealer Hub 2"] },
  { name: "Reference", type: "select", options: ["Where did you hear about Us?", "google", "instagram"] },
];

export default function DealershipForm({ formTexts, dealershipformbg }) {
  return (
    <div className="container mx-auto pb-20">
      <div className="flex bg-[#F9F9F9] rounded-xl md:flex-row flex-col">
        <div className="w-full md:w-1/2 py-10 px-14">
          <p className="text-[#444444] text-lg">{formTexts.line1}</p>
          <h3 className="text-2xl pb-5">{formTexts.line2}</h3>
          <p>{formTexts.line3}</p>
          <form className="pt-6" >
            {formFields.slice(0, 3).map((field, index) => (
              <div key={index} className="mb-3">
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="p-2 w-full border bg-transparent py-1 pb-2 placeholder:text-[11px] placeholder:text-gray-400"
                />
              </div>
            ))}
            <div className="flex gap-3 mb-3">
              {formFields.slice(3, 5).map((field, index) => (
                <div key={index} className="flex-1">
                  <select
                    name={field.name}
                    className="px-1 py-[10px] w-full border bg-transparent text-[11px] text-gray-400"
                  >
                    {field.options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            {formFields.slice(5, 7).map((field, index) => (
              <div key={index} className="mb-3">
                <select
                    name={field.name}
                    className="px-1 py-[10px] w-full border bg-transparent text-[11px] text-gray-400"
                  >
                    {field.options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
              </div>
            ))}
            <div>
              <label className="text-[11px] text-[#000000B2]">Your Investment Budget *</label>
              <div className="flex gap-10">
                <div>
                  <input type="radio" name="budget" value="75L" id="budget75L" />
                  <label htmlFor="budget75L" className="ml-2">75L</label>
                </div>
                <div>
                  <input type="radio" name="budget" value="1.5Cr" id="budget1.5Cr" />
                  <label htmlFor="budget1.5Cr" className="ml-2">1.5Cr</label>
                </div>
              </div>
            </div>
            <button type="submit" className="mt-10 flex bg-primary items-center justify-between w-full rounded-lg text-white p-4 text-xl font-medium">
              Book a call <LuArrowRight  className='text-2xl'/>
            </button>
          </form>
        </div>
        <div
          className="w-full bg-cover md:rounded-r-xl"
          style={{
            backgroundImage: `url(${dealershipformbg})`,
          }}
        >
            {/* <div className="py-20 md:hidden"></div> */}
        </div>
      </div>
    </div>
  );
}
