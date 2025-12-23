import React from 'react';
import useScroll from '../hooks/useScroll';

export default function Home() {
  const { x, y } = useScroll();

  return (
    <div style={{ height: '200vh', padding: '20px' }}> {/* Added height for scrolling */}
      <h1>Home Page</h1>
      <p>Scroll Position X: {x}</p>
      <p>Scroll Position Y: {y}</p>
      <p>Scroll down to see the Y position change.</p>
    </div>
  );
}
