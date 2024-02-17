import React, { Component } from 'react';

import sr1 from '../../assets/images/service/1.png';
import sr2 from '../../assets/images/service/2.png';
import sr3 from '../../assets/images/service/3.png';
import sr4 from '../../assets/images/service/4.png';
import sr5 from '../../assets/images/service/5.png';
import sr6 from '../../assets/images/service/6.png';

import './Service.style.css';

class Service extends Component {
  render() {
    return (
      <div id="service" className="service-area section-padding">
        <div className="borderd" />
        <div className="container">
          <div className="col-l2">
            <div className="section-title section-title2 text-center">
              <span>What I am Expert In</span>
              <h2>My Service</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-section">
                <div className="services-wrapper">
                  <div className="services-icon-wrapper">
                    <div className="service-dot">
                      <div className="dots" />
                    </div>
                    <i>
                      <img src={sr1} alt="" />
                    </i>
                  </div>
                  <div className="service-content">
                    <h2>Web Design</h2>
                    <p>
                      {' '}
                      Professional and visually appealing design for your website, tailored to your
                      brand and target audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-section">
                <div className="services-wrapper">
                  <div className="services-icon-wrapper">
                    <div className="service-dot">
                      <div className="dots" />
                    </div>
                    <i>
                      <img src={sr2} alt="" />
                    </i>
                  </div>
                  <div className="service-content">
                    <h2>Web Development</h2>
                    <p>
                      {' '}
                      Custom web development services, utilizing the latest technologies and best
                      practices to build high-performance, scalable websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-section">
                <div className="services-wrapper">
                  <div className="services-icon-wrapper">
                    <div className="service-dot">
                      <div className="dots" />
                    </div>
                    <i>
                      <img src={sr3} alt="" />
                    </i>
                  </div>
                  <div className="service-content">
                    <h2>Creative Design</h2>
                    <p>
                      {' '}
                      Innovative and unique design solutions for all your creative needs, including
                      graphic design, UI/UX, and branding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-section">
                <div className="services-wrapper">
                  <div className="services-icon-wrapper">
                    <div className="service-dot">
                      <div className="dots" />
                    </div>
                    <i>
                      <img src={sr4} alt="" />
                    </i>
                  </div>
                  <div className="service-content">
                    <h2>Responsive Design</h2>
                    <p>
                      {' '}
                      Ensuring your website looks great and functions seamlessly across all devices,
                      including desktop, tablet, and mobile.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-section">
                <div className="services-wrapper">
                  <div className="services-icon-wrapper">
                    <div className="service-dot">
                      <div className="dots" />
                    </div>
                    <i>
                      <img src={sr5} alt="" />
                    </i>
                  </div>
                  <div className="service-content">
                    <h2>Back-End Development</h2>
                    <p>
                      {' '}
                      create scalable solutions that meet your business requirements. Whether it is a new feature, an optimization, or a project built from scratch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-section">
                <div className="services-wrapper">
                  <div className="services-icon-wrapper">
                    <div className="service-dot">
                      <div className="dots" />
                    </div>
                    <i>
                      <img src={sr6} alt="" />
                    </i>
                  </div>
                  <div className="service-content">
                    <h2>Customer Support</h2>
                    <p>
                      {' '}
                      Providing top-notch customer support to ensure that your website is running
                      smoothly and your users are satisfied.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="white_svg">
          <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
            <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 " />
          </svg>
        </div>
      </div>
    );
  }
}

export default Service;
