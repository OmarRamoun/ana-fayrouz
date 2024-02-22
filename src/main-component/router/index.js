import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from '../HomePage';

const AllRoute = ({lenisState}) => (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Homepage lenisState={lenisState} />} />
      </Routes>
    </Router>
  </div>
);

export default AllRoute;
