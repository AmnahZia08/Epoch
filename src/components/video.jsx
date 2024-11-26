import React from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

const Video = ({ url, fullWidth = flase }) => {
  return (
    <div className='ptb-100 d-flex justify-content-center'>
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
          width={fullWidth ? '100vw' : '90vw'}
        />
      </motion.div>
    </div>
  );
};

export default Video;
