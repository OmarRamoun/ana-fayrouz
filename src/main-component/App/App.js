import React, {useRef, useEffect} from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import AllRoute from '../router';
import './App.css';
import '@assets/Css/Responsive.css';

import Lenis from '@studio-freight/lenis';

const App = () => {
  const lenisRef = useRef(null);

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

  useEffect(() => {
    // Ensure Lenis is only instantiated once
    if (!lenisRef.current) {
      const lenis = new Lenis({
        lerp: 0.1,
        wheelMultiplier: 0.9,
        gestureOrientation: 'vertical',
        normalizeWheel: false,
        duration: 1.2,
      });

      lenis.on('scroll', (e) => {
        console.log(e)
      })
      
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      
      requestAnimationFrame(raf)

      lenisRef.current = lenis;
    }
  }, []);

  return (
    <ParallaxProvider>
      <div className="App br-app">
        <AllRoute lenisState={lenisRef} />
      </div>
    </ParallaxProvider>
  );
}


export default App;
