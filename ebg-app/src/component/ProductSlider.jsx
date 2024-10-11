
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import leftImage from '../images/about/left.png';
import rightImage from '../images/about/right.png';



// images
import skypher from '../images/dealership/skyperpro.webp'
import galexeon from '../images/dealership/galexeon.webp'
import nexara from '../images/dealership/nexara.webp'


const carditems = [
    {title: 'SKYPHER PRO',image:skypher, sprice:'9898', emi:'999', buttonlink:'#', learnmore:'#'},
    {title: 'GALEXEON',image:galexeon, sprice:'9898', emi:'999', buttonlink:'#', learnmore:'#'},
    {title: 'NEXARA',image:nexara, sprice:'9898', emi:'999', buttonlink:'#', learnmore:'#'},
  ]
const ProductSlider = ({ carditems }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  // const handleSlideChange = (swiper) => {
  //   setActiveIndex(swiper.activeIndex);
  //   setNextIndex((swiper.activeIndex + 1) % carditems.length); // Get the next slide index
  // };

  return (
    <>
    <div className='relative md:px-[60px]'>
    <Swiper className='dealershipslider'
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
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
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      {carditems.map((item, index) => (
        <SwiperSlide key={index} className=' rounded-[20px]'>
          <div className={`${
              index === nextIndex ? 'bg-light-grey' : ''
            } flex flex-col pt-5`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-[220px] object-cover rounded-t-lg w-full"
            />
            <div className="p-4 text-start rounded-b-lg text-dark">
              <h3 className="text-center text-3xl">{item.title}</h3>
              <div className="space-x-6 my-5 mt-10 text-center">
                <a href={item.buttonlink} className="black-btn text-sm">
                  Shop
                </a>
              </div>
            </div>
          </div>
          
        </SwiperSlide>
        
      ))}
    </Swiper>
    <div className="custom-prev"></div>
          <div className="custom-next"></div>
          </div>
    <style jsx>{`
      .custom-prev, .custom-next {
        width: 40px;
        height: 40px;
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        cursor: pointer;
      }

      .custom-prev {
        left: 10px;
        background-image: url(${leftImage});
      }
      .swiper-button-disabled{opacity:.5;}
      .custom-next {
        right: 10px;
        background-image: url(${rightImage});
      }
        @media only screen and (max-width: 600px) {.custom-prev, .custom-next { top: 88%;}}
    `}</style>
    </>
  );
};

export default ProductSlider;
