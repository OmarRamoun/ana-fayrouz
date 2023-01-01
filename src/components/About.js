import React, {Component} from 'react';
import aboutImg from '../Assets/Images/about.png';
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
                <div className='about-content'>
                  <h2>About Me</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or randomised words
                    which don't look even slightly believable. All the Lorem IpsumThere are many
                    variations of passages of Lorem Ipsum available.
                  </p>
                  <p className='mt-20'>
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there
                    isn't anything embarrassing hidden in the middle of text. All the Lorem
                    IpsumThere are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form,
                  </p>
                  <Link to='/' className='template-secondary'>
                    Download Resume
                  </Link>
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
