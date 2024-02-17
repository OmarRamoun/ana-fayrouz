/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { cn } from '@lib';
import Logo from '@assets/images/darwin.jpg';
import ramoun from '@assets/images/Ramoun.svg';
import home from '@assets/sections_shots/home.png';
import about from '@assets/sections_shots/about.png';
import services from '@assets/sections_shots/services.png';
import portfolio from '@assets/sections_shots/portfolio.png';
import contact from '@assets/sections_shots/contact.png';

import styles from './styles.module.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="header"
      className={cn('site-header header-style-1', !isOpen ? styles.header : {})}
    >
      <nav className="navigation navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="open-btn" onClick={() => setIsOpen(true)}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/">
              <img className={styles.logo} src={Logo} alt="logo" />
              <img
                className={styles.ramoun}
                src={`${ramoun}`}
                alt=""
              />
            </Link>
          </div>
          {isOpen && (
            <button
              type="button"
              className={styles.navbar_collapse}
              onClick={(event) => {
                if (event.currentTarget === event.target) {
                  setIsOpen(false);
                }
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  setIsOpen(false);
                }
              }}
              tabIndex={0}
            >
              <button
                type="button"
                id="navbar"
                className="navbar-collapse navigation-holder"
                style={{
                  position: 'fixed',
                  top: '0',
                  right: '0',
                }}
                onClick={(event) => {
                  if (event.currentTarget !== event.target) {
                    setIsOpen(false);
                  }
                }}
              >
                <button
                  type="button"
                  title="close"
                  style={{ zIndex: 1000000 }}
                  className="close-navbar"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fa fa-times" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  title="close"
                  className="close-navbar-2"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fa fa-times" aria-hidden="true" />
                </button>
                <ul className="nav navbar-nav">
                  <li className="home">
                    <a title="home" href="#home">
                      <img src={home} alt="" />
                    </a>
                  </li>
                  <li className="about">
                    <a title="about" href="#about">
                      <img src={about} alt="" />
                    </a>
                  </li>
                  <li className="service">
                    <a title="service" href="#service">
                      <img src={services} alt="" />
                    </a>
                  </li>
                  <li className="protfolio">
                    <a title="portfolio" href="#protfolio">
                      <img src={portfolio} alt="" />
                    </a>
                  </li>
                  <li className="contact">
                    <a title="contact" href="#contact">
                      <img src={contact} alt="" />
                    </a>
                  </li>
                </ul>
              </button>
            </button>
          )}
          <div className="menu-open-btn-holder">
            <button
              type="button"
              title="menu"
              className="menu-open-btn"
              onClick={() => setIsOpen(true)}
            >
              <span className={styles.menu_bar_stick} />
              <span className={styles.menu_bar_stick} />
              <span className={styles.menu_bar_stick} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
