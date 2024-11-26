import React from 'react';
import Video from './video';
import FeatureCardRow from './featureCardRow';
import { motion } from 'framer-motion';

const Strategies = () => {
  return (
    <div className='strategies-area ptb-100'>
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
          <Video
            url='https://www.youtube.com/watch?v=JLnycPtolfw'
            fullWidth={true}
          />
          <FeatureCardRow />
        </motion.div>
      </div>
    </div>
  );
};

export default Strategies;
