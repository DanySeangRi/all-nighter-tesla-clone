import React, { useState, useRef } from "react";
import mobileImage from "../../assets/images/learn-more/Model-Y-Standard-End-Mobile.jpg";
import BlackFooter from "./BlackFooter.jsx";
import desktopImage from "../../assets/images/learn-more/Model-Y-Standard-End-Desktop.avif";
import Video from "./VideoDisplay.jsx";
import Footer from "../layout/Footer.jsx";
import NavigationButtons from "../ui/NavigationButtons";
import SlideIndicator from "../ui/SlideIndicator.jsx";
import { slides } from "./learnMoreData.js";

const TeslaSpecCard = () => {
  /* ---------------- SLIDES ---------------- */

  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Scroll to a specific card and center it
  const scrollToCard = (index) => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.children[index];
    if (!card) return;

    container.scrollTo({
      left: card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  // Next slide
  const nextSlide = () => {
    const next = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;

    setCurrentIndex(next);
    scrollToCard(next);
  };

  // Previous slide
  const prevSlide = () => {
    const prev = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(prev);
    scrollToCard(prev);
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentIndex(closestIndex);
  };

  return (
    <div className="bg-black text-white">
      {/* ================= HERO VIDEO ================= */}
      <div className="bg-white text-black py-10">
        <div className=" md:px-10">
          <div className="mb-16">
            <Video
              id="big-card"
              height="h-[300px] md:h-[400px] lg:h-[700px] 2xl:h-[1285px]"
              autoPlay
              loop
              muted
            />
          </div>
        </div>

        {/* ================= TITLE ================= */}
        <div className="px-6 mb-30 sm:px-10 2xl:px-40">
          <h2 className="text-[40px] sm:text-4xl 2xl:text-5xl font-bold md:px-20">
            The Future of Travel Is Autonomous
          </h2>
          <p className="text-[20px] text-gray-600 md:px-20">
            Equipped with active safety features including Automatic Emergency
            Braking and Lane Departure Avoidance. Upgrade to Full Self-Driving
            (Supervised) to unlock more features.
          </p>
        </div>

        {/* ================= CAROUSEL ================= */}
        <div className="w-full lg:pl-50 h-206 overflow-hidden relative ">
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex gap-2 md:gap-6 px-3 md:px-12 h-175 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="
             
                  shrink-0 snap-center
                  w-83.5
                  sm:w-82.5
                 
                  lg:w-[50vw]
                 
                "
              >
                <div className=" group mb-6  rounded-lg">
                  {slide.type === "image" ? (
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className=" w-82.5
                      sm:w-82.5
                     lg:w-[50vw]
                      object-cover 
                      relative h-75 
                      md:h-100 lg:h-125 
                      2xl:h-145 
                      transition-transform 
                      duration-300 group-hover:scale-98
                      rounded-lg"
                    />
                  ) : (
                    <div className="
                    h-75 md:h-100 lg:h-125 2xl:h-145 
                     transition-transform  
                      duration-300 group-hover:scale-98">
                      <Video id="small-card" height="h-full" />
                    </div>
                  )}
                </div>

                <h3 className="text-[40px] font-medium mb-3">{slide.title}</h3>
                <p className="text-[18px] text-gray-600">{slide.description}</p>
              </div>
            ))}
          </div>

          {/* ================= ARROWS ================= */}
          <NavigationButtons onPrev={prevSlide} onNext={nextSlide} />
          <div className="absolute left-1/2 bottom-30 -translate-x-1/2 lg:bottom-15 z-10">
            <SlideIndicator
              totalSlides={slides.length}
              currentIndex={currentIndex}
              activeColor="bg-gray-800 cursor-pointer"
              inactiveColor="bg-gray-300"
              onSlideChange={(index) => {
                setCurrentIndex(index);
                scrollToCard(index);
              }}
            />
          </div>
        </div>
      </div>

      <BlackFooter />

      <div
        className="relative min-h-screen bg-cover bg-center"
        
      >
         <picture>
            <source media="(min-width: 640px)" srcSet={desktopImage} />
            <img
              src={mobileImage}
            
              className="absolute inset-0 w-full h-full object-cover"
            />
          </picture>

        {/* Centered Content */}
        <div className="flex h-full flex-col items-center justify-center relative top-50  text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-medium mb-6">
            Model Y Standard
          </h1>

          <button className="bg-blue-600 px-10 py-2 rounded text-sm font-medium hover:bg-blue-700 transition">
            Design Yours
          </button>
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TeslaSpecCard;
