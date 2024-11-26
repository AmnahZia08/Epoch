import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { strings } from '../../locales';

const PageHeader = ({ title, desc, subRoute = '' }) => {
  const { pathname } = useLocation();

  return (
    <div className='container section-banner d-flex flex-column justify-content-center align-items-center text-center'>
      {!!subRoute ? (
        <div className='banner-area no-background'>
          <span className='banner-top-title'>{subRoute}</span>
        </div>
      ) : null}
      <h1 className='grd-color-1 text-uppercase'>
        {title || strings.pageHeaderTitle}
      </h1>
      <p className='w-75'>{desc || strings.pageHeaderDesc}</p>

      {pathname !== '/contact' ? (
        <div className='cta gap-3'>
          <Link to='/about' className='btn btn-primary'>
            <span class='btn-text'>Find Out More</span>
          </Link>
          <Link to='/book-appointment' className='btn btn-secondary'>
            Get Started
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default PageHeader;
