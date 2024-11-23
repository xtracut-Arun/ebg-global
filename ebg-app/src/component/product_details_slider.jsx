import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import leftImage from '../images/about/left.png';
import rightImage from '../images/about/right.png';

const product_details = ({ slide_content }) => {
  return (
    <>
      {/* Custom buttons */}
      {/* <div className="custom-prev"></div>
      <div className="custom-next"></div> */}

      <Swiper
        // navigation={{
        //   nextEl: '.custom-next',
        //   prevEl: '.custom-prev',
        // }}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slide_content.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='container mx-auto'>
                  <div className=" flex flex-col-reverse lg:flex-row bg-[#F2F2F2] rounded-[20px]">
                        <div className='flex flex-col justify-between p-10 lg:px-20 lg:pt-20 lg:pb-10' >
                            <div className='lg:pb-0 pb-10'>
                                <p className='text-dark text-[24px] pb-2 font-bold'>{item.title}</p>
                                <p className=' text-dark font-medium  text-[24px] pt-5 pb-3'>{item.sub_title}</p>
                                <p>{item.text}</p>
                            </div>
                            <div className='pt-10'>
                                <p>{item.point1}</p>
                                <p className='py-3'>{item.point2}</p>
                                <p>{item.point3}</p>
                            </div>
                        </div>
                        <img src={item.image} alt=""  className='w-full lg:w-3/5 object-cover rounded-[20px]'/>
                  </div>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .custom-prev, .custom-next {
          width: 40px;
          height: 40px;
          background-size: contain;
          background-repeat: no-repeat;
          position: absolute;
          top: 55%;
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
          @media only screen and (max-width: 768px) {.custom-prev, .custom-next { top: 88%;}}
      `}</style>
    </>
  );
};

export default product_details;
