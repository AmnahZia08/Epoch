import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import client_1 from '../assets/img/client-1.png';
import client_2 from '../assets/img/client-2.png';
import client_3 from '../assets/img/client-3.png';
import TestimonialCard from './common/testimonialCard';
import TeamComponent from './teamComponent';

const testimonialData = [
  {
    id: 1,
    name: 'Aloin Lden',
    position: 'Web Developer',
    img: client_1,
    rating: 2.5,
    review:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
    social_link: [
      {
        id: 1,
        link: '#',
        icon: 'ri-facebook-fill',
      },
      {
        id: 2,
        link: '#',
        icon: 'ri-instagram-line',
      },
      {
        id: 3,
        link: '#',
        icon: 'ri-linkedin-fill',
      },
    ],
  },
  {
    id: 2,
    name: 'Jacob Daniels',
    position: 'Engineer',
    img: client_2,
    rating: 5,
    review:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
    social_link: [
      {
        id: 1,
        link: '#',
        icon: 'ri-facebook-fill',
      },
      {
        id: 2,
        link: '#',
        icon: 'ri-instagram-line',
      },
      {
        id: 3,
        link: '#',
        icon: 'ri-linkedin-fill',
      },
    ],
  },
  {
    id: 3,
    name: 'Aloin Lden',
    position: 'Web Developer',
    img: client_3,
    rating: 5,
    review:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
    social_link: [
      {
        id: 1,
        link: '#',
        icon: 'ri-facebook-fill',
      },
      {
        id: 2,
        link: '#',
        icon: 'ri-instagram-line',
      },
      {
        id: 3,
        link: '#',
        icon: 'ri-linkedin-fill',
      },
    ],
  },
  {
    id: 4,
    name: 'Aloin Lden',
    position: 'Web Developer',
    img: client_1,
    rating: 5,
    review:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
    social_link: [
      {
        id: 1,
        link: '#',
        icon: 'ri-facebook-fill',
      },
      {
        id: 2,
        link: '#',
        icon: 'ri-instagram-line',
      },
      {
        id: 3,
        link: '#',
        icon: 'ri-linkedin-fill',
      },
    ],
  },
];

const Testimonial = () => {
  const swiperRefs = {
    testimonial: useRef(),
    team: useRef(),
  };

  const handleSlidePrev = () => {
    swiperRefs.testimonial.current?.slidePrev();
    swiperRefs.team.current?.slidePrev();
  };

  const handleSlideNext = () => {
    swiperRefs.testimonial.current?.slideNext();
    swiperRefs.team.current?.slideNext();
  };

  return (
    <div className='testimonial-section ptb-100'>
      <div className='container'>
        <div className='banner-area no-background text-center pt-0'>
          <span className='banner-top-title'>Testimonials</span>
        </div>
        <h2 className='text-center pb-5 w-50 mx-auto'>
          What Our Clients Say About Us
        </h2>

        <TeamComponent
          parentClass={'pt-0 pb-100'}
          data={testimonialData}
          swiperRef={swiperRefs.team}
        />

        <div className='d-flex align-items-center justify-content-between navigation mt-3'>
          <div onClick={handleSlidePrev}>
            <i className='ri-arrow-left-line' />
          </div>
          <div onClick={handleSlideNext}>
            <i className='ri-arrow-right-line' />
          </div>
        </div>

        <div className='testimonial-area ptb-100'>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop
            onBeforeInit={(swiper) => {
              swiperRefs.testimonial.current = swiper;
            }}
            className='image-courser'
            modules={[Navigation]}
          >
            {testimonialData.map(({ id, position, rating, review, name }) => (
              <SwiperSlide key={id}>
                <TestimonialCard
                  position={position}
                  name={name}
                  rating={rating}
                  review={review}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {testimonialData.map(({ id, img }) => {
            return (
              <div key={id} className='user'>
                <img src={img} alt='image' />
              </div>
            );
          })}
        </div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
      </div>
    </div>
  );
};

export default Testimonial;
