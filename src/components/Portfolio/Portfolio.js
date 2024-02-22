import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Modal from '../Modal/Modal';
import ProjectModalContent from '../Modal/ProjectModalContent';
import projects from '../../data/projects.json';

const { items } = projects;

const Porfolio = ({lenisState}) => {
  const [state, setState] = useState({
    onReact: false,
    onReactNative: false,
    onVanilla: false,
    onNext: false,
    onWebflow: false,
    isOpen: false,
  });
  const [modals, setModals] = useState(items.map((item) => ({ id: item.id, isOpen: false })));

  const allElement = (event) => {
    event.preventDefault();
    setState({
      onReact: true,
      onReactNative: true,
      onVanilla: true,
      onNext: true,
      onWebflow: true,
      isOpen: false,
    });
  };
  const react = (event) => {
    event.preventDefault();
    setState({
      onReact: true,
      onVanilla: false,
      onNext: false,
      onWebflow: false,
      isOpen: true,
    });
  };
  const reactNative = (event) => {
    event.preventDefault();
    setState({
      onReact: false,
      onReactNative: true,
      onVanilla: false,
      onNext: false,
      onWebflow: false,
      isOpen: true,
    });
  };
  const next = (event) => {
    event.preventDefault();
    setState({
      onReact: false,
      onVanilla: false,
      onNext: true,
      onWebflow: false,
      isOpen: true,
    });
  };
  const webflow = (event) => {
    event.preventDefault();
    setState({
      onReact: false,
      onVanilla: false,
      onNext: false,
      onWebflow: true,
      isOpen: true,
    });
  };
  const vanilla = (event) => {
    event.preventDefault();
    setState({
      onReact: false,
      onVanilla: true,
      onNext: false,
      onWebflow: false,
      isOpen: true,
    });
  };

  const displayClass = (item) => {
    if (state.onReact && item.technologies.map((tag) => tag.toLowerCase()).includes('react')) {
      return 'grid active';
    } if (state.onVanilla && item.technologies.map((tag) => tag.toLowerCase()).includes('html5')) {
      return 'grid active';
    } if (state.onNext && item.technologies.map((tag) => tag.toLowerCase()).includes('next.js')) {
      return 'grid active';
    } if (state.onWebflow && item.technologies.map((tag) => tag.toLowerCase()).includes('webflow')) {
      return 'grid active';
    } if (state.onReactNative && item.technologies.map((tag) => tag.toLowerCase()).includes('react-native')) {
      return 'grid active';
    }

    return 'grid' && state.isOpen ? 'grid' : 'grid open';
  };

  useEffect(() => {
    if (modals.some((modal) => modal.isOpen) && window.innerWidth > 768) {
      lenisState?.current?.stop();
      console.log('stop lenis now')
      console.log('lenis should be now stopped', lenisState)
    } else {
      lenisState?.current?.start();
      console.log('start lenis now')
      console.log('lenis should be now started', lenisState)
    }
  }, [modals]);

  return (
    <>
      <section id="protfolio" className="gallery-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12 sortable-gallery">
              <div className="gallery-filters">
                <div className="section-title">
                  <span>Portfolio</span>
                  <h2>Work I Have Done</h2>
                </div>

                <ul>
                  <li>
                    <Link data-filter="*" to="/" className="current" onClick={allElement}>
                      All
                    </Link>
                  </li>

                  <li>
                    <Link data-filter=".react" to="/" onClick={react}>
                      React
                    </Link>
                  </li>

                  <li>
                    <Link data-filter=".react-native" to="/" onClick={reactNative}>
                      React Native
                    </Link>
                  </li>

                  <li>
                    <Link data-filter=".next" to="/" onClick={next}>
                      Next.js
                    </Link>
                  </li>

                  <li>
                    <Link data-filter=".webflow" to="/" onClick={webflow}>
                      Webflow
                    </Link>
                  </li>

                  <li>
                    <Link data-filter=".vanilla" to="/" onClick={vanilla}>
                      vanilla
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className="gallery-container gallery-fancybox masonry-gallery payra-masonary"
                style={{ paddingInline: '20px' }}
              >
                {
                  items.map((item) => (
                    <Card
                      key={`card-${item.id}`}
                      className={displayClass(item)}
                      src={item.shots.thumbnail}
                      title={item.title}
                      onClick={() => setModals(modals.map((modal) => (modal.id === item.id ? { ...modal, isOpen: true } : modal)))}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        <div className="white_svg svg_white">
          <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
            <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 " />
          </svg>
        </div>
      </section>

      <>
        {
          modals.map((modal) => (
            <Modal key={`modal-${modal.id}`} show={modal.isOpen} onClose={() => setModals(modals.map((modal) => ({ ...modal, isOpen: false })))}>
              <ProjectModalContent projectInfo={items.find((item) => item.id === modal.id)} />
            </Modal>
          ))
        }
      </>
    </>
  );
};

export default Porfolio;
