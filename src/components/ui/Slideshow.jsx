import React from "react";

export default function Slideshow({ slides, currentIndex }) {
  return (
    <>
      {slides.map((slide, index) => {
        // Support both old format (single image) and new format (responsive images)
        const hasResponsiveImages = slide.images && typeof slide.images === 'object';
        const singleImage = slide.image;

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {hasResponsiveImages ? (
              <picture>
                {/* Desktop: min-width 900px */}
                <source
                  media="(min-width: 900px)"
                  srcSet={slide.images.desktop}
                />
                {/* Tablet: min-width 600px and max-width 899px */}
                <source
                  media="(min-width: 600px) and (max-width: 899px)"
                  srcSet={slide.images.tablet}
                />
                {/* Mobile: max-width 599px (default fallback) */}
                <img
                  src={slide.images.mobile}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
              </picture>
            ) : (
              <img
                src={singleImage}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
            )}
          </div>
        );
      })}
    </>
  );
}

