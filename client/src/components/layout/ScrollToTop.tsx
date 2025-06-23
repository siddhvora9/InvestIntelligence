import { ReactNode } from 'react';
import { useScrollRestoration } from '@/hooks/use-scroll-restoration';

interface ScrollToTopProps {
  children: ReactNode;
}

export const ScrollToTop = ({ children }: ScrollToTopProps) => {
  useScrollRestoration();
  return <>{children}</>;
}; 