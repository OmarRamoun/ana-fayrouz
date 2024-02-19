import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import { LenisProvider } from '@contexts';
import AllRoute from '../router';
import './App.css';
import '../../assets/Css/Responsive.css';

const App = () => {

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   lenis.on('scroll', (e) => {
  //     console.log(e);
  //   });

  //   lenis.on('scroll', ScrollTrigger.update);

  //   gsap.ticker.add((time) => {
  //     lenis.raf(time * 1000);
  //   });

  //   gsap.ticker.lagSmoothing(0);
  // }, []);

  return (
    <ParallaxProvider>
      <LenisProvider>
        <div className="App br-app">
          <AllRoute />
        </div>
      </LenisProvider>
    </ParallaxProvider>
  );
}


export default App;
