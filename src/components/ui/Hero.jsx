import React, { useState, useEffect } from "react";
import heroBackgroundHome1 from "../../assets/images/homepage/Homepage-Promo-Meet-Model-Y-Mobile.jpg";
import heroBackgroundHome2 from "../../assets/images/homepage/Homepage-Promo-Meet-Model-3-Mobile.jpg";
import heroBackgroundHome3 from "../../assets/images/homepage/Homepage-Promo-Cybertruck-Mobile-US-v2.jpg";

const fallbackSlides = [
  {
    title: "Model Y",
    subtitle: "Order Online for Touchless Delivery",
    date: "",
    button1: "Custom Order",
    button2: "Existing Inventory",
    image: heroBackgroundHome1,
  },
  {
    title: "Model Y",
    subtitle: "Order Online for Touchless Delivery",
    date: "",
    button1: "Custom Order",
    button2: "Existing Inventory",
    image: heroBackgroundHome2,
  },
  {
    title: "Model Y",
    subtitle: "Order Online for Touchless Delivery",
    date: "",
    button1: "Custom Order",
    button2: "Existing Inventory",
    image: heroBackgroundHome3,
  },
];

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
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* Content */}
      <div className="relative h-full flex flex-col items-center text-white pt-16 px-6 text-center z-10">
        {/* Content Title */}
        <h1 className="text-[40px] font-medium transition-all duration-700">
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
          <button className="bg-blue-600 text-white w-[187px] h-10 rounded shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium cursor-pointer">
            {slides[currentIndex].button1}
          </button>
          <button className="bg-white/90 text-gray-800 w-[187px] h-10 rounded shadow-sm hover:bg-white transition-colors text-sm font-medium cursor-pointer">
            {slides[currentIndex].button2}
          </button>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-gray-600 cursor-pointer"
              }`}
            />
          ))}
        </div>

        {/* Navigation Btn */}
        <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 flex justify-between">
          <button
            onClick={prevSlide}
            className="hidden min-[1200px]:block rounded-sm p-2 bg-white/75 transition-colors shadow-lg cursor-pointer"
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
            onClick={nextSlide}
            className="hidden min-[1200px]:block rounded-sm p-2 bg-white/75 transition-colors shadow-lg cursor-pointer"
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
      </div>
    </section>
  );
}
