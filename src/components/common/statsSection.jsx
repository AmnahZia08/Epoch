import React from 'react';
import AboutUs from '../../assets/img/about-us.png';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    { value: '1.5M', description: 'New visitors every month.' },
    { value: '49%', description: 'Extra conversion on any niche.' },
    { value: '$2M', description: 'Extra saved by customers.' },
    { value: '93%', description: 'Success rate on last 05 years.' },
  ];

  return (
    <div className='stats-area ptb-100 position-relative'>
      <div
        className='section-gradient section-gradient-right'
        style={{ bottom: '100px' }}
      />
      <div className='container'>
        <motion.div
          className='position-relative'
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          viewport={{ once: true }}
        >
          <div className='image-container'>
            <div className='image'>
              <img src={AboutUs} alt='image' />
            </div>
          </div>
          <div className='row text-center pt-5'>
            {stats.map((stat, index) => (
              <div key={index} className='col-lg-3 col-md-6 mb-4'>
                <h6 className='grd-color-1 stat-value'>{stat.value}</h6>
                <p className='stat-description'>{stat.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsSection;
