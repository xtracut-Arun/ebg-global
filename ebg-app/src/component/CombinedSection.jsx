import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const CombinedSection = ({ slides, backgroundImage }) => {
  const [slidesPerView, setSlidesPerView] = useState(1.5); // Start with 1.5 slides visible
  const [scrollCount, setScrollCount] = useState(0); // Track the scroll count

  // Adjust slidesPerView based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const newScrollCount = Math.floor(window.scrollY / 100); // Calculate scroll count based on scroll distance

      if (newScrollCount !== scrollCount) {
        setScrollCount(newScrollCount);
        // Adjust `slidesPerView` based on the scroll count
        if (newScrollCount === 1) {
          setSlidesPerView(2.5); // Show 2 slides + half of the 3rd slide
        } else if (newScrollCount === 2) {
          setSlidesPerView(3.5); // Show 3 slides + half of the 4th slide
        } else if (newScrollCount >= 3) {
          setSlidesPerView(4.5); // Show 4 slides + half of the 5th slide
        }
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollCount]);

  return (
    <section
      className="combined-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={slidesPerView} // Dynamic number of visible slides based on scroll
        centeredSlides={false}
        loop={false} // No loop
        navigation={false} // No navigation for now
        className="Keyswiper"
      >
        {/* Dynamically rendering SwiperSlides */}
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content flex flex-col">
              <div className="bg-white px-6 py-4 rounded-lg">
                <h2>{slide.title}</h2>
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
