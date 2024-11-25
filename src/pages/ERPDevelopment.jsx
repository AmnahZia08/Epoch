import React from 'react';
import PageHeader from '../components/common/pageHeader';
import { strings } from '../locales';
import WhyUs from '../components/whyUs';
import Services from '../components/services';
import About from '../components/about';
import Brands from '../components/brands';
import TechnologiesAndTools from '../components/technologiesAndTools';
import ContactUs from '../components/contactUs';
import ERPDevelopmentImage from '../assets/img/erp-development.png';
import { ScrollRestoration } from 'react-router-dom';

const ERPDevelopment = () => {
  const { subRoute } = strings.ERPDevelopment;
  return (
    <>
      <PageHeader subRoute={subRoute} />
      <Services />
      <About heading={subRoute} image={ERPDevelopmentImage} />
      <Brands />
      <TechnologiesAndTools />
      <WhyUs />
      <ContactUs />
      <ScrollRestoration />
    </>
  );
};

export default ERPDevelopment;
