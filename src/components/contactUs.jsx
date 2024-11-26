import React from 'react';

const ContactUs = () => {
  return (
    <section className='contact-area ptb-100'>
      <div className='container'>
        <div className='section-title-center'>
          <h2>Contact Us</h2>
        </div>
        <div className='contact-form'>
          <form id='contactForm'>
            <div className='row'>
              <div className='col-lg-6 col-md-6'>
                <div className='form-group'>
                  <input
                    type='text'
                    name='name'
                    className='form-control'
                    required
                    placeholder='Your Name'
                  />
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='form-group'>
                  <input
                    type='email'
                    name='email'
                    className='form-control'
                    required
                    placeholder='Your Email'
                  />
                </div>
              </div>
              <div className='col-lg-12 col-md-12'>
                <div className='form-group'>
                  <textarea
                    name='message'
                    className='form-control'
                    required
                    placeholder='Your Message'
                  ></textarea>
                </div>
              </div>
              <div className=''>
                <button type='submit' className='btn btn-primary'>
                  <span className='btn-text'>Send Message</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
