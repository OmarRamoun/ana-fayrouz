import React, {Component} from 'react';
import Logo from '../Assets/Images/darwin.jpg';
import Ramoun from '../Assets/Images/Ramoun.svg';
import home from '../Assets/sections_shots/home.png';
import about from '../Assets/sections_shots/about.png';
import services from '../Assets/sections_shots/services.png';
import portfolio from '../Assets/sections_shots/portfolio.png';
import contact from '../Assets/sections_shots/contact.png';

import {Link} from 'react-router-dom';

class Header extends Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <header
        id='header'
        className='site-header header-style-1'
        style={!this.state.isOpen ? {backdropFilter: 'blur(10px)'} : {}}
      >
        <nav className='navigation navbar navbar-default'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <button
                type='button'
                className='open-btn'
                onClick={() => this.setState({isOpen: true})}
              >
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar' style={{height: '4px'}}></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </button>
              <Link className='navbar-brand' to='/'>
                <img style={{width: '47px', borderRadius: '50%'}} src={Logo} alt='' />
                <img style={{height: '20px', filter: 'invert(1)', opacity: '0.7'}} src={Ramoun} alt='' />
              </Link>
            </div>
            {this.state.isOpen && (
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  backgroundColor: 'rgba(0,0,0,0)',
                }}
                onClick={(event) => {
                  if (event.currentTarget === event.target) {
                    this.setState({isOpen: false});
                  }
                }}
              >
                <div
                  id='navbar'
                  className='navbar-collapse navigation-holder'
                  style={{
                    position: 'fixed',
                    top: '0',
                    right: '0',
                  }}
                  onClick={(event) => {
                    if (event.currentTarget !== event.target) {
                      this.setState({isOpen: false});
                    }
                  }}
                >
                  <button
                    style={{zIndex: 1000000}}
                    className='close-navbar'
                    onClick={() => this.setState({isOpen: false})}
                  >
                    <i className='fa fa-times' aria-hidden='true'></i>
                  </button>
                  <button className='close-navbar-2' onClick={() => this.setState({isOpen: false})}>
                    <i className='fa fa-times' aria-hidden='true'></i>
                  </button>
                  <ul className='nav navbar-nav'>
                    <li className='home'>
                      <a href='#home'>
                        <img src={home} alt='' />
                      </a>
                    </li>
                    <li className='about'>
                      <a href='#about'>
                        <img src={about} alt='' />
                      </a>
                    </li>
                    <li className='service'>
                      <a href='#service'>
                        <img src={services} alt='' />
                      </a>
                    </li>
                    <li className='protfolio'>
                      <a href='#protfolio'>
                        <img src={portfolio} alt='' />
                      </a>
                    </li>
                    <li className='contact'>
                      <a href='#contact'>
                        <img src={contact} alt='' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            <div className='menu-open-btn-holder'>
              <button className='menu-open-btn' onClick={() => this.setState({isOpen: true})}>
                <span style={{height: '4px'}}></span>
                <span style={{height: '4px'}}></span>
                <span style={{height: '4px'}}></span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
