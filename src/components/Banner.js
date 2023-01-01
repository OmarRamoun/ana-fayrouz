import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import {Typewriter} from 'react-simple-typewriter';
// import Slides from '../Assets/Images/slide-2.jpg';
import Slides from '../Assets/Images/home/amoled.jpg';

class Banner extends Component {
  render() {
    return (
      <section id='home' className='hero hero-slider-wrapper hero-style-1'>
        <div className='hero-slider' style={{height: '100vh'}}>
          <div className='slide'>
            <div className='slider-image'>
              <img src={Slides} alt='' />
            </div>
            <div className='container'>
              <div className='row'>
                <div className='col col-md-8 col-sm-12 slide-caption'>
                  <div className='slide-subtitle'>
                    <h1>I Am Isra Arvin</h1>
                  </div>
                  <div className='slide-title'>
                    <h2>
                      <Typewriter
                        loop
                        cursor
                        cursorBlinking
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        words={['Web Designer', 'Web Developer', 'Freelancer']}
                      />
                    </h2>
                  </div>
                  <div className='btns'>
                    <a href='#contact' className='template-btn go-contact-area mr-3'>
                      Contact Me
                    </a>
                    <a href='#contact' className='btn btn-outline-dark btn-lg round go-contact-area' style={{'borderRadius': '40px'}}>
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='copy'>
          <p>Creative Designer And Developer</p>
        </div>
        <div className='social-links position-fixed fixed-bottom'>
          <ul style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <li>
              <Link to='#'>
                <i style={{fontSize: '28px'}} className='fa fa-linkedin'></i>
              </Link>
            </li>
            <li>
              <Link to='#'>
                {/* <i className='fa fa-twitter'></i> */}
                <img src="https://img.icons8.com/ios-filled/25/ffffff/upwork.png"/>
              </Link>
            </li>
            <li>
              <Link to='#'>
                <i style={{fontSize: '28px'}} className='fa fa-github'></i>
              </Link>
            </li>
            <li>
              <Link to='#'>
                <i style={{fontSize: '25px'}} className='fa fa-envelope'></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className='white_svg'>
          <svg x='0px' y='0px' viewBox='0 186.5 1920 113.5'>
            <polygon points='0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 '></polygon>
          </svg>
        </div>
      </section>
    );
  }
}

export default Banner;
