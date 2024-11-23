import React from 'react';
import HeroIMage from '../images/contact/contactbanner.webp'
import { TbPhoneCall } from "react-icons/tb";
import call from '../images/icons/svg/call.svg'
import mail from '../images/icons/svg/mail.svg'

import Storeaddress from '../component/StoreAddress'
import Cta from '../component/cta';


export default function Contact() {
    return (
    <>
        <section className='container mx-auto '>
            <div className="flex md:flex-row flex-col-reverse bg-[#F9F9F9] my-10 rounded-[20px]">
                <div className="md:w-7/12 w-full py-10 md:px-10">
                    <h1  className='pt-5 ps-5 pb-10  leading-none'>You can reach out to us for more information.</h1>
                    {/* form */}
                    <div className="bg-white m-5 p-5 pt-10 pb-20 rounded-lg">
                        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-2 gap-5">

                        <input type="text" name="username" id="firstname" autoComplete="username" placeholder="Your Name" className="block flex-1 rounded-lg border bg-transparent py-2.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                        <input type="text" name="phoen" id="phonenumber" autoComplete="username" placeholder="Your Phone" className="block flex-1 rounded-lg border bg-transparent py-2.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                        <input type="text" name="phoen" id="phonenumber" autoComplete="username" placeholder="Your Email" className="block flex-1 rounded-lg border bg-transparent py-2.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                        <input type="text" name="phoen" id="phonenumber" autoComplete="username" placeholder="Subject" className="block flex-1 rounded-lg border bg-transparent py-2.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                        </div>
                        <div className="grid w-full py-5"><textarea type="text" name="phoen" id="phonenumber" autoComplete="username" placeholder="Your message (optional)" className="block flex-1 rounded-lg border bg-transparent py-2.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                        </div>
                        <a href="#!" className="black-btn text-sm px-10">  Submit </a>
                    </div>

                    <div className="ps-5">
                        <h2 className='md:pt-20 pt-12 '>Get in touch</h2>
                        <p className='pt-3 pb-7'>Have more questions? We’d love to hear from you.</p>
                            <div className="flex md:gap-10 gap-5   md:flex-row flex-col">
                            <a href="tel:+918988845555" className='flex items-center gap-2'> <img src={call} alt="" style={{height:'16px'}}/> Contact us: +91 8988845555</a>
                        <a href="mailto:hello@ebikego.com" className='flex items-center gap-2'> <img src={mail} alt="" style={{height:'16px'}}/> Send Mail: hello@ebikego.com</a>
                    </div>
                        </div>
                </div>
                <div className="md:w-5/12 w-full">
                <img src={HeroIMage} alt="Contact us" className='w-100 h-full rounded-r-[20px]' />
                </div>
            </div>
        </section>

        
            <Storeaddress/>

            <Cta  title='Discover Your Favorite Bike' link="#"/>
    </>
)}
