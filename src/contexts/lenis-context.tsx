import React, {
  createContext, useRef, useEffect,
} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

interface LenisContextProps {
  lenis: Lenis | undefined;
}

interface LenisContextProviderProps {
  children: React.ReactNode;
}

const LenisContext = createContext<LenisContextProps>({
  lenis: undefined,
});

const LenisProvider = ({ children }: LenisContextProviderProps): React.JSX.Element => {
  const lenisRef = useRef<Lenis>();

  useEffect(() => {
    // Ensure Lenis is only instantiated once
    console.log('how many', lenisRef.current);
    if (!lenisRef.current) {
      const lenis = new Lenis({
        lerp: 0.1,
        wheelMultiplier: 0.9,
        gestureOrientation: 'vertical',
        normalizeWheel: false,
        duration: 1.2,
      });
      lenisRef.current = lenis as Lenis | undefined;

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }
  }, []);

  // eslint-disable-next-line
  const values: LenisContextProps = {
    lenis: lenisRef.current,
  };

  return <LenisContext.Provider value={values}>{children}</LenisContext.Provider>;
};

export { LenisContext, LenisProvider };
export type { LenisContextProps, LenisContextProviderProps };
