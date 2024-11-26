import React from 'react';

const TechnologiesAndTools = () => {
  const technologies = [
    {
      label: 'TensorFlow',
      description:
        'A powerful open-source platform for building machine learning models.',
    },
    {
      label: 'PyTorch',
      description:
        'An open-source machine learning library used for applications such as computer vision and natural language processing.',
    },
    {
      label: 'Scikit-learn',
      description:
        'A simple and efficient tool for data mining and data analysis, built on NumPy, SciPy, and Matplotlib.',
    },
    {
      label: 'Keras',
      description:
        'A high-level neural networks API, written in Python and capable of running on top of TensorFlow, CNTK, or Theano.',
    },
  ];

  return (
    <div className='tech-section ptb-100'>
      <div className='position-relative' style={{ top: '400px', zIndex: 0 }}>
        <div className='outer_circle'>
          <div className='inner_circle' />
        </div>
      </div>
      <div className='container'>
        <h2 className='text-center pb-5'>Technologies and Tools</h2>

        <div className='row justify-content-center gap-4'>
          {technologies.map((tech, index) => (
            <div
              key={index}
              className='col-lg-3 col-md-6 box__bg gradient-border text-center d-flex flex-column align-items-center p-4 justify-content-start'
            >
              <h4 className='mb-5 mt-2'>{tech.label}</h4>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesAndTools;
