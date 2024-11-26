import React from 'react'
import PageHeader from '../components/common/pageHeader'
import About from '../components/about'
import Testimonial from '../components/testimonial'
import Brands from '../components/brands';
import { ScrollRestoration } from 'react-router-dom'
import { strings } from '../locales';
import StatsSection from '../components/common/statsSection';

const AboutUs = () => {
  const { title, desc, imageCard } = strings.aboutUs;
  return (
    <>
      <PageHeader title={title} desc={desc} />
      <StatsSection />
      <About
        direction='ltr'
        showButton
        heading={imageCard.heading}
        subHeading={imageCard.subHeading}
        description={imageCard.desc}
        showGradient
      />
      <Brands />
      <Testimonial />
      <ScrollRestoration />
    </>
  );
};

export default AboutUs