import React, {Component} from 'react';
import Gallery_1 from '../../Assets/Images/gallery/img-1.jpg';
import Gallery_2 from '../../Assets/Images/gallery/img-2.jpg';
import Gallery_3 from '../../Assets/Images/gallery/img-3.jpg';
import Gallery_4 from '../../Assets/Images/gallery/img-4.jpg';
import Gallery_5 from '../../Assets/Images/gallery/img-5.jpg';
import Gallery_6 from '../../Assets/Images/gallery/img-6.jpg';
import {Link} from 'react-router-dom';

class Porfolio extends Component {
  state = {
    onWebDesign: false,
    onPrintDesign: false,
    onWebApp: false,
    onPhotography: false,
    isOpen: false,
  };

  render() {
    const allElement = (event) => {
      event.preventDefault();
      this.setState({
        onWebApp: true,
        onPrintDesign: true,
        onWebDesign: true,
        onPhotography: true,
      });
    };

    const webDesign = (event) => {
      event.preventDefault();
      this.setState({
        onWebDesign: true,
        onPrintDesign: false,
        onWebApp: false,
        onPhotography: false,
        isOpen: true,
      });
    };

    const printDesign = (event) => {
      event.preventDefault();
      this.setState({
        onPrintDesign: true,
        onWebDesign: false,
        onWebApp: false,
        onPhotography: false,
        isOpen: true,
      });
    };

    const webApp = (event) => {
      event.preventDefault();
      this.setState({
        onWebApp: true,
        onPrintDesign: false,
        onWebDesign: false,
        onPhotography: false,
        isOpen: true,
      });
    };

    const Photography = (event) => {
      event.preventDefault();
      this.setState({
        onPhotography: true,
        onWebApp: false,
        onPrintDesign: false,
        onWebDesign: false,
        isOpen: true,
      });
    };

    return (
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
              <div className='gallery-container gallery-fancybox masonry-gallery payra-masonary'>
                <div
                  className={
                    this.state.onPrintDesign
                      ? 'grid active'
                      : 'grid' && this.state.onWebApp
                      ? 'grid active'
                      : 'grid' && this.state.isOpen
                      ? 'grid'
                      : 'grid open'
                  }
                >
                  <img src={Gallery_1} className='img img-responsive' alt='' />
                  <div className='icon'>
                    <Link to='/' className='view-icon'>
                      <i className='fa fa-plus' aria-hidden='true'></i>
                    </Link>
                  </div>
                </div>
                <div
                  className={
                    this.state.onWebDesign
                      ? 'grid active'
                      : 'grid' && this.state.onPrintDesign
                      ? 'grid active'
                      : 'grid' && this.state.onWebApp
                      ? 'grid active'
                      : 'grid' && this.state.onPhotography
                      ? 'grid active'
                      : 'grid' && this.state.isOpen
                      ? 'grid'
                      : 'grid open'
                  }
                >
                  <img src={Gallery_2} alt='' className='img img-responsive' />
                  <div className='icon'>
                    <Link to='/' className='view-icon'>
                      <i className='fa fa-plus' aria-hidden='true'></i>
                    </Link>
                  </div>
                </div>
                <div
                  className={
                    this.state.onWebDesign
                      ? 'grid active'
                      : 'grid' && this.state.onWebApp
                      ? 'grid active'
                      : 'grid' && this.state.isOpen
                      ? 'grid'
                      : 'grid open'
                  }
                >
                  <img src={Gallery_6} alt='' className='img img-responsive' />
                  <div className='icon'>
                    <Link to='/' className='view-icon'>
                      <i className='fa fa-plus' aria-hidden='true'></i>
                    </Link>
                  </div>
                </div>
                <div
                  className={
                    this.state.onPrintDesign
                      ? 'grid active'
                      : 'grid' && this.state.onPhotography
                      ? 'grid active'
                      : 'grid' && this.state.isOpen
                      ? 'grid'
                      : 'grid open'
                  }
                >
                  <img src={Gallery_5} alt='' className='img img-responsive' />
                  <div className='icon'>
                    <Link to='/' className='view-icon'>
                      <i className='fa fa-plus' aria-hidden='true'></i>
                    </Link>
                  </div>
                </div>
                <div
                  className={
                    this.state.onPrintDesign
                      ? 'grid active'
                      : 'grid' && this.state.onPhotography
                      ? 'grid active'
                      : 'grid' && this.state.isOpen
                      ? 'grid'
                      : 'grid open'
                  }
                >
                  <img src={Gallery_3} alt='' className='img img-responsive' />
                  <div className='icon'>
                    <Link to='/' className='view-icon'>
                      <i className='fa fa-plus' aria-hidden='true'></i>
                    </Link>
                  </div>
                </div>
                <div
                  className={
                    this.state.onPrintDesign
                      ? 'grid active'
                      : 'grid' && this.state.onWebApp
                      ? 'grid active'
                      : 'grid' && this.state.onPhotography
                      ? 'grid active'
                      : 'grid' && this.state.isOpen
                      ? 'grid'
                      : 'grid open'
                  }
                >
                  <img src={Gallery_4} alt='' className='img img-responsive' />
                  <div className='icon'>
                    <Link to='/' className='view-icon'>
                      <i className='fa fa-plus' aria-hidden='true'></i>
                    </Link>
                  </div>
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
      </section>
    );
  }
}

export default Porfolio;
