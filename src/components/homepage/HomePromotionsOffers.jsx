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
      const card = container.children[0]?.children[index];
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      }
    }
  };

  const handleScroll = (e) => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 5;
    
    if (isAtEnd) {
      if (currentIndex !== HomeShowcaseData.length - 1) {
        setCurrentIndex(HomeShowcaseData.length - 1);
      }
      return;
    }
    
    const cards = Array.from(container.children[0]?.children || []);
    if (cards.length === 0) return;
    
    let maxVisibility = 0;
    let mostVisibleIndex = 0;
    
    cards.forEach((card, index) => {
      const cardLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;
      const cardRight = cardLeft + cardWidth;
      
      const visibleLeft = Math.max(scrollLeft, cardLeft);
      const visibleRight = Math.min(scrollLeft + clientWidth, cardRight);
      const visibleWidth = Math.max(0, visibleRight - visibleLeft);
      const visibilityRatio = visibleWidth / cardWidth;
      
      if (visibilityRatio > maxVisibility) {
        maxVisibility = visibilityRatio;
        mostVisibleIndex = index;
      }
    });
    
    if (mostVisibleIndex !== currentIndex) {
      setCurrentIndex(mostVisibleIndex);
    }
  };

  return (
    <section>
      <Hero/>
      {/* showcase cards */}
      <div className="pt-6 pl-3 lg:pt-12 lg:pl-8 relative"> 
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory"
        >
          <div className="flex gap-4"> {/* CHANGED: Removed pr-3 */}
            {HomeShowcaseData.map((item, index) => (
              <div 
                key={index} 
                className={`snap-start${index === HomeShowcaseData.length - 1 ? ' pr-3 lg:pr-8' : ''}`}
              >
                <HomeShowcaseCard
                  title={item.title}
                  mobileImage={item.imageMobile}
                  desktopImage={item.imageDesktop}
                  name={item.name}
                  underline="underline"
                  description={item.description}
                  width='w-82.5 lg:w-[606px] xl:w-[1024px]'
                  height='h-130 lg:w-[520px] xl:h-[580px]'
                />
              </div>
            ))}
          </div>
        </div>

        {/* slide indicators */}
        <div className="  flex justify-center mt-8 px-3">
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