import React, { useRef, useState } from "react";
import HomeShowcaseCard from "./HomeShowcaseCard";
import { powerSupplyData } from "./data";
import Button from "../ui/Button";
import { cardBtn } from "../ui/uiStyle";
import NavigationButtons from "../ui/NavigationButtons";
import SlideIndicator from "../ui/SlideIndicator";

const PowerSupply = () => {
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
    const next =
      currentIndex === powerSupplyData.length - 1 ? 0 : currentIndex + 1;

    setCurrentIndex(next);
    scrollToCard(next);
  };

  // Previous slide
  const prevSlide = () => {
    const prev =
      currentIndex === 0 ? powerSupplyData.length - 1 : currentIndex - 1;

    setCurrentIndex(prev);
    scrollToCard(prev);
  };

  // Update index on manual scroll
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.children[0].offsetWidth + 24; // gap-6 = 24px
    const index = Math.round(container.scrollLeft / cardWidth);

    setCurrentIndex(index);
  };

  return (
    <div className="relative mt-12">
      {/* Scrollable cards */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex gap-4 md:gap-6 px-3 md:px-12 h-175 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        {powerSupplyData.map((item, index) => (
          <div key={item.id ?? index} className="shrink-0 snap-center">
            <HomeShowcaseCard
              mobileImage={item.imageMobile}
              desktopImage={item.imageDesktop}
              name={item.name}
              description={item.description}
              btn1={
                index !== 2 && (
                  <Button title={cardBtn[0].title} css={cardBtn[0].css} />
                )
              }
              btn2={
                index === 2 ? (
                  <Button title={cardBtn[5].title} css={cardBtn[5].css} />
                ) : (
                  <Button title={cardBtn[1].title} css={cardBtn[1].css} />
                )
              }
            />
          </div>
        ))}
      </div>

      {/* Arrow navigation */}
      <NavigationButtons onPrev={prevSlide} onNext={nextSlide} />

      {/* Dot indicator */}

      {/* Dot indicator */}
      <div className="absolute left-1/2 bottom-30 -translate-x-1/2 lg:bottom-15 z-10">
        <SlideIndicator
          totalSlides={powerSupplyData.length}
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
  );
};

export default PowerSupply;
