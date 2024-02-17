import React from 'react';

import sr1 from '../assets/images/service/10.png';

const Scrollbar = () => (
  <div className="col-lg-12" style={{ position: 'fixed', zIndex: '10000' }}>
    <div className="header-menu">
      <ul className="smothscroll">
        <li>
          <a href="#home">
            <img src={sr1} alt="" />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Scrollbar;
