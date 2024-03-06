import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sr1 from '@assets/Images/service/7.png';
import sr2 from '@assets/Images/service/8.png';
import sr3 from '@assets/Images/service/9.png';

class PricingPlan extends Component {
  render() {
    return (
      <section className="pricing-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="section-title text-center">
                <span>Our Pricing</span>
                <h2>Pricing Table</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-xs-12">
              <div className="pricing-grids">
                <div className="grid">
                  <div className="pricing-header">
                    <div className="circuler-price">
                      <i>
                        <img src={sr1} alt="" />
                      </i>
                    </div>
                    <p>Basic</p>
                  </div>
                  <div className="pricing-body">
                    <h2>
                      <sup>$</sup>
                      30
                      <span>month</span>
                    </h2>
                    <ul>
                      <li>Web Design</li>
                      <li>Web Development</li>
                      <li>Responsive Design</li>
                    </ul>
                    <Link to="/" className="template-btn">
                      Order Now
                    </Link>
                  </div>
                </div>
                <div className="grid">
                  <div className="pricing-header">
                    <div className="circuler-price">
                      <i>
                        <img src={sr2} alt="" />
                      </i>
                    </div>
                    <p>Standard</p>
                  </div>
                  <div className="pricing-body">
                    <h2>
                      <sup>$</sup>
                      45
                      <span>month</span>
                    </h2>
                    <ul>
                      <li>Web Design</li>
                      <li>Web Development</li>
                      <li>Responsive Design</li>
                    </ul>
                    <Link to="/" className="template-btn">
                      Order Now
                    </Link>
                  </div>
                </div>
                <div className="grid">
                  <div className="pricing-header">
                    <div className="circuler-price">
                      <i>
                        <img src={sr3} alt="" />
                      </i>
                    </div>
                    <p>Premium</p>
                  </div>
                  <div className="pricing-body">
                    <h2>
                      <sup>$</sup>
                      50
                      <span>month</span>
                    </h2>
                    <ul>
                      <li>Web Design</li>
                      <li>Web Development</li>
                      <li>Responsive Design</li>
                    </ul>
                    <Link to="/" className="template-btn">
                      Order Now
                    </Link>
                  </div>
                </div>
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
    );
  }
}

export default PricingPlan;
