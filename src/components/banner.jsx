import React from 'react';
import man from '../assets/img/mannnnn.png';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className='banner-area overflow-hidden vh-100'>
      <div className='container-fluid h-100 d-flex'>
        <div className='row align-items-center g-0' style={{ margin: 'auto' }}>
          <div className='col-lg-6'>
            <div className='content'>
              <span className='banner-top-title'>
                Custom Solutions, Limitless Growth
              </span>
              <h1>
                <span className='grd-color-1'>EPOCH</span> AI
              </h1>
              <p>
                Transform your business with our tailored AI, ERP, and website
                solutions. Enhance efficiency, drive innovation, and stay ahead
                of the competition.
              </p>
              <div>
                <Link
                  to='/custom-model-development'
                  className='btn btn-primary me-2 mb-2'
                >
                  <span className='btn-text'>Find More</span>
                </Link>
                <Link to='/contact' className='btn btn-secondary mb-2'>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg-6 globe'>
            <div className='globe-image'>
              <img src={man} alt='image' />
            </div>
          </div>
        </div>
        <div className='scroll-down'>
          <Link>
            <div className='mouse'></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
