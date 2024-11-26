import React from 'react'
import PageHeader from '../components/common/pageHeader'
import About from '../components/about'
import Testimonial from '../components/testimonial'
import Brands from '../components/brands'
import InstagramGallery from '../components/instagramGallery'
import { ScrollRestoration } from 'react-router-dom'
import { strings } from '../locales';
import StatsSection from '../components/common/statsSection';

const AboutUs = () => {
  const { title, desc } = strings.aboutUs;
  return (
    <>
      <PageHeader title={title} desc={desc} />
      <StatsSection />
      <About direction='ltr' showButton />
      <Brands />
      <InstagramGallery />
      <Testimonial />
      <ScrollRestoration />
    </>
  );
};

export default AboutUs