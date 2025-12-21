import React, { useState, useRef } from 'react'
import Hero from '../ui/Hero'
import HomeShowcaseCard from './HomeShowcaseCard'
import { carModel as HomeShowcaseData } from './data'
import SlideIndicator from '../ui/SlideIndicator'

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.offsetWidth || 0;
      const gap = 16; // gap-4 = 16px
      const scrollPosition = index * (cardWidth + gap);
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  const handleScroll = (e) => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10; // 10px threshold
    
    if (isAtEnd) {
      setCurrentIndex(HomeShowcaseData.length - 1);
      return;
    }
    
    const cardWidth = container.children[0]?.offsetWidth || 0;
    const gap = 16;
    const newIndex = Math.round(scrollLeft / (cardWidth + gap));
    
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < HomeShowcaseData.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section>
      <Hero/>
      {/* showcase cards */}
      <div className="pt-6 px-3 lg:pt-12 lg:px-8 relative">
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory"
        >
          <div className="flex gap-4 pr-3">
            {HomeShowcaseData.map((item, index) => (
              <div key={index} className="snap-start">
                <HomeShowcaseCard
                  title={item.title}
                  mobileImage={item.imageMobile}
                  desktopImage={item.imageDesktop}
                  name={item.name}
                  underline="underline"
                  description={item.description}
                  width='w-82.5 lg:w-[606px]'
                  height='h-130 lg:w-[520px]'
                />
              </div>
            ))}
          </div>
        </div>

        {/* slide indicators */}
        <div className="flex justify-center mt-8">
          <SlideIndicator
            totalSlides={HomeShowcaseData.length}
            currentIndex={currentIndex}
            onSlideChange={goToSlide}
            activeColor="bg-gray-800 cursor-pointer"
            inactiveColor="bg-gray-300"
          />
        </div>
      </div>
    </section> 
  )
}