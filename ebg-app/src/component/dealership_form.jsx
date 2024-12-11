import React from 'react';
import { LuArrowRight } from "react-icons/lu";

export default function DealershipForm({ formTexts, dealershipformbg }) {
  return (
    <div className="container mx-auto pb-20">
      <div className="flex bg-[#F9F9F9] rounded-xl md:flex-row flex-col">
        {/* Form Section */}
        <div className="w-full md:w-1/2 py-10 px-14">
          <p className="text-[#444444] text-lg">{formTexts.line1}</p>
          <h3 className="text-2xl pb-5">{formTexts.line2}</h3>
          <p>{formTexts.line3}</p>
          
          <form
            className="pt-6"
            action="https://forms.zohopublic.com/ebikego/form/Ebikegoglobaldealershipform/formperma/u1xXffs1jbScBTKnOQdvtZZzWZgl4-0VZ1S_82OE0jI/htmlRecords/submit"
            name="form"
            id="form"
            method="POST"
            acceptCharset="UTF-8"
            encType="multipart/form-data"
          >
            {/* Hidden Fields */}
            <input type="hidden" name="zf_referrer_name" value="" />
            <input type="hidden" name="zf_redirect_url" value="" />
            <input type="hidden" name="zc_gad" value="" />
            <input type="hidden" name="utm_source" value="" />
            <input type="hidden" name="utm_medium" value="" />
            <input type="hidden" name="utm_campaign" value="" />
            <input type="hidden" name="utm_term" value="" />
            <input type="hidden" name="utm_content" value="" />
            
            {/* First Name and Last Name */}
            <div className="flex flex-col md:flex-row gap-3 mb-3">
              {/* First Name */}
              <div className="flex-1">
                <input
                  type="text"
                  id="Name_First"
                  name="Name_First"
                  placeholder="First Name *"
                  maxLength={255}
                  required
                  className="p-2 w-full border bg-transparent py-1 pb-2 placeholder:text-[11px] placeholder:text-gray-400"
                />
              </div>
              
              {/* Last Name */}
              <div className="flex-1">
                <input
                  type="text"
                  id="Name_Last"
                  name="Name_Last"
                  placeholder="Last Name *"
                  maxLength={255}
                  required
                  className="p-2 w-full border bg-transparent py-1 pb-2 placeholder:text-[11px] placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-3">
              <input
                type="email"
                id="Email"
                name="Email"
                placeholder="Email Address *"
                maxLength={255}
                required
                className="p-2 w-full border bg-transparent py-1 pb-2 placeholder:text-[11px] placeholder:text-gray-400"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-3">
              <div className="flex  gap-3">
                {/* Country Code */}
                <input
                  type="text"
                  name="PhoneNumber_countrycodeval"
                  placeholder="Code *"
                  maxLength={5}
                  required
                  defaultValue="+91"
                  className="p-2 w-2/12 border bg-transparent py-1 pb-2 placeholder:text-[11px] placeholder:text-gray-400"
                />
                {/* Phone Number */}
                <input
                  type="text"
                  name="PhoneNumber_countrycode"
                  placeholder="Number *"
                  maxLength={20}
                  required
                  className="p-2 w-5/6 border bg-transparent py-1 pb-2 placeholder:text-[11px] placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Country Field */}
            <div className="mb-3">
              <input
                type="text"
                id="SingleLine"
                name="SingleLine"
                placeholder="Country *"
                maxLength={255}
                required
                className="p-2 w-full border bg-transparent py-1 pb-2 placeholder:text-[11px] placeholder:text-gray-400"
              />
            </div>

            {/* State and City */}
            <div className="flex flex-col md:flex-row gap-3 mb-3">
              {/* State */}
              <div className="flex-1">
                <input
                  type="text"
                  id="SingleLine1"
                  name="SingleLine1"
                  placeholder="State *"
                  maxLength={255}
                  required
                  className="p-2 w-full border bg-transparent py-1 pb-2 placeholder:text-[11px] placeholder:text-gray-400"
                />
              </div>
              {/* City */}
              <div className="flex-1">
                <input
                  type="text"
                  id="SingleLine2"
                  name="SingleLine2"
                  placeholder="City *"
                  maxLength={255}
                  required
                  className="p-2 w-full border bg-transparent py-1 pb-2 placeholder:text-[11px] placeholder:text-gray-400"
                />
              </div>
            </div>

      

            {/* Dealer Hub */}
            <div className="mb-3">
              <select
                id="Dropdown2"
                name="Dropdown2"
                required
                defaultValue="-Select-"
                className="px-1 py-[10px] w-full border bg-transparent text-[11px] text-gray-400"
              >
                <option value="-Select-" disabled>-Select Dealer Hub *</option>
                <option value="Dealer Hub">Dealer Hub</option>
                <option value="Dealer Hub 1">Dealer Hub 1</option>
                <option value="Dealer Hub 2">Dealer Hub 2</option>
              </select>
            </div>

            {/* Reference */}
            <div className="mb-3">
              <select
                id="Dropdown3"
                name="Dropdown3"
                defaultValue="-Select-"
                className="px-1 py-[10px] w-full border bg-transparent text-[11px] text-gray-400"
              >
                <option value="-Select-" disabled>-Select Reference *</option>
                <option value="Where did you hear about Us?">Where did you hear about Us?</option>
                <option value="Second Choice">Second Choice</option>
                <option value="Third Choice">Third Choice</option>
              </select>
            </div>

            {/* Investment Budget */}
            <div className="mb-3">
              <div className="text-[11px] text-[#000000B2] mb-1">
                Your Investment Budget *
              </div>
              <div className="flex gap-10">
                {/* 75L Option */}
                <div>
                  <input
                    type="radio"
                    id="Radio_1"
                    name="Radio"
                    value="75L"
                    required
                    className="mr-2"
                  />
                  <label htmlFor="Radio_1" className="text-sm">75L</label>
                </div>
                {/* 1.5Cr Option */}
                <div>
                  <input
                    type="radio"
                    id="Radio_2"
                    name="Radio"
                    value="1.5Cr"
                    className="mr-2"
                  />
                  <label htmlFor="Radio_2" className="text-sm">1.5Cr</label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-10 flex bg-primary items-center justify-between w-full rounded-lg text-white p-4 text-xl font-medium"
            >
              Book a Call <LuArrowRight className="text-2xl" />
            </button>
          </form>
        </div>

        {/* Background Image Section */}
        <div
          className="w-full bg-cover md:rounded-r-xl"
          style={{
            backgroundImage: `url(${dealershipformbg})`,
          }}
        >
          {/* Optional: Add content or styles here if needed */}
        </div>
      </div>
    </div>
  );
}
  