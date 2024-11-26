import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { strings } from '../../locales';

const QuerySection = () => {
  const {
    getStarted,
    footer: { querySection },
  } = strings;

  return (
    <div className='ptb-100'>
      <div className='container d-flex'>
        <div className='query-section-content'>
          <h6 className='query-section-title'>{querySection.title}</h6>
          <p className='query-section-desc'>{querySection.desc}</p>
          <div className='d-flex align-items-start mt-5 gap-2'>
            <input
              type='email'
              className='form-control query-section-input'
              placeholder='Enter Your Email'
              aria-label='Email'
            />
            <button className='btn btn-primary pt-3 pb-3'>{getStarted}</button>
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
