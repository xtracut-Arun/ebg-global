import React from "react";
import ctaimg from "../images/cta-back.webp"
import { LuArrowRight } from "react-icons/lu";

export default function Cta ({title, link}){
    return(
        <div className="text-center text-white flex flex-col items-center py-20"  
         style={{background: `url(${ctaimg})`,backgroundPosition:'center', backgroundSize:'cover' }}>
            <h1 className="text-[40px]">{title}</h1>
            <a href={link} className="white-btn flex items-center border-0 gap-1 mt-5 hover:text-white hover:bg-[#1B1B1B] ">Shop More Bikes <LuArrowRight /></a> 
        </div>
    );
}