import React, { forwardRef, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import TeamCard from './common/teamCard';

const TeamComponent = forwardRef(
  ({ parentClass = '', data, swiperRef = null }, ref) => {
    const localSwiperRef = useRef();

    const handlePrevSlide = () => {
      localSwiperRef.current?.slidePrev();
    };

    const handleNextSlide = () => {
      localSwiperRef.current?.slideNext();
    };

    return (
      <div className={`team-area pt-100 ${parentClass}`} ref={ref}>
        <div className='container'>
          <motion.div
            className='position-relative'
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}
          >
            <Swiper
              spaceBetween={30}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
              }}
              onBeforeInit={(swiper) => {
                if (swiperRef) {
                  swiperRef.current = swiper;
                } else {
                  localSwiperRef.current = swiper;
                }
              }}
              loop
              className='image-courser'
              noSwipingClass={swiperRef ? 'no-swipe' : ''}
            >
              {data.map(({ id, img, name, position, social_link }) => (
                <SwiperSlide key={id} className={swiperRef ? 'no-swipe' : ''}>
                  <TeamCard
                    img={img}
                    name={name}
                    position={position}
                    social_link={social_link}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {!swiperRef && (
              <div className='d-flex align-items-center justify-content-between navigation mt-3'>
                <div onClick={handlePrevSlide}>
                  <i className='ri-arrow-left-line' />
                </div>
                <div onClick={handleNextSlide}>
                  <i className='ri-arrow-right-line' />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    );
  },
);

export default TeamComponent;
