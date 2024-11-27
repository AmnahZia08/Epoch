import React, { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const WhyUsSlider = ({ data }) => {
  const swiperRef = useRef();

  const handleSlideNext = () => {
    swiperRef.current?.slideNext();
  };

  const style =
    window.innerWidth > 768 ? { gridTemplateColumns: '1fr 1fr 2fr 1fr' } : {};

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop
      className='image-courser mt-5 mb-4'
      modules={[Navigation]}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {data.map(({ title, description, image }, index) => (
        <SwiperSlide key={index}>
          <div
            className='section-container gap-4 d-grid align-items-center'
            style={style}
          >
            <div className='image-wrapper'>
              <img src={image} alt={title} className='icon-image' />
            </div>
            <h3 className='title'>{title}</h3>
            <p className='description'>{description}</p>
            <button
              className='rounded-circle arrow-btn'
              onClick={handleSlideNext}
            >
              <span>&gt;</span>
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WhyUsSlider;
