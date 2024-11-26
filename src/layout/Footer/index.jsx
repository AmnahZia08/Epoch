import React from 'react';
import QuerySection from './QuerySection';
import LegalAndLinks from './LegalAndLinks';
import BlogsComponent from '../../components/blogsComponent';

const Footer = () => {
  return (
    <div className='position-relative overflow-x-hidden'>
      <div
        className='section-gradient section-gradient-right'
        style={{ top: '200px' }}
      />
      <div
        className='section-gradient section-gradient-left'
        style={{ bottom: '500px' }}
      />
      <BlogsComponent />
      <QuerySection />
      <LegalAndLinks />
    </div>
  );
};

export default Footer;
