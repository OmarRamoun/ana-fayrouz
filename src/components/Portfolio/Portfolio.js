import React, {Component, useState} from 'react';
import Gallery_1 from '../../Assets/Images/gallery/img-1.jpg';
import Gallery_2 from '../../Assets/Images/gallery/img-2.jpg';
import Gallery_3 from '../../Assets/Images/gallery/img-3.jpg';
import Gallery_4 from '../../Assets/Images/gallery/img-4.jpg';
import Gallery_5 from '../../Assets/Images/gallery/img-5.jpg';
import Gallery_6 from '../../Assets/Images/gallery/img-6.jpg';
import {Link} from 'react-router-dom';
import Card from './Card';
import Modal from '../../components/Modal/Modal';
import ProjectModalContent from '../../components/Modal/ProjectModalContent';

const Porfolio = () => {
  const [state, setState] = useState({
    onWebDesign: false,
    onPrintDesign: false,
    onWebApp: false,
    onPhotography: false,
    isOpen: false,
  });

  const allElement = (event) => {
    event.preventDefault();
    setState({
      onWebApp: true,
      onPrintDesign: true,
      onWebDesign: true,
      onPhotography: true,
    });
  };

  const webDesign = (event) => {
    event.preventDefault();
    setState({
      onWebDesign: true,
      onPrintDesign: false,
      onWebApp: false,
      onPhotography: false,
      isOpen: true,
    });
  };

  const printDesign = (event) => {
    event.preventDefault();
    setState({
      onPrintDesign: true,
      onWebDesign: false,
      onWebApp: false,
      onPhotography: false,
      isOpen: true,
    });
  };

  const webApp = (event) => {
    event.preventDefault();
    setState({
      onWebApp: true,
      onPrintDesign: false,
      onWebDesign: false,
      onPhotography: false,
      isOpen: true,
    });
  };

  const Photography = (event) => {
    event.preventDefault();
    setState({
      onPhotography: true,
      onWebApp: false,
      onPrintDesign: false,
      onWebDesign: false,
      isOpen: true,
    });
  };

  const modalItems = {
    title: 'Rene',
    details: 'Best project on the web, just for soso my love',
    technologies: ['html', 'css', 'js'],
    preview: {title: 'rene.com', link: 'https://google.com'},
    source: {title: 'github', link: 'https://github.com/rene'},
    client: 'IO Compnay',
    image: Gallery_6,
  };

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);

  return (
    <>
      <section id='protfolio' className='gallery-section section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col col-xs-12 sortable-gallery'>
              <div className='gallery-filters'>
                <div className='section-title'>
                  <span>Portfolio</span>
                  <h2>Work I Have Done</h2>
                </div>
                <ul>
                  <li>
                    <Link data-filter='*' to='/' className='current' onClick={allElement}>
                      All
                    </Link>
                  </li>
                  <li>
                    <Link data-filter='.Web-Design' to='/' onClick={webDesign}>
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link data-filter='.Print-Design' to='/' onClick={printDesign}>
                      Print Design
                    </Link>
                  </li>
                  <li>
                    <Link data-filter='.Web-Application' to='/' onClick={webApp}>
                      Web Application
                    </Link>
                  </li>
                  <li>
                    <Link data-filter='.Photography' to='/' onClick={Photography}>
                      Photography
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='gallery-container gallery-fancybox masonry-gallery payra-masonary' style={{paddingInline: '20px'}}>
                <Card
                  className={
                    state.onPrintDesign
                      ? 'grid active'
                      : 'grid' && state.onWebApp
                      ? 'grid active'
                      : 'grid' && state.isOpen
                      ? 'grid'
                      : 'grid open'
                  }
                  src={Gallery_1}
                  onClick={() => setShowModal1(true)}
                />
                <Card
                  className={
                    state.onWebDesign
                      ? 'grid active'
                      : 'grid' && state.onPrintDesign
                      ? 'grid active'
                      : 'grid' && state.onWebApp
                      ? 'grid active'
                      : 'grid' && state.onPhotography
                      ? 'grid active'
                      : 'grid' && state.isOpen
                      ? 'grid'
                      : 'grid open'
                  }
                  src={Gallery_2}
                  onClick={() => setShowModal2(true)}
                />
                <Card
                  className={
                    state.onWebDesign
                      ? 'grid active'
                      : 'grid' && state.onWebApp
                      ? 'grid active'
                      : 'grid' && state.isOpen
                      ? 'grid'
                      : 'grid open'
                  }
                  src={Gallery_3}
                  onClick={() => setShowModal3(true)}
                />
                <Card
                  className={
                    state.onPrintDesign
                      ? 'grid active'
                      : 'grid' && state.onPhotography
                      ? 'grid active'
                      : 'grid' && state.isOpen
                      ? 'grid'
                      : 'grid open'
                  }
                  src={Gallery_4}
                  onClick={() => setShowModal4(true)}
                />
                <Card
                  className={
                    state.onPrintDesign
                      ? 'grid active'
                      : 'grid' && state.onPhotography
                      ? 'grid active'
                      : 'grid' && state.isOpen
                      ? 'grid'
                      : 'grid open'
                  }
                  src={Gallery_5}
                  onClick={() => setShowModal5(true)}
                />
                <Card
                  className={
                    state.onPrintDesign
                      ? 'grid active'
                      : 'grid' && state.onWebApp
                      ? 'grid active'
                      : 'grid' && state.onPhotography
                      ? 'grid active'
                      : 'grid' && state.isOpen
                      ? 'grid'
                      : 'grid open'
                  }
                  src={Gallery_6}
                  onClick={() => setShowModal6(true)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='white_svg svg_white'>
          <svg x='0px' y='0px' viewBox='0 186.5 1920 113.5'>
            <polygon points='0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 '></polygon>
          </svg>
        </div>
      </section>
      <Modal show={showModal1} onClose={() => setShowModal1(!showModal1)}>
        <ProjectModalContent projectInfo={modalItems} />
      </Modal>
      <Modal show={showModal2} onClose={() => setShowModal2(!showModal2)}>
        <ProjectModalContent projectInfo={modalItems} />
      </Modal>
      <Modal show={showModal3} onClose={() => setShowModal3(!showModal3)}>
        <ProjectModalContent projectInfo={modalItems} />
      </Modal>
      <Modal show={showModal4} onClose={() => setShowModal4(!showModal4)}>
        <ProjectModalContent projectInfo={modalItems} />
      </Modal>
      <Modal show={showModal5} onClose={() => setShowModal5(!showModal5)}>
        <ProjectModalContent projectInfo={modalItems} />
      </Modal>
      <Modal show={showModal6} onClose={() => setShowModal6(!showModal6)}>
        <ProjectModalContent projectInfo={modalItems} />
      </Modal>
    </>
  );
};

export default Porfolio;
