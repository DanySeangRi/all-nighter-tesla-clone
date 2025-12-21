import React, { useState } from "react";
import HomeShowcaseCard from "./HomeShowcaseCard";
import { powerSupplyData } from "./data";
import Button from "../ui/Button";
import { cardBtn } from "../ui/uiStyle";
import NavigationButtons from "../ui/NavigationButtons";

const PowerSupply = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = powerSupplyData.length;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === slides - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides - 1 : prev - 1
    );
  };

  return (
    <div className="relative mt-12 overflow-hidden">
      {/* Slider Track */}
      <div
        className="flex h-165 transition-transform duration-500 px-12 gap-6 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {powerSupplyData.map((item, index) => (
          <div key={item.id ?? index} className="">
            <HomeShowcaseCard
              mobileImage={item.imageMobile}
              desktopImage={item.imageDesktop}
              name={item.name}
              description={item.description}
              btn1={
                index !== 2 && (
                  <Button
                    title={cardBtn[0].title}
                    css={cardBtn[0].css}
                  />
                )
              }
              btn2={
                index === 2 ? (
                  <Button
                    title={cardBtn[5].title}
                    css={cardBtn[5].css}
                  />
                ) : (
                  <Button
                    title={cardBtn[1].title}
                    css={cardBtn[1].css}
                  />
                )
              }
            />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <NavigationButtons onPrev={prevSlide} onNext={nextSlide} />
    </div>
  );
};

export default PowerSupply;
