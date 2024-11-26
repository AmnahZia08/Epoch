import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const servicesData = [
  {
    title: 'Identify The Issue',
    description:
      'Business consulting powered by precise AI insights, bringing better decisions and bigger results.',
    link: '/identify-the-issue',
  },
  {
    title: 'Develop A Prototype',
    description:
      'Tailored AI models designed to meet your specific business needs, ensuring optimal performance and results.',
    link: '/develop-a-prototype',
  },
  {
    title: 'Develop The Application',
    description:
      'Tailored AI models designed to meet your specific business needs, ensuring optimal performance and results.',
    link: '/develop-the-application',
  },
  {
    title: 'Test Through Simulation',
    description:
      'Comprehensive ERP systems developed to streamline your operations and improve overall business management.',
    link: '/test-through-simulation',
  },
  {
    title: 'Launch (Go-Live)',
    description:
      'Continuous support and optimization services to ensure your AI solutions remain effective and up-to-date.',
    link: '/launch-go-live',
  },
  {
    title: 'Support And Optimize',
    description:
      'Advanced software solutions powered by AI, designed to enhance efficiency, drive innovation, and provide a competitive edge.',
    link: '/support-and-optimize',
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='services-area ptb-100'>
      <div className='container'>
        <motion.div
          className='position-relative'
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          viewport={{ once: true }}
        >
          <div className='row'>
            {servicesData.map((service, index) => (
              <div className='col-lg-4 col-md-6 mb-4' key={index}>
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`single-services-box p-4 ${hoveredIndex === index ? 'gradient-border' : ''}`}
                >
                  <h3 className='mb-3 mt-2'>{service.title}</h3>
                  <p>{service.description}</p>
                  <NavLink to={service.link} className='btn btn-primary'>
                    <span className='btn-text'>Learn More</span>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
