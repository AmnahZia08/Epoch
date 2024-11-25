import React from 'react';
import PageHeader from '../components/common/pageHeader';
import { strings } from '../locales';
import TechnologiesAndTools from '../components/technologiesAndTools';
import Services from '../components/services';
import Brands from '../components/brands';
import About from '../components/about';
import CustomModelImage from '../assets/img/custom-model.png';
import ContactUs from '../components/contactUs';
import WhyUs from '../components/whyUs';
import { ScrollRestoration } from 'react-router-dom';

const MLModelDevelopment = () => {
  const {
    MLModelDevelopment: { subRoute },
  } = strings;
  return (
    <>
      <PageHeader subRoute={subRoute} />
      <Services />
      <About heading={subRoute} image={CustomModelImage} />
      <Brands />
      <TechnologiesAndTools />
      <WhyUs />
      <ContactUs />
      <ScrollRestoration />
    </>
  );
};

export default MLModelDevelopment;
