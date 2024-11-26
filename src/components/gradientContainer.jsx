import React from 'react';

const GradientContainer = ({ component, position }) => {
  return (
    <div className='position-relative w-100 h-100 ptb-100'>
      <div
        className='position-absolute'
        style={{
          zIndex: 0,
        }}
      />
      <div
        className='position-absolute w-100 h-100 d-flex justify-content-center align-items-center'
        style={{ zIndex: 1, top: position }}
      >
        <div className='outer_circle'>
          <div className='inner_circle' />
        </div>
      </div>

      <div className='position-relative' style={{ zIndex: 2 }}>
        {component}
      </div>
    </div>
  );
};

export default GradientContainer;
