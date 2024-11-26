import React from 'react';
import FeatureCardRow from './featureCardRow';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const Strategies = () => {
  return (
    <div className='strategies-area ptb-100 position-relative overflow-x-hidden'>
      <div
        className='section-gradient section-gradient-right'
        style={{ bottom: '20px' }}
      />
      <div className='container'>
        <motion.div
          className='position-relative'
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          viewport={{ once: true }}
        >
          <div className='heading-area d-flex justify-content-between'>
            <h2 className='grd-color-1 col-lg-6'>
              AI-Powered Strategies for Modern Business
            </h2>
            <p className='col-lg-5'>
              Accelerate business success with AI consulting for faster, better
              results than traditional methods.
            </p>
          </div>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=JLnycPtolfw'
            controls={true}
            playing={false}
            volume={0.8}
            width={'100%'}
          />
          <FeatureCardRow />
        </motion.div>
      </div>
    </div>
  );
};

export default Strategies;
