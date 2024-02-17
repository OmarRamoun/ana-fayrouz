import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import AllRoute from '../router';
import './App.css';
import '../../assets/Css/Responsive.css';

const App = () => (
  <ParallaxProvider>
    <div className="App br-app" id="scrool">
      <AllRoute />
    </div>
  </ParallaxProvider>
);

export default App;
