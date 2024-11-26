import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { strings } from '../../locales';
import { Link } from 'react-router-dom';

const QuerySection = () => {
  const {
    getStarted,
    footer: { querySection },
  } = strings;

  return (
    <div className='ptb-100'>
      <div className='container-fluid d-flex'>
        <div className='query-section-content'>
          <h6 className='query-section-title'>{querySection.title}</h6>
          <p className='query-section-desc'>{querySection.desc}</p>
          <div className='d-flex align-items-center mt-5 gap-2'>
            <input
              type='email'
              className='form-control query-section-input'
              placeholder='Enter Your Email'
              aria-label='Email'
            />
            <Link className='btn btn-primary'>
              <span className='btn-text'>{getStarted}</span>
            </Link>
          </div>
        </div>
        <h1 className='query-section-logo'>
          <span className='grd-color-1'>EPOCH</span> AI
        </h1>
      </div>
    </div>
  );
};

export default QuerySection;
