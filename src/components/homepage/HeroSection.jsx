import React from 'react';
import backgroundImage from '../../assets/images/homepage/Homepage-Card-Model-Y-Desktop-US-v2.jpg';

export default function HeroSection() {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center pt-24">
        <h1 className="text-4xl font-bold text-black">Model Y</h1>
        <p className="text-lg text-black">Starting at $37,490</p>
        <p className="text-sm text-black">After Federal Tax Credit</p>
      </div>
      <div className="text-center pb-12">
        <div className="space-x-4">
          <button className="bg-white text-black font-bold py-2 px-12 rounded">
            Order Now
          </button>
          <button className="bg-gray-800 text-white font-bold py-2 px-12 rounded">
            Demo Drive
          </button>
        </div>
        <p className="text-xs text-black mt-4">
          *Price before incentives is $44,990, excluding taxes and fees. Subject to change.
        </p>
        <p className="text-xs text-black">
          Learn about est. gas savings and tax credits.
        </p>
      </div>
    </div>
  );
}
