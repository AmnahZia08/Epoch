import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { strings } from '../locales';
import AboutCard from '../assets/img/about-card.png';

const About = ({
  heading,
  subHeading,
  description,
  image,
  direction = 'rtl',
  showButton = false,
  showGradient,
}) => {
  const staticText = strings.offer;

  const flexDirectionStyle = {
    flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
  };

  return (
    <div className='about-area ptb-100 position-relative'>
      {showGradient ? (
        <div
          className='section-gradient section-gradient-left'
          style={{ bottom: '100px' }}
        />
      ) : null}
      <div className='container'>
        <motion.div
          className='row align-items-center'
          initial={{
            opacity: 0,
            y: 200,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          style={flexDirectionStyle}
        >
          <div className='col-lg-6'>
            <div className='image'>
              <img src={image || AboutCard} alt='Section Heading' />
            </div>
            {!showGradient ? (
              <div
                className='section-gradient'
                style={{ bottom: '250px', right: '180px' }}
              />
            ) : null}
          </div>
          <div className='col-lg-6'>
            <div
              className={`content ${showButton ? '' : ' d-flex flex-column justify-content-around'}`}
            >
              <div>
                <div className='banner-area no-background pt-0'>
                  <span className='banner-top-title'>
                    {subHeading || staticText.title}
                  </span>
                </div>

                <h2 className={`${showButton ? '' : 'mb-5'}`}>
                  {heading || staticText.heading}
                </h2>
              </div>
              <p>{description || staticText.desc}</p>
              {showButton ? (
                <Link className='btn btn-primary' to='/about'>
                  <span className='btn-text'>Learn More</span>
                </Link>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
