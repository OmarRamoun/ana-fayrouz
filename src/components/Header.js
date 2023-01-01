import React, {Component} from 'react';
import Logo from '../Assets/Images/logo.svg';
import Home_1 from '../Assets/Images/home/img-1.jpg';
import Home_2 from '../Assets/Images/home/img-6.jpg';
import Home_3 from '../Assets/Images/home/img-4.jpg';
import Home_4 from '../Assets/Images/home/img-5.jpg';
import Home_5 from '../Assets/Images/home/img-2.jpg';
import Home_6 from '../Assets/Images/home/img-3.jpg';

import {Link} from 'react-router-dom';

class Header extends Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <header id='header' className='site-header header-style-1'>
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
                <img style={{width: '47px', filter: 'invert(1)'}} src={Logo} alt='' />
              </Link>
            </div>
            <div
              id='navbar'
              className={
                this.state.isOpen
                  ? 'navbar-collapse navigation-holder active'
                  : 'navbar-collapse navigation-holder'
              }
            >
              <button className='close-navbar' onClick={() => this.setState({isOpen: false})}>
                <i className='fa fa-times' aria-hidden='true'></i>
              </button>
              <button className='close-navbar-2' onClick={() => this.setState({isOpen: false})}>
                <i className='fa fa-times' aria-hidden='true'></i>
              </button>
              <ul className='nav navbar-nav'>
                <li className='home'>
                  <a href='#home'>
                    <img src={Home_1} alt='' />
                  </a>
                </li>
                <li className='about'>
                  <a href='#about'>
                    <img src={Home_2} alt='' />
                  </a>
                </li>
                <li className='service'>
                  <a href='#service'>
                    <img src={Home_3} alt='' />
                  </a>
                </li>
                <li className='protfolio'>
                  <a href='#protfolio'>
                    <img src={Home_4} alt='' />
                  </a>
                </li>
                <li className='blog'>
                  <a href='#blog'>
                    <img src={Home_5} alt='' />
                  </a>
                </li>
                <li className='contact'>
                  <a href='#contact'>
                    <img src={Home_6} alt='' />
                  </a>
                </li>
              </ul>
            </div>
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
