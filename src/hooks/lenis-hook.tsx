import { useContext } from 'react';
import { LenisContext } from '@contexts';
import Lenis from '@studio-freight/lenis';

const useLenis = (): Lenis | undefined => {
  const context = useContext(LenisContext);
  console.log('context', context);
  if (context === undefined) {
    throw new Error('useLenis must be used within a LenisProvider');
  }
  return context.lenis;
};

export { useLenis };
