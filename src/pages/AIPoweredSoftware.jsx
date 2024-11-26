import React from 'react';
import PageHeader from '../components/common/pageHeader';
import { strings } from '../locales';
import ContactUs from '../components/contactUs';
import Brands from '../components/brands';
import TechnologiesAndTools from '../components/technologiesAndTools';
import About from '../components/about';
import Services from '../components/services';
import AISoftwareImage from '../assets/img/ai-software.png';
import WhyUs from '../components/whyUs';
import { ScrollRestoration } from 'react-router-dom';
import Video from '../components/video';

const AIPoweredSoftware = () => {
  const { title, subRoute, offersHeading } = strings.AISoftware;
  return (
    <>
      <PageHeader subRoute={subRoute} title={title} />
      <Video url='https://www.youtube.com/watch?v=JLnycPtolfw' />
      <Services />
      <About heading={offersHeading} image={AISoftwareImage} />
      <Brands />
      <TechnologiesAndTools />
      <WhyUs />
      <ContactUs />
      <ScrollRestoration />
    </>
  );
};

export default AIPoweredSoftware;
