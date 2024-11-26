import React from 'react';

const WhyUs = () => {
  return (
    <section className='about-area ptb-100'>
      <div className='container'>
        <div className='section-title-center'>
          <h2>Why Choose Us</h2>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='content'>
              <h3>Expertise</h3>
              <p>
                Our team comprises experienced ERP developers with extensive
                knowledge of Odoo and ERPNext.
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='content'>
              <h3>Customized Solutions</h3>
              <p>
                We tailor our ERP solutions to meet the specific needs of your
                business, ensuring maximum impact.
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='content'>
              <h3>Client Satisfaction</h3>
              <p>
                We prioritize client satisfaction and strive to deliver
                solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
