import React from 'react';
import PageHeader from '../components/common/pageHeader';
import { strings } from '../locales';

const AIPoweredSoftware = () => {
  const { title, subRoute } = strings.AISoftware;
  return (
    <>
      <PageHeader subRoute={subRoute} title={title} />

      <div>
        {/* Hero Section */}
        <section className='banner-area'>
          <div className='container-fluid'>
            <div className='content'>
              <span className='banner-top-title'>Expert AI Solutions</span>
              <h1>Transform Your Business With AI-Powered Software</h1>
              <p>
                Unlock the potential of AI to drive innovation and efficiency in
                your daily business operations.
              </p>
              <a href='/contact' className='default-btn'>
                Get a Free Consultation <i className='icon-arrow-right'></i>
              </a>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className='about-area ptb-100'>
          <div className='container'>
            <div className='content'>
              <div className='tp-title'>What We Offer</div>
              <h2>Comprehensive AI Software Development</h2>
              <p>
                As AI continues to reshape industries, having specialized
                AI-powered software is becoming increasingly crucial for
                businesses looking to stay competitive. At Epoch AI, we offer
                advanced AI software solutions that integrate seamlessly with
                your existing systems, bringing cutting-edge technology to your
                daily operations. Whether it’s automating routine tasks,
                enhancing decision-making, or providing deep data analysis, our
                AI-powered software is designed to transform the way you do
                business.
              </p>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className='fetuses-area ptb-100 section-bg'>
          <div className='container'>
            <div className='section-title-center'>
              <h2>Our Services</h2>
            </div>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='single-fetuses-box'>
                  <div className='icon'>
                    <i className='icon-consultation'></i>
                  </div>
                  <h3>Automation</h3>
                  <p>
                    Our software automates repetitive tasks, allowing your team
                    to focus on more strategic activities. This includes
                    everything from scheduling and email responses to data
                    entry, significantly reducing the time and effort required
                    for routine tasks.
                  </p>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='single-fetuses-box'>
                  <div className='icon'>
                    <i className='icon-development'></i>
                  </div>
                  <h3>Machine Learning</h3>
                  <p>
                    We integrate machine learning algorithms that analyze data
                    trends, identify patterns, and make predictions. This
                    capability is invaluable for applications such as market
                    research, inventory management, financial forecasting, and
                    customer behavior analysis.
                  </p>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='single-fetuses-box'>
                  <div className='icon'>
                    <i className='icon-deployment'></i>
                  </div>
                  <h3>Data Analysis</h3>
                  <p>
                    Our AI software is capable of processing and analyzing large
                    datasets quickly and accurately. By leveraging predictive
                    analytics, you can forecast trends, optimize inventory, and
                    make informed decisions that drive business growth.
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='single-fetuses-box'>
                  <div className='icon'>
                    <i className='icon-consultation'></i>
                  </div>
                  <h3>Decision-Making Support</h3>
                  <p>
                    With AI-driven insights, our software helps you make better
                    business decisions by identifying risks, opportunities, and
                    optimal solutions. This feature provides personalized
                    experiences for businesses, ensuring that every decision is
                    backed by solid data.
                  </p>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='single-fetuses-box'>
                  <div className='icon'>
                    <i className='icon-development'></i>
                  </div>
                  <h3>Risk Management</h3>
                  <p>
                    Our AI software enhances security by detecting and
                    preventing fraudulent activities. By analyzing patterns in
                    banking, finance, and other sensitive areas, it helps manage
                    risks and respond to security threats proactively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className='pricing-area ptb-100'>
          <div className='container'>
            <div className='section-title-center'>
              <h2>Technologies and Tools</h2>
            </div>
            <div className='row'>
              <div className='col-lg-3'>
                <div className='card'>
                  <div className='card_title'>TensorFlow</div>
                  <p>
                    A powerful open-source software library for machine learning
                    and AI development.
                  </p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='card'>
                  <div className='card_title'>PyTorch</div>
                  <p>
                    An open-source machine learning framework that accelerates
                    the path from research prototyping to production deployment.
                  </p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='card'>
                  <div className='card_title'>Python</div>
                  <p>
                    Used extensively for developing custom AI modules and
                    integrations.
                  </p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='card'>
                  <div className='card_title'>JavaScript</div>
                  <p>
                    Enabling dynamic and interactive features in our AI
                    solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
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
                  <div className='col-lg-12 col-md-12 text-center'>
                    <button type='submit' className='default-btn'>
                      Send Message <i className='icon-arrow-right'></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPoweredSoftware;
