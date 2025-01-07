import React from 'react';
import Banner from './components/banner';
import Services from './components/services';
import About from './components/about';
import Brands from './components/brands';
import Testimonial from './components/testimonial';
import { ScrollRestoration } from 'react-router-dom';
import { strings } from './locales';
import Strategies from './components/strategies';
import GradientContainer from './components/gradientContainer';

const services = [
  {
    title: 'Product-Driven Innovative Outcomes',
    description:
      'Business consulting powered by precise AI insights, bringing better decisions and bigger results.',
  },
  {
    title: 'Custom Model Development',
    description:
      'Tailored AI models designed to meet your specific business needs, ensuring optimal performance and results.',
    link: '/',
  },
  {
    title: 'Highly Specialized AI-Powered Software',
    description:
      'Tailored AI models designed to meet your specific business needs, ensuring optimal performance and results.',
    link: '/',
  },
  {
    title: 'ERP Development',
    description:
      'Tailored AI models designed to meet your specific business needs, ensuring optimal performance and results.',
    link: '/',
  },
  {
    title: 'Ongoing Support & Optimization',
    description:
      'Tailored AI models designed to meet your specific business needs, ensuring optimal performance and results.',
    link: '/',
  },
];

const Home = () => {
  const { imageCard } = strings.aboutUs;
  return (
    <>
      <Banner />
      <GradientContainer
        zIndex={-100}
        position={'-350px'}
        component={
          <About
            direction='ltr'
            showButton
            heading={imageCard.heading}
            subHeading={imageCard.subHeading}
            description={imageCard.desc}
            showGradient={true}
          />
        }
      />
      <Services data={services} />
      <Brands />
      <Strategies />
      <Testimonial />
      <ScrollRestoration />
    </>
  );
};

export default Home;
