import React, {Component} from 'react';
import aboutImg from '../../Assets/Images/about.png';
import './About.style.css';
import {Link} from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div id='about' className='about-area'>
        <div className='borderd'></div>
        <div className='container'>
          <div className='about-item'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='about-img'>
                  <img style={{marginTop: '52px'}} src={aboutImg} alt='' />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='about-content' style={{paddingInline: '30px'}}>
                  <h2>About Me</h2>
                  <p>
                    I am a highly experienced and accomplished software engineer with over 5 years
                    of industry experience. I have a proven track record of delivering high-quality,
                    scalable software solutions for a variety of industries, including finance,
                    healthcare, and e-commerce.
                  </p>
                  <p className='mt-20'>
                    My expertise includes a deep understanding of multiple programming languages and
                    technologies such as Next.js, Python and Node.js, and a proven ability to design and
                    implement complex systems. I am passionate about staying current with the latest technologies and trends in the industry and am always looking for new opportunities to challenge myself and push the boundaries of what is possible.
                  </p>
                  <a
                    href='./IsraArvinResume.pdf'
                    target='_blank'
                    className='template-secondary hover-border-none'
                    style={{borderColor: '#bfb9b9'}}
                    Download
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='white_svg svg_white'>
          <svg x='0px' y='0px' viewBox='0 186.5 1920 113.5'>
            <polygon points='0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 '></polygon>
          </svg>
        </div>
      </div>
    );
  }
}

export default About;
