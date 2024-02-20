/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Logo from '@assets/images/darwin.jpg';
import ramoun from '@assets/images/Ramoun.svg';
import home from '@assets/sections_shots/home.png';
import about from '@assets/sections_shots/about.png';
import services from '@assets/sections_shots/services.png';
import portfolio from '@assets/sections_shots/portfolio.png';
import contact from '@assets/sections_shots/contact.png';

import { cn } from '@lib';
import { useLenis } from '@hooks';
import styles from './styles.module.css';

const pictorialAnchors = [
  {
    id: 1, title: 'home', href: '#home', img: home,
  },
  {
    id: 2, title: 'about', href: '#about', img: about,
  },
  {
    id: 3, title: 'service', href: '#service', img: services,
  },
  {
    id: 4, title: 'portfolio', href: '#protfolio', img: portfolio,
  },
  {
    id: 5, title: 'contact', href: '#contact', img: contact,
  },
];

gsap.registerPlugin(ScrollToPlugin);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollToElement, setScrollToElement] = useState('#home');
  const lenis = useLenis();
  const container = React.useRef(null);
  const burgerMenuBtn = React.useRef(null);
  const pictorialAnchorsRef = React.useRef(null);
  const anchorRefs = React.useRef([]);
  anchorRefs.current = [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addToRefs = (el: any): void => {
    // @ts-expect-error we know that anchorRefs.current is not null
    if (el && !anchorRefs.current.includes(el)) {
    // @ts-expect-error we know that anchorRefs.current is not null
      anchorRefs.current.push(el);
    }
  };

  const openMenu = (): void => {
    setIsOpen(true);
    lenis?.stop();
  };

  const closeMenu = (): void => {
    setIsOpen(false);
    lenis?.start();
  };

  useGSAP((_, contextSafe) => {
    const onClickGood = contextSafe ? contextSafe(() => {
      gsap.from('.pictorial_element', {
        y: 1000, duration: 0.4, stagger: 0.1,
      });
    }) : undefined;

    if (burgerMenuBtn?.current && onClickGood) {
      // @ts-expect-error we know that burgerMenuBtn.current is not null
      burgerMenuBtn.current.addEventListener('click', onClickGood);
    }

    return () => {
      if (burgerMenuBtn?.current && onClickGood) {
        // @ts-expect-error we know that burgerMenuBtn.current is not null
        burgerMenuBtn.current.removeEventListener('click', onClickGood);
      }
    };
  }, { scope: container });

  useEffect(() => {
    anchorRefs.current.forEach((el) => {
      console.log('first el', el);
    });
  }, []);

  useEffect(() => {
    gsap.to(window, { duration: 2, scrollTo: scrollToElement });
  }, [scrollToElement]);

  return (
    <header ref={container} className={styles.header}>
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
            ref={burgerMenuBtn}
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
            <ul
              ref={pictorialAnchorsRef}
              className={styles.pictorial_anchors}
              data-lenis-prevent
            >
              {pictorialAnchors.map(({
                id, title, href, img,
              }) => (
                <li
                  key={`anchor-${title}-${href}-${id}`}
                  className={cn('pictorial_element', styles[title])}
                >
                  <a
                    ref={addToRefs}
                    title={title}
                    href={href}
                    onClick={() => {
                      closeMenu();
                      // lenis?.scrollTo(href);
                      gsap.to(window, { duration: 2, scrollTo: href });
                      setScrollToElement(href);
                    }}
                  >
                    <img src={img} alt={title} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
