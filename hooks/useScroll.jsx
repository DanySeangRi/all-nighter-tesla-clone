import { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';

export default function useScroll() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };

    window.addEventListener('scroll', updateScrollPosition);
    window.addEventListener('resize', updateScrollPosition);

    updateScrollPosition(); // Set initial scroll position

    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
      window.removeEventListener('resize', updateScrollPosition);
    };
  }, []);

  return scrollPosition;
}
