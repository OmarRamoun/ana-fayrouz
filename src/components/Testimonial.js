import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonialImg_1 from '../assets/images/testimonial/1.jpg';
import testimonialImg_2 from '../assets/images/testimonial/2.jpg';
import testimonialImg_3 from '../assets/images/testimonial/3.jpg';

class Testimonial extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: false,
      slidesToScroll: 1,
      centerPadding: 30,
      focusOnSelect: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="testimonial-area">
        <div className="copy">
          <p>Words of my Clients</p>
        </div>
        <div className="container">
          <div className="testimonial-active" style={{ paddingInline: '30px' }}>
            <Slider {...settings}>
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <div className="testimonial-icon">
                    <i className="fi flaticon-writer" />
                  </div>
                  <div className="testimonial-content">
                    <p>
                      I had the pleasure of working with Ramoun on a project and I was extremely
                      impressed with his attention to details and ability to deliver high-quality
                      work on time. He is a skilled software engineer and a great team player. I
                      highly recommend him for any project.
                    </p>
                  </div>
                  <div className="testimonial-img">
                    <img src={testimonialImg_1} alt="" />
                  </div>
                  <div className="testimonial-content">
                    <h4>BP. Alex</h4>
                    <span>SEO of Northy</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <div className="testimonial-icon">
                    <i className="fi flaticon-writer" />
                  </div>
                  <div className="testimonial-content">
                    <p>
                      Ramoun is a top-notch developer, who consistently exceeds expectations. He is a
                      problem-solver and always goes above and beyond to deliver the best possible
                      solution. He is a great communicator and a pleasure to work with. I highly
                      recommend him to anyone looking for a reliable and skilled developer
                    </p>
                  </div>
                  <div className="testimonial-img">
                    <img src={testimonialImg_2} alt="" />
                  </div>
                  <div className="testimonial-content">
                    <h4>Rosa Naser</h4>
                    <span>Head of Product Development at Alex Lab</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <div className="testimonial-icon">
                    <i className="fi flaticon-writer" />
                  </div>
                  <div className="testimonial-content">
                    <p>
                      I had the opportunity to work with Omar on a project, and I was thoroughly
                      impressed with his skill set and work ethic. He is a true professional and
                      his expertise in web development was a great asset to our team. I would highly
                      recommend him for any project.
                    </p>
                  </div>
                  <div className="testimonial-img">
                    <img src={testimonialImg_3} alt="" />
                  </div>
                  <div className="testimonial-content">
                    <h4>Emily Brown</h4>
                    <span>Lead Developer at Xoommit Inc.</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="white_svg">
          <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
            <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 " />
          </svg>
        </div>
      </div>
    );
  }
}

export default Testimonial;
