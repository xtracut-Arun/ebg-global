import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "./data";
import Cta from '../component/cta';
import { LuArrowRight } from "react-icons/lu";
const formFields = [
  { name: "Name", type: "text", placeholder: "Name" },
  { name: "Mobile", type: "tel", placeholder: "Mobile" },
  { name: "Email", type: "email", placeholder: "Email" },
  { name: "State", type: "select", options: ["Choose State", "State 1", "State 2"] },
  { name: "City", type: "select", options: ["Choose City", "City 1", "City 2"] },
  { name: "DealerHub", type: "select", options: ["Dealer Hub", "Dealer Hub 2"] },
  { name: "Reference", type: "select", options: ["Where did you hear about Us?", "google", "instagram"] },
];

export default function PrebookPage() {
  const { productSlug } = useParams();
  const product = products.find((item) => item.slug === productSlug);

  const [selectedColor, setSelectedColor] = useState(
    product.colors[0] // Default to the first color
  );

  if (!product) {
    return <p>Product not found. Please check the URL.</p>;
  }

  return (

  <>
    <div className="container mx-auto my-20 ">
      <div className=" bg-[#F9F9F9] flex flex-col-reverse md:flex-row rounded-xl">
        {/* Left Section: Form */}
        <div className="w-full md:w-1/3 p-10">
          <h2 className="text-xl font-bold pb-6 border-b-[1px]">Reserve Your Ride to the Future!</h2>
          {/* <h2 className="text-xl font-bold">{product.description}</h2> */}

          {/* Color Selector */}
          <div className="mt-10">
            <p >Color: {selectedColor}</p>
            <div className="flex mt-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`w-10 h-10 mr-4 rounded-full border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
            <p className="pt-5 text-sm">Please enter your personal details below to <b>pre-book your e-Cycle</b> </p>
          </div>

          {/* Reservation Form */}
          <form className="pt-6" action='https://forms.zohopublic.com/ebikego/form/Ebikegoglobalprebook/formperma/pYlTcAlJUnd7N0D9pIHp2tXe73MHmcHAW4BAWxK-gP8/htmlRecords/submit' name='form' id='form' method='POST' accept-charset='UTF-8' enctype='multipart/form-data'>
  {/* Hidden Fields */}
  
  <input type="hidden" name="zf_referrer_name" value="" />
  <input type="hidden" name="zf_redirect_url" value="" />
  <input type="hidden" name="zc_gad" value="" />


  <input type="text" hidden value={selectedColor} name="SingleLine3" />
  <input type="text" hidden value={product.name} name="SingleLine2" />
  
  {/* Name Fields */}
  <div className="mb-3">
    <input
      type="text"
      name="Name_First"
      placeholder="First Name"
      className="p-2 w-full border bg-transparent py-1 pb-2 placeholder:text-[11px] placeholder:text-gray-400"
    />
  </div>
  <div className="mb-3">
    <input
      type="text"
      name="Name_Last"
      placeholder="Last Name"
      className="p-2 w-full border bg-transparent py-1 pb-2 placeholder:text-[11px] placeholder:text-gray-400"
    />
  </div>

  {/* Phone Number */}
  <div className="mb-3">
    <input
      type="text"
      name="PhoneNumber_countrycode"
      placeholder="Phone Number"
      className="p-2 w-full border bg-transparent py-1 pb-2 placeholder:text-[11px] placeholder:text-gray-400"
    />
  </div>

  {/* Email */}
  <div className="mb-3">
    <input
      type="text"
      name="Email"
      placeholder="Email"
      className="p-2 w-full border bg-transparent py-1 pb-2 placeholder:text-[11px] placeholder:text-gray-400"
    />
  </div>

  {/* State */}
  <div className="mb-3">
    <input
      type="text"
      name="SingleLine"
      placeholder="State"
      className="p-2 w-full border bg-transparent py-1 pb-2 placeholder:text-[11px] placeholder:text-gray-400"
    />
  </div>

  {/* City */}
  <div className="mb-3">
    <input
      type="text"
      name="SingleLine1"
      placeholder="City"
      className="p-2 w-full border bg-transparent py-1 pb-2 placeholder:text-[11px] placeholder:text-gray-400"
    />
  </div>

  {/* Dealer Hub Dropdown */}
  <div className="mb-3">
    <select
      name="Dropdown"
      className="px-1 py-[10px] w-full border bg-transparent text-[11px] text-gray-400"
    >
      <option value="-Select-">-Select-</option>
      <option value="Dealer Hub">Dealer Hub</option>
      <option value="Second Choice">Second Choice</option>
      <option value="Third Choice">Third Choice</option>
    </select>
  </div>

  {/* Where did you hear about us? Dropdown */}
  <div className="mb-3">
    <select
      name="Dropdown1"
      className="px-1 py-[10px] w-full border bg-transparent text-[11px] text-gray-400"
    >
      <option value="-Select-">-Select-</option>
      <option value="Where did you hear about us?">Where did you hear about us?</option>
      <option value="Second Choice">Second Choice</option>
      <option value="Third Choice">Third Choice</option>
    </select>
  </div>

  {/* Terms and Conditions Checkbox */}
  <div className="flex mt-12">
    <input type="checkbox" name="budget" value="75L" id="agree" />
    <label htmlFor="agree" className="ml-2 text-[12px]">
      I agree to the{" "}
      <a href="#!" className="text-[#ED1C24]">
        Terms & Conditions
      </a>{" "}
      for this booking.
    </label>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="mt-5 flex bg-primary items-center justify-between w-full rounded-lg text-white p-4 text-xl font-medium"
  >
    Reserve for ₹999
    <LuArrowRight className="text-2xl" />
  </button>
          </form>

        </div>

        {/* Right Section: Product Details */}
        <div className="md:w-2/3 px-4  bg-[#E9EBE0A6] relative rounded-t-xl md:rounded-tl-none  md:rounded-r-xl p-10">
          <h3 className="absolute stroke text-[15vmin] lg:text-[18vmin] md:text-[11vmin]">{product.name} </h3>
          <img
            src={product.images[selectedColor]}
            alt={`${product.name} - ${selectedColor}`}
            className="w-full z-10 relative"
          />
          
          <div className="flex flex-col justify-center text-center">
            <p className="text-[32px]">Ex-Showroom Price:  {product.price}</p>
            <div className="relative">
            <p>Ex-showroom price: <span className="line-through">{product.cutedprice}</span> </p>
            <p className="font-bold">(Balance payable upon final purchase)</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Cta  title='Discover Your Favorite Bike' link="#"/>
    </>
    
  );
}

