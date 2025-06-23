import { useEffect } from 'react';
import { useLocation } from 'wouter';

export const useScrollRestoration = () => {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location]);
}; 