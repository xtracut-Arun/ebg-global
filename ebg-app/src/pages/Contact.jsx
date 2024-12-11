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
                    <form action='https://forms.zohopublic.com/ebikego/form/ebgglobalcontactform/formperma/mz30m8i2OuwRUgYw2SBZgXLdicsWUH_EC9Bcft8e4cE/htmlRecords/submit' name='form' id='form' method='POST' accept-charset='UTF-8' enctype='multipart/form-data'>
                    <input type="hidden" name="zf_referrer_name" value=""></input>
                    <input type="hidden" name="zf_redirect_url" value=""></input>
                    <input type="hidden" name="zc_gad" value=""></input>
                    <div className="bg-white m-5 p-5 pt-10 pb-20 rounded-lg">
                        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-2 gap-5">

                        <input type="text" maxlength="255" name="Name_First"  placeholder="Your Name" className="block flex-1 rounded-lg border bg-transparent py-2.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                        <input type="tel" compname="PhoneNumber" name="PhoneNumber_countrycode"   maxlength="20"   id="international_PhoneNumber_countrycode" placeholder="Your Phone" className="block flex-1 rounded-lg border bg-transparent py-2.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                        <input type="email" maxlength="255" name="Email"  placeholder="Your Email" className="block flex-1 rounded-lg border bg-transparent py-2.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                        <input type="text" name="SingleLine"  maxlength="255" placeholder="Subject" className="block flex-1 rounded-lg border bg-transparent py-2.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                        </div>
                        <div className="grid w-full py-5">
                            <textarea name="MultiLine" maxlength="65535"   placeholder="Your message (optional)" className="block flex-1 rounded-lg border bg-transparent py-2.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                        </div>
                        <button type="submit" className="black-btn text-sm px-10">Submit</button>
                        
                    </div>
                    </form>

                    <div className="ps-5">
                        <h2 className='md:pt-20 pt-12 '>Get in touch</h2>
                        <p className='pt-3 pb-7'>Have more questions? We’d love to hear from you.</p>
                            <div className="flex md:gap-10 gap-5   md:flex-row flex-col">
                            <a href="tel:+918988845555" className='flex items-center gap-2'> <img src={call} alt="" style={{height:'16px'}}/> Contact us: +91 8988845555</a>
                        <a href="mailto:info@ebikego.global" className='flex items-center gap-2'> <img src={mail} alt="" style={{height:'16px'}}/> Send Mail: info@ebikego.global</a>
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
