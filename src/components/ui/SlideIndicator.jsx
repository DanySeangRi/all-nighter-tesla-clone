import React from "react";

export default function SlideIndicator({ 
  totalSlides, 
  currentIndex, 
  onSlideChange 
}) {
  return (
    <div className="absolute bottom-6 flex justify-center space-x-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentIndex
              ? "bg-white"
              : "bg-gray-600 cursor-pointer"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

