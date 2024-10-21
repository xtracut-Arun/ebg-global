
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import leftImage from '../images/icons//svg/arrowleft.svg';
import rightImage from '../images/icons/svg/arrowright.svg';
import store from '../images/icons/svg/store.svg'

import { Navigation } from 'swiper/modules';


const address = [
    {title: 'Mumbai',phone:'+91 99999 99999', address:'A wing, 2nd Floor Pramukh Plaza, Cardinal Gracious Rd, opp. Proctors Gamble Plaza, Chakala, Andheri East, Mumbai, Maharashtra, 400099'},
    {title: 'Kochi',phone:'+91 99999 99999', address:'Q1 Mall by Nippon Q1, 7th Floor, Near Don Bosco Cultural Centre, Chakkalakkal, Service Rd East, NH 66, Palarivattom, Vennala, Ernakulam, Kerala 68202', },
    {title: 'Chandigarh',phone:'+91 99999 99999', address:'SCO No 26, 2nd floor, Tower No 1, Maya Garden, Magnesia, Chandigarh – Ambala Highway, Zirakpur, Punjab – 140603', },
    {title: 'Hyderabad',phone:'+91 99999 99999', address:'Jain Sadguru Capital Park, Image Garden,, 105 B, Silicon Valley, Madhapur, Hyderabad, Telangana 500081', },
  ]

export default function Storeaddress() {
  return (
    <>
    <section className='container mx-auto '>
    <div className="flex  items-center justify-between py-10 gap-3">
        <div className="md:w-9/12">   
            <h1>Office addresses</h1>
          </div>
        <div className="flex  items-center bg-[#F9F9F9] justify-between w-fit align-center rounded-[40px] px-4 py-2">
            <div className="custom-prev"></div>
             <div className="custom-next"></div>
    
        </div>
 

    </div>
   
    
    <div className='relative'>
   
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      // onSlideChange={handleSlideChange}
      navigation={{
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      }}
      modules={[Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3.7,
          spaceBetween: 50,
        },
      }}
    >
      {address.map((item, index) => (
        <SwiperSlide key={index} className=' rounded-[20px] pb-20 ps-5'>
          <div className='text-start flex flex-col justify-between  md:min-h-[340px]	min-h-[280px]'>
            <div className="flex flex-col items-start	">
            <img src={store} alt={item.title} className="h-[48px] text-start object-contain rounded-t-lg pb-2"/>
            <p>eBikeGo Global</p>
              <h3 className="text-3xl py-3">{item.title}</h3>
              <p className='pb-5'>{item.address}</p>
            </div>
             
               <div className="flex flex-col">
               
                <a href='tel:{"$:item.phone"}' className="black-btn text-sm text-start mx-0 d-block">
                  Call Now {item.phone}
                </a>
               </div>
              
            </div>
         
          
        </SwiperSlide>
        
      ))}
    </Swiper>
    
          </div>
    <style jsx>{`
      .custom-prev, .custom-next {
        width: 20px;
        height: 20px;
        background-size: contain;
        background-repeat: no-repeat;
        position: relative;
        top: 50%;
        transform: translateY(0%);
        z-index: 10;
        cursor: pointer;
      }

      .custom-prev {
        left: 0px;
        background-image: url(${leftImage});
      }
      .swiper-button-disabled{opacity:.5;}
      .custom-next {
        right: -10px;
        background-image: url(${rightImage});
      }
        @media only screen and (max-width: 600px) {.custom-prev, .custom-next { top: 88%;}}
    `}</style>
      </section>
    </>
  );
}
