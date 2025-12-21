import React, { useState, useEffect } from "react";
import Slideshow from "./Slideshow";
import SlideIndicator from "./SlideIndicator";
import NavigationButtons from "./NavigationButtons";
import { fallbackSlides } from "./heroData";

export default function Hero({ data = [], autoPlayTime = 4000 }) {
  const slides = data.length > 0 ? data : fallbackSlides;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => setCurrentIndex(index);
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayTime);

    return () => clearInterval(interval);
  }, [slides, autoPlayTime]);

  return (
    <section className="h-[80vh] w-full font-sans overflow-hidden bg-black text-white relative">
      {/* Background Image with Transition */}
      <Slideshow slides={slides} currentIndex={currentIndex} />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center text-white pt-16 px-6 text-center z-10">
        {/* Content Title */}
        <h1 className="text-[40px] md:text-[56px] font-medium transition-all duration-700">
          {slides[currentIndex].title}
        </h1>

        {/* Content Description */}
        <p className="text-sm mb-3">
          {slides[currentIndex].subtitle}
        </p>
        <p className="text-lg text-gray-400 mb-3">
          {slides[currentIndex].date}
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white grow w-[187px] md:w-[164px] lg:w-[200px] h-10 rounded shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium cursor-pointer">
            {slides[currentIndex].button1}
          </button>
          <button className="bg-white/90 text-gray-800 grow w-[187px] md:w-[164px] lg:w-[200px] h-10 rounded shadow-sm hover:bg-white transition-colors text-sm font-medium cursor-pointer">
            {slides[currentIndex].button2}
          </button>
        </div>

        {/* Slide indicators */}
        <SlideIndicator
          totalSlides={slides.length}
          currentIndex={currentIndex}
          onSlideChange={goToSlide}
          activeColor="bg-white cursor-pointer"
          inactiveColor="bg-gray-100/20 cursor-pointer"
        />

        {/* Navigation Btn */}
        <NavigationButtons onPrev={prevSlide} onNext={nextSlide} />
      </div>
    </section>
  );
}
