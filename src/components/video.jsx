import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import { ReactSVG } from 'react-svg';
import PlayIcon from '../assets/svg/play.svg';
import PlaceholderImage from '../assets/img/video-placeholder-2.png';

const Video = ({ url, placeholder }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  return (
    <div className='ptb-100 d-flex justify-content-center position-relative'>
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
          playing={isPlaying}
          volume={0.8}
          width='90vw'
          height={'585px'}
          light={
            <img
              src={placeholder ? placeholder : PlaceholderImage}
              alt='Thumbnail'
            />
          }
          playIcon={
            <div
              onClick={handlePlayClick}
              className='position-absolute top-50 start-50 translate-middle'
              style={{ cursor: 'pointer', zIndex: 10 }}
            >
              <ReactSVG src={PlayIcon} />
            </div>
          }
        />
      </motion.div>
    </div>
  );
};

export default Video;
