import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { strings } from '../../locales';

const PageHeader = ({ title, desc, subRoute = '' }) => {
  const { pathname } = useLocation();

  return (
    <div className='container section-banner d-flex flex-column justify-content-center align-items-center text-center'>
      {!!subRoute ? (
        <div class='banner-area no-background'>
          <span class='banner-top-title'>{subRoute}</span>
        </div>
      ) : null}
      <h1 className='grd-color-1 text-uppercase'>
        {title || strings.pageHeaderTitle}
      </h1>
      <p className='w-75'>{desc || strings.pageHeaderDesc}</p>

      {pathname !== '/contact' ? (
        <div className='cta'>
          <Link to='/about-us' className='default-btn me-2'>
            Find Out More
          </Link>
          <Link to='/book-appointment' className='default-btn btn-secondary'>
            Get Started
          </Link>
        </div>
      ) : null}
      {/* // Add button and image */}
    </div>
  );
};

export default PageHeader;
