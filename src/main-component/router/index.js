import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Homepage from '../HomePage';

const AllRoute = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AllRoute;
