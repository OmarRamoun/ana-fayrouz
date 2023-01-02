import React, {Component} from 'react';

import sr1 from '../../Assets/Images/service/1.png';
import sr2 from '../../Assets/Images/service/2.png';
import sr3 from '../../Assets/Images/service/3.png';
import sr4 from '../../Assets/Images/service/4.png';
import sr5 from '../../Assets/Images/service/5.png';
import sr6 from '../../Assets/Images/service/6.png';

import './Service.style.css';

class Service extends Component {
  render() {
    return (
      <div id='service' className='service-area section-padding'>
        <div className='borderd'></div>
        <div className='container'>
          <div className='col-l2'>
            <div className='section-title section-title2 text-center'>
              <span>What I am Expert In</span>
              <h2>My Service</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='service-section'>
                <div className='services-wrapper'>
                  <div className='services-icon-wrapper'>
                    <div className='service-dot'>
                      <div className='dots'></div>
                    </div>
                    <i>
                      <img src={sr1} alt='' />
                    </i>
                  </div>
                  <div className='service-content'>
                    <h2>Web Design</h2>
                    <p>
                      {' '}
                      am an expert web designer and developer. Contrary to popular belief, Lorem
                      Ipsum is not simply random text. It has
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='service-section'>
                <div className='services-wrapper'>
                  <div className='services-icon-wrapper'>
                    <div className='service-dot'>
                      <div className='dots'></div>
                    </div>
                    <i>
                      <img src={sr2} alt='' />
                    </i>
                  </div>
                  <div className='service-content'>
                    <h2>Web Development</h2>
                    <p>
                      {' '}
                      am an expert web designer and developer. Contrary to popular belief, Lorem
                      Ipsum is not simply random text. It has
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='service-section'>
                <div className='services-wrapper'>
                  <div className='services-icon-wrapper'>
                    <div className='service-dot'>
                      <div className='dots'></div>
                    </div>
                    <i>
                      <img src={sr3} alt='' />
                    </i>
                  </div>
                  <div className='service-content'>
                    <h2>Creative Design</h2>
                    <p>
                      {' '}
                      am an expert web designer and developer. Contrary to popular belief, Lorem
                      Ipsum is not simply random text. It has
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='service-section'>
                <div className='services-wrapper'>
                  <div className='services-icon-wrapper'>
                    <div className='service-dot'>
                      <div className='dots'></div>
                    </div>
                    <i>
                      <img src={sr4} alt='' />
                    </i>
                  </div>
                  <div className='service-content'>
                    <h2>Responsive Design</h2>
                    <p>
                      {' '}
                      am an expert web designer and developer. Contrary to popular belief, Lorem
                      Ipsum is not simply random text. It has
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='service-section'>
                <div className='services-wrapper'>
                  <div className='services-icon-wrapper'>
                    <div className='service-dot'>
                      <div className='dots'></div>
                    </div>
                    <i>
                      <img src={sr5} alt='' />
                    </i>
                  </div>
                  <div className='service-content'>
                    <h2>Branding Identity</h2>
                    <p>
                      {' '}
                      am an expert web designer and developer. Contrary to popular belief, Lorem
                      Ipsum is not simply random text. It has
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='service-section'>
                <div className='services-wrapper'>
                  <div className='services-icon-wrapper'>
                    <div className='service-dot'>
                      <div className='dots'></div>
                    </div>
                    <i>
                      <img src={sr6} alt='' />
                    </i>
                  </div>
                  <div className='service-content'>
                    <h2>24/Support</h2>
                    <p>
                      {' '}
                      am an expert web designer and developer. Contrary to popular belief, Lorem
                      Ipsum is not simply random text. It has
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='white_svg'>
          <svg x='0px' y='0px' viewBox='0 186.5 1920 113.5'>
            <polygon points='0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 '></polygon>
          </svg>
        </div>
      </div>
    );
  }
}

export default Service;
