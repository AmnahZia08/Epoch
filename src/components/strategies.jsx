import React, { useState } from 'react';
import FeatureCardRow from './featureCardRow';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import { ReactSVG } from 'react-svg';
import PlayIcon from '../assets/svg/play.svg';

const Strategies = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className='strategies-area ptb-100 position-relative'>
      <div
        className='section-gradient section-gradient-right'
        style={{ bottom: '20px' }}
      />
      <motion.div
        className='position-relative'
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <div className='container-fluid'>
          <div className='heading-area d-flex justify-content-between mb-4'>
            <h2 className='grd-color-1 col-lg-6'>
              AI-Powered Strategies for Modern Business
            </h2>
            <p className='col-lg-5'>
              Accelerate business success with AI consulting for faster, better
              results than traditional methods.
            </p>
          </div>
        </div>
        <div className='position-relative mx-auto'>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=JLnycPtolfw'
            controls={true}
            playing={isPlaying}
            volume={0.8}
            width='100%'
          />

          {!isPlaying && (
            <div
              onClick={handlePlayClick}
              className='position-absolute top-50 start-50 translate-middle'
              style={{ cursor: 'pointer', zIndex: 10 }}
            >
              <ReactSVG src={PlayIcon} />
            </div>
          )}
        </div>

        <FeatureCardRow />
      </motion.div>
    </div>
  );
};

export default Strategies;
