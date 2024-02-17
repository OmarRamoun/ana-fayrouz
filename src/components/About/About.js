import React, { Component } from 'react';
import aboutImg from '../../assets/images/darwin_center.jpg';
import './About.style.css';

class About extends Component {
  render() {
    return (
      <div id="about" className="about-area">
        <div className="borderd" />
        <div className="container">
          <div className="about-item">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-img">
                  <img
                    style={{ marginTop: '52px', filter: 'grayscale(45%)' }}
                    src={aboutImg}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content" style={{ paddingInline: '30px' }}>
                  <h2>About Me</h2>
                  <p className="fs-p">
                    I am react developer with over 5 years of industry experience. I have a proven
                    track record of delivering high-quality, scalable software solutions for a
                    variety of industries, including finance, healthcare, educational SaaS, and
                    e-commerce.
                  </p>
                  <p className="mt-20 fs-p">
                    My expertise includes a deep understanding of multiple technologies such as
                    {' '}
                    <code>javascript</code>
                    ,
                    <code>React</code>
                    ,
                    <code>React-Native</code>
                    ,
                    {' '}
                    <code>Next.js</code>
                    ,
                    <code>Django</code>
                    ,
                    <code>Postgres</code>
                    ,
                    {' '}
                    <code>serverless AWS</code>
                    , and
                    <code>Typescript</code>
                    , and a proven ability
                    to design and implement complex systems in Agile settings. I am
                    {' '}
                    <strong>obsessed</strong>
                    {' '}
                    with staying current with the latest technologies and
                    trends in the industry (that's why I am currently building a JAM Stack
                    application for a non-profit organization named "WA3EY") and I am always looking
                    for new opportunities to challenge myself and push the boundaries of what is
                    possible.
                  </p>
                  <a
                    href="./ramoun_resume_v2.pdf"
                    target="_blank"
                    className="template-secondary hover-border-none"
                    style={{ borderColor: '#bfb9b9' }}
                    download
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="white_svg svg_white">
          <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
            <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 " />
          </svg>
        </div>
      </div>
    );
  }
}

export default About;
