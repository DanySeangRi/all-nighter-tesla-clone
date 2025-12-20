import React, { useState } from 'react'
import Hero from '../ui/Hero'
import HomeShowcaseCard from './HomeShowcaseCard'
import HomeShowcaseData from './data'
import SlideIndicator from '../ui/SlideIndicator'

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section>
      <Hero/>

      {/* Showcase Cards */}
      <div className="pt-6 pl-3 relative">
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-4 pr-3">
            {HomeShowcaseData.map((item, index) => (
              <HomeShowcaseCard
                key={index}
                title={item.title}
                mobileImage={item.imageMobile}
                desktopImage={item.imageDesktop}
                name={item.name}
                underline="underline"
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* Slide indicators */}
        <div>
        <SlideIndicator
          totalSlides={HomeShowcaseData.length}
          currentIndex={currentIndex}
          onSlideChange={goToSlide}
        />
        </div>
      </div>
    </section>
  )
}
