import React from "react";
import footlogo from "../images/ebg-Global-clr.png"
import { RiTwitterXFill,RiFacebookFill, RiInstagramLine , RiLinkedinFill,RiYoutubeLine  } from "react-icons/ri";

const quicklinks =[
    {page:'home' , link: '/'},
    {page:'about' , link: '/about'},
    { page: 'Prodcuts', link: '/products' },
    { page: 'Dealership', link: '/dealership' },
    { page: 'Contact', link: '/contact' },
]
const socialicons = [
    {img:<RiFacebookFill />, link: '#'},
    {img:<RiTwitterXFill />, link: '#!'},
    {img:<RiInstagramLine />, link: '#!'},
    {img:<RiLinkedinFill />, link: '#!'},
    {img:<RiYoutubeLine  />, link: '#!'},
]

export default function Footer () {
    return(
        <>
        <div className="container mx-auto text-dark">
            <div className="flex flex-col md:flex-row justify-between py-10">
                <div>
                    <img src={footlogo} alt="" />
                    <div className="flex gap-10 py-5 flex-col md:flex-row" >
                        {quicklinks.map ((item, index) =>(
                            <a href={item.link} key={index} className="uppercase text-base text-[#75807E]">{item.page}</a>
                        ))}
                    </div>
                </div> 
               <div>
                <p className="text-dark text-xl pt-5">Follow us:</p>
                <div className="flex gap-5 pt-5">
                {socialicons.map ((item,index) =>(
                    <a href={item.link} key={index}  className="text-[#1D1D1D]">{item.img}</a>
                ))}
                </div>
               </div>

            </div>
        </div>
        <div className="border-t-2 text-[#75807E]">
        <div className="container mx-auto py-3"><p>Copyright © 2024 THINK EBIKEGO PRIVATE LIMITED - All Rights Reserved.</p></div>
        </div>
        
        </>
    );
}