import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import VideoShowcase from '../src/components/learn-more/VideoShowcase';

export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/video" element={<VideoShowcase />} />
    </Routes>
  );
}