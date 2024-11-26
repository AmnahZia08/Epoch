import React from 'react';
import PageHeader from '../components/common/pageHeader';
import { strings } from '../locales';
import WhyUs from '../components/whyUs';
import Services from '../components/services';
import About from '../components/about';
import Brands from '../components/brands';
import TechnologiesAndTools from '../components/technologiesAndTools';
import ContactUs from '../components/contactUs';
import SupportImage from '../assets/img/ongoing-support.png';
import { ScrollRestoration } from 'react-router-dom';
import Video from '../components/video';

const SupportAndOptimization = () => {
  const { subRoute } = strings.SupportAndOptimization;
  return (
    <>
      <PageHeader subRoute={subRoute} />
      <Video url='https://www.youtube.com/watch?v=JLnycPtolfw' />
      <Services />
      <About heading={subRoute} image={SupportImage} />
      <Brands />
      <TechnologiesAndTools />
      <WhyUs />
      <ContactUs />
      <ScrollRestoration />
    </>
  );
};

export default SupportAndOptimization;
