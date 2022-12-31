import React from 'react';

import sr1 from '../Assets/Images/service/10.png';
const Scrollbar = () => {
  return (
    <div className='col-lg-12'>
      <div className='header-menu'>
        <ul className='smothscroll'>
          <li>
            <a href='#home'>
              <img src={sr1} alt='' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Scrollbar;
