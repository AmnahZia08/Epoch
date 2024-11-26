import React from 'react';
import PageHeader from '../components/common/pageHeader';
import { strings } from '../locales';

const MLModelDevelopment = () => {
  const { subRoute } = strings.MLModelDevelopment;
  return (
    <>
      <PageHeader subRoute={subRoute} />
      <div>
        {/* Hero Section */}
        <section className='banner-area'>
          <div className='container-fluid'></div>
        </section>

        {/* Introduction */}
        <section className='about-area ptb-100'>
          <div className='container'>
            <div className='content'>
              <div className='tp-title'>What We Offer</div>
              <h2>Custom Model Development</h2>
              <p>
                In today’s dynamic business environment, the need for software
                and operational models that perfectly align with unique business
                challenges is more critical than ever. At Epoch AI, our
                custom-model development services are not limited to AI but
                encompass a wide range of customized solutions designed to meet
                the specific needs of your business. Whether you require
                advanced data models, predictive analytics, workflow automation,
                or bespoke software solutions, our team is equipped to deliver
                models that drive efficiency and innovation.
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
                  <h3>Identify the Issue</h3>
                  <p>
                    We begin by understanding your unique challenges to ensure
                    our solution integrates seamlessly with your existing
                    systems.
                  </p>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='single-fetuses-box'>
                  <div className='icon'>
                    <i className='icon-development'></i>
                  </div>
                  <h3>Develop a Prototype</h3>
                  <p>
                    We prepare the data and map the workflow, ensuring that the
                    prototype is fine-tuned for accuracy.
                  </p>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='single-fetuses-box'>
                  <div className='icon'>
                    <i className='icon-deployment'></i>
                  </div>
                  <h3>Develop the Application</h3>
                  <p>
                    Using low-code or no-code platforms, we build AI models
                    designed to enhance operational efficiency and user
                    experience.
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
                  <h3>Test Through Simulation</h3>
                  <p>
                    We rigorously test the model to identify and correct any
                    issues before launch.
                  </p>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='single-fetuses-box'>
                  <div className='icon'>
                    <i className='icon-development'></i>
                  </div>
                  <h3>Launch (Go-Live)</h3>
                  <p>
                    The launch phase is where we deploy the custom model into a
                    live environment, making it fully operational for your
                    business.
                  </p>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='single-fetuses-box'>
                  <div className='icon'>
                    <i className='icon-deployment'></i>
                  </div>
                  <h3>Support & Optimize</h3>
                  <p>
                    We continue to monitor performance closely, gathering data
                    and feedback to identify areas for improvement and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className='about-area ptb-100'>
          <div className='container'>
            <div className='content'>
              <h2>Why Choose Us</h2>
              <p>
                Our approach to custom-model development is rooted in
                understanding that no two businesses are alike. We take the time
                to understand your specific challenges, operational workflows,
                and business goals to create models that integrate seamlessly
                with your existing systems. Our models are built to be
                adaptable, scalable, and secure, ensuring that they grow with
                your business and provide long-term value. From reducing errors
                and enhancing data security to automating complex
                decision-making processes, our custom models offer a
                comprehensive solution to your unique business challenges.
              </p>
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
                    A powerful open-source platform for building machine
                    learning models.
                  </p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='card'>
                  <div className='card_title'>PyTorch</div>
                  <p>
                    An open-source machine learning library used for
                    applications such as computer vision and natural language
                    processing.
                  </p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='card'>
                  <div className='card_title'>Scikit-learn</div>
                  <p>
                    A simple and efficient tool for data mining and data
                    analysis, built on NumPy, SciPy, and Matplotlib.
                  </p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='card'>
                  <div className='card_title'>Keras</div>
                  <p>
                    A high-level neural networks API, written in Python and
                    capable of running on top of TensorFlow, CNTK, or Theano.
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

export default MLModelDevelopment;
