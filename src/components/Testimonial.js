import React, {Component} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonialImg_1 from '../Assets/Images/testimonial/1.jpg';
import testimonialImg_2 from '../Assets/Images/testimonial/2.jpg';
import testimonialImg_3 from '../Assets/Images/testimonial/3.jpg';

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
      <div className='testimonial-area'>
        <div className='container'>
          <div className='testimonial-active'>
            <Slider {...settings}>
              <div className='testimonial-wrap'>
                <div className='testimonial-item'>
                  <div className='testimonial-icon'>
                    <i className='fi flaticon-writer'></i>
                  </div>
                  <div className='testimonial-content'>
                    <p>
                      If you are going to use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum.
                    </p>
                  </div>
                  <div className='testimonial-img'>
                    <img src={testimonialImg_1} alt='' />
                  </div>
                  <div className='testimonial-content'>
                    <h4>Jimmy Alex</h4>
                    <span>SEO of Northy</span>
                  </div>
                </div>
              </div>
              <div className='testimonial-wrap'>
                <div className='testimonial-item'>
                  <div className='testimonial-icon'>
                    <i className='fi flaticon-writer'></i>
                  </div>
                  <div className='testimonial-content'>
                    <p>
                      If you are going to use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum.
                    </p>
                  </div>
                  <div className='testimonial-img'>
                    <img src={testimonialImg_2} alt='' />
                  </div>
                  <div className='testimonial-content'>
                    <h4>Jimmy Alex</h4>
                    <span>SEO of Northy</span>
                  </div>
                </div>
              </div>
              <div className='testimonial-wrap'>
                <div className='testimonial-item'>
                  <div className='testimonial-icon'>
                    <i className='fi flaticon-writer'></i>
                  </div>
                  <div className='testimonial-content'>
                    <p>
                      If you are going to use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum.
                    </p>
                  </div>
                  <div className='testimonial-img'>
                    <img src={testimonialImg_3} alt='' />
                  </div>
                  <div className='testimonial-content'>
                    <h4>Jimmy Alex</h4>
                    <span>SEO of Northy</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className='white_svg'>
          <svg x='0px' y='0px' viewBox='0 186.5 1920 113.5'>
            <polygon points='0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 '></polygon>
          </svg>
        </div>
      </div>
    );
  }
}

export default Testimonial;
