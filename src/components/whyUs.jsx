import React from 'react';
import { motion } from 'framer-motion';
import WhyUsSlider from './whyUsSlider';
import WhyUsImage from '../assets/img/whyus.png';

const features = [
  {
    title: 'Cutting-Edge AI Technology',
    description:
      'Using AI and machine learning, we offer precise, timely insights tailored to your business needs.',
    image: WhyUsImage,
  },
  {
    title: 'Cutting-Edge AI Technology',
    description:
      'Using AI and machine learning, we offer precise, timely insights tailored to your business needs.',
    image: WhyUsImage,
  },
  {
    title: 'Cutting-Edge AI Technology',
    description:
      'Using AI and machine learning, we offer precise, timely insights tailored to your business needs.',
    image: WhyUsImage,
  },
];

const WhyUs = () => {
  return (
    <div className='reasons-area ptb-100 position-relative overflow-x-hidden'>
      <div className='section-gradient section-gradient-right' />
      <div
        className='section-gradient section-gradient-left'
        style={{ bottom: '100px' }}
      />
      <div className='container'>
        <motion.div
          className='position-relative'
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          viewport={{ once: true }}
        >
          <div className='heading-area d-flex justify-content-between'>
            <h2 className='col-lg-6'>Why Should You Choose Us</h2>
            <div className='col-lg-5'>
              <p className='colored-text'>Human Expertise, AI Efficiency</p>
              <p>
                Our approach to custom-model development is rooted in
                understanding that no two businesses are alike. We take the time
                to understand your specific challenges, operational workflows,
                and business goals to create models that integrate seamlessly
                with your existing systems.
              </p>
            </div>
          </div>
          <WhyUsSlider data={features} />
          <WhyUsSlider data={features} />
          <WhyUsSlider data={features} />
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUs;
