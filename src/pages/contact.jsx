import React from 'react'
import PageHeader from '../components/common/pageHeader'
import ContactForm from '../components/contactForm'
import InstagramGallery from '../components/instagramGallery'
import { ScrollRestoration } from 'react-router-dom'
import { strings } from '../locales';
import Brands from '../components/brands';

const Contact = () => {
  const { title, desc } = strings.contactUs;
  return (
    <>
      <PageHeader title={title} desc={desc} />
      <ContactForm />
      <Brands />
      <ScrollRestoration />
    </>
  );
};

export default Contact