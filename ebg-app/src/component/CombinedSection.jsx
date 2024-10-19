import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/Pagination';
import { Navigation, Pagination } from 'swiper/modules';

const CombinedSection = ({ slides, backgroundImage }) => {
  // const [slidesPerView, setSlidesPerView] = useState(1.5); // Start with 1.5 slides visible

  return (
    <section
      className="combined-section items-end flex justify-end pb-5 mb-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <Swiper
       
        spaceBetween={30} 
        slidesPerView={1.2}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
        }} 
        loop={false} 
        navigation={false} 
        grabCursor={true}
        className="custom-swiper flex md:w-2/6 pl-0.5	" style={{marginRight:'0px',marginLeft:'5px'}}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className='bg-white px-6 rounded-lg 	' >
            <div className="slide-content flex flex-col items-center min-h-56 justify-center">
              <div className="">
                <h4 className='text-xl	'>{slide.title}</h4>
                <p>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CombinedSection;
