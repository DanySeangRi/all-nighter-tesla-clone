
import React from "react";

export default function NavigationButtons({ onPrev, onNext }) {
  return (
    <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 flex justify-between z-30 pointer-events-auto">
      <button
        onClick={onPrev}
        className="hidden lg:block rounded-sm p-2 bg-white/75 transition-colors shadow-lg cursor-pointer"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 text-black/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={onNext}
        className="hidden lg:block rounded-sm p-2 bg-white/75 transition-colors shadow-lg cursor-pointer"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 text-black/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
