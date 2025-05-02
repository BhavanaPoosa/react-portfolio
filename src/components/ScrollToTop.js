import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/*  Whenever the route (pathname) changes, scroll to top instantly  */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);          // or  { top: 0, behavior: 'smooth' }
  }, [pathname]);

  return null;  // this component renders nothing
}
