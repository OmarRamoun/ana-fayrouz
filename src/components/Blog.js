import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import blogImg_1 from '../Assets/Images/blog/1.jpg';
import blogImg_2 from '../Assets/Images/blog/2.jpg';
import blogImg_3 from '../Assets/Images/blog/3.jpg';
import blogAuthor from '../Assets/Images/blog/7.jpg';

class Blog extends Component {
  render() {
    return (
      <section id='blog' className='blog-section section-padding'>
        <div className='container'>
          <div className='col-l2'>
            <div className='section-title section-title2 text-center'>
              <span>From my Blog</span>
              <h2>Latest News</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col col-xs-12'>
              <div className='blog-grids clearfix'>
                <div className='grid'>
                  <div className='entry-media'>
                    <img src={blogImg_1} alt='' />
                  </div>
                  <div className='details'>
                    <h3>
                      <Link to='/'>Everything is easy when you think it easy</Link>
                    </h3>
                    <ul className='entry-meta'>
                      <li>
                        <img src={blogAuthor} alt='' />
                        By <Link to='/'>Lily Anne</Link>
                      </li>
                      <li>Octobor 12,2019</li>
                    </ul>
                  </div>
                </div>
                <div className='grid'>
                  <div className='entry-media'>
                    <img src={blogImg_2} alt='' />
                  </div>
                  <div className='details'>
                    <h3>
                      <Link to='/'>Everything is easy when you think it easy</Link>
                    </h3>
                    <ul className='entry-meta'>
                      <li>
                        <img src={blogAuthor} alt='' />
                        By <Link to='/'>Lily Anne</Link>
                      </li>
                      <li>Octobor 12,2019</li>
                    </ul>
                  </div>
                </div>
                <div className='grid'>
                  <div className='entry-media'>
                    <img src={blogImg_3} alt='' />
                  </div>
                  <div className='details'>
                    <h3>
                      <Link to='/'>Everything is easy when you think it easy</Link>
                    </h3>
                    <ul className='entry-meta'>
                      <li>
                        <img src={blogAuthor} alt='' />
                        By <Link to='/'>Lily Anne</Link>
                      </li>
                      <li>Octobor 12,2019</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='white_svg'>
          <svg x='0px' y='0px' viewBox='0 186.5 1920 113.5'>
            <polygon points='0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 '></polygon>
          </svg>
        </div>
      </section>
    );
  }
}

export default Blog;
