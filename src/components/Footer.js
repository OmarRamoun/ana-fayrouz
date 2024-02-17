import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

class Footer extends Component {
  render() {
    return (
      <div className="footer-area text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-image">
                <Link to="/">
                  <img src={Logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-menu">
                <ul className="d-flex ">
                  <li>
                    <Link to="/">
                      <i className="fa fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-dribbble" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-linkedin" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-skype" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-sub">
                <p>
                  <i className="fa fa-copyright" />
                  Copyright
                  {' '}
                  <span> 2021 Glibuzz. All rights reserved</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
