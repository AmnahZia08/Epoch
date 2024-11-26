import React from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

const Video = ({ url }) => {
  return (
    <div className='ptb-100 d-flex justify-content-center position-relative overflow-x-hidden'>
      <div
        className='section-gradient section-gradient-right'
        style={{ bottom: '20px' }}
      />
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <ReactPlayer
          url={url}
          controls={true}
          playing={false}
          volume={0.8}
          width='90vw'
        />
      </motion.div>
    </div>
  );
};

export default Video;
