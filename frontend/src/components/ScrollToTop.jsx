import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jab bhi pathname (URL) badle, top par scroll karo
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Yeh component kuch bhi render nahi karta, bas kaam karta hai
}

export default ScrollToTop;