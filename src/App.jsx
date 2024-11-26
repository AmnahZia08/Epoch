import React from 'react';
import Banner from './components/banner';
import Services from './components/services';
import About from './components/about';
import Brands from './components/brands';
import Testimonial from './components/testimonial';
import BlogsComponent from './components/blogsComponent';
import { ScrollRestoration } from 'react-router-dom';
import { strings } from './locales';
import Strategies from './components/strategies';

const Home = () => {
  const { imageCard } = strings.aboutUs;
  return (
    <>
      <Banner />
      <About
        direction='ltr'
        showButton
        heading={imageCard.heading}
        subHeading={imageCard.subHeading}
        description={imageCard.desc}
      />
      <Services />
      <Brands />
      <Strategies />
      <Testimonial />
      <ScrollRestoration />
    </>
  );
};

export default Home;
