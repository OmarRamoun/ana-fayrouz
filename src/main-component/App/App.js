import React from 'react';
import AllRoute from '../router';
import {ParallaxProvider} from 'react-scroll-parallax';
import './App.css';
import '../../Assets/Css/Responsive.css';

const App = () => {
  return (
    <ParallaxProvider>
      <div className='App br-app' id='scrool'>
        <AllRoute />
      </div>
    </ParallaxProvider>
  );
};

export default App;
