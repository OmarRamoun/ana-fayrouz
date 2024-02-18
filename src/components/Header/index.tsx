/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '@assets/images/darwin.jpg';
import ramoun from '@assets/images/Ramoun.svg';
import home from '@assets/sections_shots/home.png';
import about from '@assets/sections_shots/about.png';
import services from '@assets/sections_shots/services.png';
import portfolio from '@assets/sections_shots/portfolio.png';
import contact from '@assets/sections_shots/contact.png';

import { cn } from '@lib';
import styles from './styles.module.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = (): void => {
    setIsOpen(true);
  };

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <div className={styles.navbar_container}>
          <Link className={styles.navbar_brand} to="/">
            <img className={styles.logo} src={Logo} alt="logo" />
            <img
              className={styles.ramoun}
              src={`${ramoun}`}
              alt="ramoun"
            />
          </Link>

          <button
            type="button"
            title="menu"
            className={styles.burger_menu_btn}
            onClick={openMenu}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className={styles.menu_bar_stick} />
            <span className={styles.menu_bar_stick} />
            <span className={styles.menu_bar_stick} />
          </button>

          <div className={cn(styles.side_nav, isOpen ? styles.nav_open : '')}>
            <button
              type="button"
              title="close"
              className={styles.close_btn}
              onClick={closeMenu}
            >
              <i className={cn('fa fa-times', styles.fa_times)} />
            </button>

            <ul className={styles.pictorial_anchors}>
              <li className={styles.home}>
                <a title="home" href="#home" onClick={closeMenu}>
                  <img src={home} alt="home" />
                </a>
              </li>

              <li className={styles.about}>
                <a title="about" href="#about" onClick={closeMenu}>
                  <img src={about} alt="about" />
                </a>
              </li>

              <li className={styles.service}>
                <a title="service" href="#service" onClick={closeMenu}>
                  <img src={services} alt="services" />
                </a>
              </li>

              <li className={styles.protfolio}>
                <a title="portfolio" href="#protfolio" onClick={closeMenu}>
                  <img src={portfolio} alt="portfolio" />
                </a>
              </li>

              <li className={styles.contact}>
                <a title="contact" href="#contact" onClick={closeMenu}>
                  <img src={contact} alt="contact" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
