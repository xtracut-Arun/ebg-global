import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import leftImage from '../images/about/left.png';
import rightImage from '../images/about/right.png';

const peopleslide = ({ carditems }) => {
  return (
    <>
      {/* Custom buttons */}
      <div className="custom-prev"></div>
      <div className="custom-next"></div>

      <Swiper
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {carditems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-between items-center flex-col md:flex-row  md:px-40">
                <div className=''>
                  <p className="text-2xl">{item.title}</p>
                  <h3 className="text-4xl font-bold pt-5 pb-10">{item.name}</h3>
                  <p>{item.text}</p>
                </div>
                <img src={item.image} alt={item.name} className="rounded-full w-40 md:w-96 mt-10" />
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

export default peopleslide;
