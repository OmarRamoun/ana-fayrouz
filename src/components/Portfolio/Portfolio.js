import React, {useState} from 'react';
import Gallery_1 from '../../Assets/Images/gallery/merkado.png';
import Gallery_2 from '../../Assets/Images/gallery/portfolio.png';
import Gallery_3 from '../../Assets/Images/gallery/popular.png';
import {Link} from 'react-router-dom';
import Card from './Card';
import Modal from '../../components/Modal/Modal';
import ProjectModalContent from '../../components/Modal/ProjectModalContent';

const Porfolio = () => {
  const [state, setState] = useState({
    onPortfolio: false,
    onWebApp: false,
    isOpen: false,
  });

  const allElement = (event) => {
    event.preventDefault();
    setState({
      onWebApp: true,
      onPortfolio: true,
    });
  };

  const portfolio = (event) => {
    event.preventDefault();
    setState({
      onPortfolio: true,
      onWebApp: false,
      isOpen: true,
    });
  };

  const webApp = (event) => {
    event.preventDefault();
    setState({
      onWebApp: true,
      onPortfolio: false,
      isOpen: true,
    });
  };

  const merkadoItems = {
    title: 'Merkado',
    details:
      'Merkado is a full e-commerce website for a wide variety of products. The website was designed with a focus on providing customers with a seamless and intuitive shopping experience. It features a clean and modern design, with a user-friendly interface that makes it easy to browse and search for products. Customers can easily add items to their cart, view their order history, and manage their account. The website also includes a variety of features such as a shopping cart, wishlist, and a checkout system that makes it easy to purchase items. The website is fully responsive and optimized for all devices.',
    technologies: ['nextjs', 'scss', 'strapi'],
    preview: {title: 'merkado.israarvin.com', link: 'http://merkado.israarvin.com'},
    source: {title: 'github', link: 'https://github.com/israMarvin/merkado'},
    client: 'private',
    image: Gallery_1,
  };

  const portfolioItems = {
    title: 'Portfolio',
    details:
      'A full portfolio website. The website features a modern and responsive design, built using react.js, and CSS. The website includes an "About Me" section, a "My Projects" section where I showcase some of my recent work, and a "Contact Me" section where users can reach out to me.',
    technologies: ['react', 'css', 'strapi'],
    preview: {title: 'portfolio.israarvin.com', link: 'http://portfolio.israarvin.com'},
    source: {title: 'github', link: 'https://github.com/israMarvin/portfolio'},
    client: 'private',
    image: Gallery_2,
  };

  const popularItems = {
    title: 'Popular',
    details:
      'The "Popular" project is a fashion ecommerce website that allows users to browse and purchase a wide range of fashion products, from clothing to accessories. The website features a clean and modern design, with a user-friendly interface that makes it easy to browse and search for products. Customers can easily add items to their cart, view their order history, and manage their account.',
    technologies: ['nextjs', 'scss', 'strapi'],
    preview: {title: 'popular.israarvin.com', link: 'http://popular.israarvin.com'},
    source: {title: 'github', link: 'https://github.com/israMarvin/popular'},
    client: 'private',
    image: Gallery_3,
  };

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

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
                    <Link data-filter='.Web-Application' to='/' onClick={webApp}>
                      Web Application
                    </Link>
                  </li>
                  <li>
                    <Link data-filter='.Photography' to='/' onClick={portfolio}>
                      Portfolios
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className='gallery-container gallery-fancybox masonry-gallery payra-masonary'
                style={{paddingInline: '20px'}}
              >
                <Card
                  className={
                    state.onWebApp
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
                    state.onPortfolio
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
                    state.onWebApp
                      ? 'grid active'
                      : 'grid' && state.isOpen
                      ? 'grid'
                      : 'grid open'
                  }
                  src={Gallery_3}
                  onClick={() => setShowModal3(true)}
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
        <ProjectModalContent projectInfo={merkadoItems} />
      </Modal>
      <Modal show={showModal2} onClose={() => setShowModal2(!showModal2)}>
        <ProjectModalContent projectInfo={portfolioItems} />
      </Modal>
      <Modal show={showModal3} onClose={() => setShowModal3(!showModal3)}>
        <ProjectModalContent projectInfo={popularItems} />
      </Modal>
    </>
  );
};

export default Porfolio;
