import React from 'react';
import QuerySection from './QuerySection';
import LegalAndLinks from './LegalAndLinks';
import BlogsComponent from '../../components/blogsComponent';

const Footer = () => {
  return (
    <div>
      <BlogsComponent />
      <QuerySection />
      <LegalAndLinks />
    </div>
  );
};

export default Footer;
