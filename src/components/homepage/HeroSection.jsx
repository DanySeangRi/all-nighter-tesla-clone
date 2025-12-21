import React from 'react';
import useScroll from '../../../hooks/useScroll';
import OrderButton from './OrderButton';

export default function HeroSection({
  title,
  subtitle,
  video,
  showButtons = true,
}) {
  const isScrolled = useScroll(100);

export default function HeroSection({
  title,
  subtitle,
  video,
  showButtons = true,
}) {
  const isScrolled = useScroll(100);

  return (
    <div className="relative h-screen w-full">
      {/* Video Background */}
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        src={video}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-between py-24 text-center text-white">
        {/* Title */}
        <div
          className={`transform transition-all duration-1000 ease-in-out ${
            isScrolled ? '-translate-y-16 opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          <h1 className="text-5xl font-bold">{title}</h1>
          {subtitle && <p className="mt-2 text-lg">{subtitle}</p>}
        </div>

        {/* Buttons */}
        {showButtons && (
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-opacity duration-700 ease-in-out ${
              isScrolled ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <OrderButton theme="light" text="Explore Inventory" />
            <OrderButton theme="dark" text="Demo Drive" />
          </div>
        )}
      </div>
    </div>
  );
  );
}