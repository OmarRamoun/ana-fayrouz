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
        <div className='copy'>
          <p>Words of my Clients</p>
        </div>
        <div className='container'>
          <div className='testimonial-active' style={{paddingInline: '30px'}}>
            <Slider {...settings}>
              <div className='testimonial-wrap'>
                <div className='testimonial-item'>
                  <div className='testimonial-icon'>
                    <i className='fi flaticon-writer'></i>
                  </div>
                  <div className='testimonial-content'>
                    <p>
                      I had the pleasure of working with Isra on a project and I was extremely
                      impressed with her attention to detail and ability to deliver high-quality
                      work on time. She is a skilled software engineer and a great team player. I
                      highly recommend her for any project.
                    </p>
                  </div>
                  <div className='testimonial-img'>
                    <img src={testimonialImg_1} alt='' />
                  </div>
                  <div className='testimonial-content'>
                    <h4>BP. Alex</h4>
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
                      Isra is a top-notch developer, who consistently exceeds expectations. She is a
                      problem-solver and always goes above and beyond to deliver the best possible
                      solution. She is a great communicator and a pleasure to work with. I highly
                      recommend her to anyone looking for a reliable and skilled developer
                    </p>
                  </div>
                  <div className='testimonial-img'>
                    <img src={testimonialImg_2} alt='' />
                  </div>
                  <div className='testimonial-content'>
                    <h4>Rosa Alejandro</h4>
                    <span>Head of Product Development at DEF Co.y</span>
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
                      I had the opportunity to work with Isra on a project, and I was thoroughly
                      impressed with her skill set and work ethic. She is a true professional and
                      her expertise in web development was a great asset to our team. I would highly
                      recommend her for any project.
                    </p>
                  </div>
                  <div className='testimonial-img'>
                    <img src={testimonialImg_3} alt='' />
                  </div>
                  <div className='testimonial-content'>
                    <h4>Emily Brown</h4>
                    <span>Lead Developer at Xoommit Inc.</span>
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
                      Isra was a pleasure to work with. She is a highly skilled developer with a great eye for detail. She was able to deliver high-quality work on time, and she was always willing to go the extra mile to make sure that the project was a success. I would recommend her to anyone looking for a top-notch developer.
                    </p>
                  </div>
                  <div className='testimonial-img'>
                    <img src={testimonialImg_3} alt='' />
                  </div>
                  <div className='testimonial-content'>
                    <h4>Jessica Lee</h4>
                    <span>CEO of VWX LLC</span>
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
