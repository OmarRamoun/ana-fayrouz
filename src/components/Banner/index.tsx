/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import { Typewriter } from 'react-simple-typewriter';
import { ParallaxBanner } from 'react-scroll-parallax';

import Slides from '@assets/Images/home/amoled.jpg';
import { cn } from '@lib';
import { Button } from '../Button';

import styles from './styles.module.css';

/* <img alt='upwork' src='https://img.icons8.com/ios-filled/25/ffffff/upwork.png' /> */

const socialLinks = [
  {
    id: 1,
    href: 'https://linkedin.com/in/omarramoun',
    icon: 'fa fa-linkedin',
  },
  {
    id: 2,
    href: 'https://github.com/omarramoun',
    icon: 'fa fa-github',
  },
  {
    id: 3,
    href: 'https://twitter.com/omarramoun',
    icon: 'fa fa-twitter',
  },
  {
    id: 4,
    // eslint-disable-next-line max-len
    href: 'mailto:contact@omarramoun.com?subject=Hello&body=Hello, I saw your portfolio and I would like to know more about your work',
    icon: 'fa fa-envelope',
  },
];

const Banner: React.FC = () => (
  <section id="home" className="hero hero-slider-wrapper hero-style-1">
    <div className="hero-slider hero-slider-bg">
      <ParallaxBanner
        layers={[{ image: Slides, speed: -50, className: styles.bg_hero_img }]}
        className="bg-container"
      >
        <div className="slide">
          <div className="container" style={{ position: 'relative', zIndex: 1000 }}>
            <div className="row">
              <div style={{ marginTop: '20px' }} className={cn('slide-caption', styles.slide_caption)}>
                <div className="slide-subtitle">
                  <h1>I Am Ramoun</h1>
                </div>
                <div className={styles.slide_title}>
                  <h2>
                    <Typewriter
                      loop
                      cursor
                      cursorBlinking
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      words={['Software Engineer', 'Front-End Developer', 'React Developer']}
                    />
                  </h2>
                </div>

                <div className={styles.buttons_container}>
                  <Button href="#contact"> Contact Me </Button>
                  <Button
                    href="./Omar Ramoun - Frontend Developer Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    download
                    secondary
                  >
                    Download CV
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxBanner>
    </div>

    <div className={styles.copy}>
      <p>Front-End Engineer | React / React Native</p>
    </div>

    <div className={styles.social_links}>
      <ul>
        {socialLinks.map(({ id, href, icon }) => (
          <li key={`social-link-${id}-${href}`}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <i
                style={{
                  fontSize: id === 4 ? '23px' : '28px',
                }}
                className={icon}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="white_svg">
      <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
        <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 " />
      </svg>
    </div>
  </section>
);

export { Banner };
