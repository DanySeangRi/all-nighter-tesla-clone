import React, { useState, useRef } from 'react'
import Hero from '../ui/Hero'
import HomeShowcaseCard from './HomeShowcaseCard'
import { carModel as HomeShowcaseData } from './data'
import SlideIndicator from '../ui/SlideIndicator'
import Button from '../ui/Button'
import currentOffersImg from '../../assets/images/homepage/Homepage-Grid-Current-Offers.jpg'
import americanHeroesImg from '../../assets/images/homepage/Homepage-Grid-American-Heroes-v2.jpg'
import { americanBtn} from "../ui/uiStyle";

import { cardBtn } from "../ui/uiStyle";
export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const offerCards = [
    {
      title: 'Current Offers',
      description: 'Explore limited-time offers on Tesla vehicles.',
      image: currentOffersImg,
      alt: 'current offer image',
      button: americanBtn[0],
    },
    {
      title: 'American Heroes',
      description: '$500 off for military, first responders, healthcare, teachers and students.',
      image: americanHeroesImg,
      alt: 'american heroes image',
      button: americanBtn[0],
    },
  ];

  const offerContainerClasses =
    "grid grid-rows-[200px_180px] sm:grid-rows-[200px_auto] lg:flex lg:flex-row-reverse lg:place-content-start w-full lg:flex-1 lg:h-[220px]";
  const offerImageClasses =
    'rounded-t-lg lg:rounded-none lg:rounded-r-lg overflow-hidden sm:hidden lg:block lg:w-[180px] lg:h-full';
  const offerContentClasses =
    'flex flex-col justify-between bg-[#f4f4f4] rounded-b-lg sm:rounded-t-lg lg:rounded-r-none p-6 lg:py-12 lg:pl-12 sm:min-w-[300px] sm:h-[180] lg:flex-1 lg:h-full';

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
    <section className=''>
      <Hero/>
      {/* showcase cards */}
      <section className="pt-6 pl-3 lg:pt-12 lg:pl-9 xl:pl-12 relative"> 
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory"
        >
          <div className="flex gap-4 xl:gap-6"> {/* CHANGED: Removed pr-3 */}
            {HomeShowcaseData.map((item, index) => (
              <div 
                key={index} 
                className={`snap-start${index === HomeShowcaseData.length - 1 ? ' pr-3 lg:pr-8' : ''}`}
              >
                <HomeShowcaseCard
                  title={item.title}
                  mobileImage={item.imageMobile}
                  desktopImage={item.imageDesktop}
                  cyberLogo={item.cyberLogo}
                  name={item.name}
                  underline="underline"
                  description={item.description}
                  width='w-82.5 lg:w-[606px] xl:w-[1024px]'
                  height='h-130 lg:w-[520px] xl:h-[580px]'
                  btn1={<Button title= {cardBtn[0].title} css={cardBtn[0].css}/>}
                  btn2={<Button title= {cardBtn[1].title} css={cardBtn[1].css}/>}
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
      </section>

      {/* offer section */}
      <section className='flex flex-col sm:flex-row grow mx-3 lg:mx-9 xl:mx-12 gap-4'>
        {offerCards.map(({ title, description, image, alt, button }) => (
          <div
            key={title}
            className={offerContainerClasses}
          >
            {/* offer image */}
            <div className={offerImageClasses}>
              <img
                src={image}
                alt={alt}
                className="w-full h-full lg:w-[180px] object-cover"
              />
            </div>

            {/* offer content */}
            <div className={offerContentClasses}>
              <div>
                <h2 className='text-[28px] lg:text-[34px] text-[#171a20] font-medium leading-[36px]'>
                  {title}
                </h2>
                <p className='text-[17px] lg:text-[20px] text-[#5c5e62]'>
                  {description}
                </p>
              </div>
              <div>
                <Button title={button.title} css={button.css} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </section> 
  )
}