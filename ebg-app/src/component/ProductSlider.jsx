
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';



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
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      // onSlideChange={handleSlideChange}
      navigation={true}
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
        <SwiperSlide key={index}>
          <div
            className={`${
              index === nextIndex ? 'bg-light-grey' : ''
            } flex flex-col pt-5`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-[220px] object-cover rounded-t-lg w-full"
            />
            <div className="p-4 text-start rounded-b-lg text-dark">
              <h3 className="text-center">{item.title}</h3>
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
  );
};

export default ProductSlider;
