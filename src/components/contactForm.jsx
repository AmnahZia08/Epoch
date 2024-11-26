import React from 'react'
import contact_img from '../assets/img/contact.png';
const ContactForm = () => {
  return (
    <div className='contact-area ptb-100'>
      <div className='container d-flex'>
        <div className='col-lg-6'>
          <div className='section-title'>
            <div className='width'>
              <div className='banner-area no-background pt-0'>
                <span className='banner-top-title'>Contact</span>
              </div>
              <h2>Join Our Network</h2>
              <p>
                We’d love to have you! Join our 100% remote network of creator &
                freelancers.
              </p>
            </div>
          </div>
          <div className='contact-form'>
            <form id='contactForm'>
              <div className='row mb-4'>
                <div className='col-lg-12 col-md-12'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='name'
                      required
                      data-error='Please enter your name'
                      placeholder='Your Name'
                    />
                    <div className='help-block with-errors'></div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='email'
                      className='form-control'
                      id='email'
                      required
                      data-error='Please enter your Email Address'
                      placeholder='Email Address'
                    />
                    <div className='help-block with-errors'></div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='subject'
                      className='form-control'
                      id='subject'
                      required
                      data-error='Please enter your subject'
                      placeholder='Subject'
                    />
                    <div className='help-block with-errors'></div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='phone_number'
                      className='form-control'
                      id='phone_number'
                      required
                      data-error='Please enter your phone number'
                      placeholder='Phone Number'
                    />
                    <div className='help-block with-errors'></div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12 mb-5'>
                  <div className='form-group'>
                    <textarea
                      name='message'
                      id='message'
                      className='form-control no-resize'
                      cols='30'
                      rows='6'
                      required
                      data-error='Please enter your message'
                      placeholder='Write Your Message'
                    />
                    <div className='help-block with-errors'></div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <button type='submit' className='btn btn-primary'>
                    <span className='btn-text'>Submit</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='col-lg-6 image-container'>
          <div className='image' style={{ height: '85%' }}>
            <img src={contact_img} alt='image' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm