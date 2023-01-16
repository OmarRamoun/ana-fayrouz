import React, {Component} from 'react';

import {Typewriter} from 'react-simple-typewriter';
// import Slides from '../Assets/Images/slide-2.jpg';
import Slides from '../../Assets/Images/home/amoled.jpg';
import './Banner.style.css';

class Banner extends Component {
  render() {
    return (
      <section id='home' className='hero hero-slider-wrapper hero-style-1'>
        <div className='hero-slider hero-slider-bg'>
          <div className='slide'>
            <div className='slider-image'>
              <img style={{filter: 'brightness(0.4) blur(1px)'}} src={Slides} alt='bg' />
            </div>
            <div className='container' style={{position: 'relative', zIndex: 1000}}>
              <div className='row'>
                <div style={{marginTop: '20px'}} className='col col-md-8 col-sm-12 slide-caption'>
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
                  <div className='btns' style={{display: 'flex', alignItems: 'center'}}>
                    <a
                      href='#contact'
                      className='template-secondary go-contact-area mr-3'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '50px',
                        paddingInline: '30px',
                      }}
                    >
                      Contact Me
                    </a>
                    <a
                      href='./IsraArvinResume.pdf'
                      className='btn template-secondary btn-lg round go-contact-area'
                      target='_blank'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '40px',
                        height: '50px',
                        fontFamily: "'Oswald', sans-serif",
                        textTransform: 'uppercase',
                        paddingInline: '30px',
                      }}
                      Download
                    >
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
              <a href='https://linkedin.com/in/israarvin' target='_blank' rel="noreferrer">
                <i style={{fontSize: '28px'}} className='fa fa-linkedin'></i>
              </a>
            </li>
            <li>
              <a href='https://upwork.com/israarvin' target='_blank' rel="noreferrer">
                {/* <i className='fa fa-twitter'></i> */}
                <img alt='upwork' src='https://img.icons8.com/ios-filled/25/ffffff/upwork.png' />
              </a>
            </li>
            <li>
              <a href='https://github.com/israarvin' target='_blank' rel="noreferrer">
                <i style={{fontSize: '28px'}} className='fa fa-github'></i>
              </a>
            </li>
            <li>
              <a href='mailto:contact@israarvin.com?subject=Hello&body=Hello, I saw your portfolio and I would like to know more about your work'>
                <i style={{fontSize: '23px'}} className='fa fa-envelope'></i>
              </a>
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
