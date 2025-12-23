import React, { useState, useRef, useEffect } from "react";
import BlackFooter from "./BlackFooter.jsx";
import slideImage1 from "../../assets/images/learn-more/Model-Y-Standard-FSD-Carousel-Slide-1-Desktop.avif";
import slideImage2 from "../../assets/images/learn-more/Model-Y-Standard-FSD-Carousel-Slide-2-Desktop.avif";
import footerImage from "../../assets/images/learn-more/Model-Y-Standard-End-Desktop.avif";
import Video from "./VideoDisplay.jsx";
import Footer from "../layout/Footer.jsx";

const TeslaSpecCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  /* ---------------- SLIDES ---------------- */
  const slides = [
    {
      type: "image",
      image: slideImage1,
      title: "Full Self-Driving (Supervised)",
      description:
        "A suite of advanced driver-assistance features designed to provide more active guidance and assisted driving under your active supervision.",
    },
    {
      type: "image",
      image: slideImage2,
      title: "Front-Facing Cameras",
      description:
        "Enhanced visibility for greater safety, easier parking and driver-assistance features like Actually Smart Summon.",
    },
    {
      type: "video",
      title: "Blind Spot Monitoring",
      description:
        "Illuminated warning lights and on-screen visualizations help you safely check your surroundings.",
    },
  ];

  const gap = 16; // px, matches gap-4 in Tailwind
  const visibleSlides = 2; // how many cards visible on md+ screens
  const maxSlideIndex = Math.max(slides.length - visibleSlides, 0);

  /* ---------------- MEASURE CARD ---------------- */
  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
  }, [cardRef]);

  /* ---------------- NAVIGATION ---------------- */
  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlideIndex));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const translateX = currentSlide * (cardWidth + gap);

  return (
    <div className="bg-black text-white">
      {/* ================= HERO VIDEO ================= */}
      <div className="bg-white text-black py-10">
        <div className="px-4 sm:px-6 md:px-10">
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
        <div className="px-6 mb-30 sm:px-10 2xl:px-20">
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
        <div className="px-4 sm:px-10 md:px-40 relative overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${translateX}px)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                ref={index === 0 ? cardRef : null} // measure first card
                className="shrink-0 w-full md:w-1/2 2xl:w-200 cursor-pointer group"
              >
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  {slide.type === "image" ? (
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className=" h-75 md:h-100 lg:h-125 2xl:h-145 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative h-75 md:h-100 lg:h-125 2xl:h-145 bg-black">
                      <Video
                        id={`carousel-video-${index}`}
                        height="h-full"
                        autoPlay
                        loop
                        muted
                      />
                      <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-md flex items-center gap-2 hover:bg-white/30 transition">
                        <div className="w-0 h-0 border-t-6 border-t-transparent border-l-8 border-l-white border-b-6 border-b-transparent" />
                        <span className="text-white text-sm font-medium">
                          Play
                        </span>
                      </button>
                    </div>
                  )}
                </div>

                <h3 className="text-[40px] font-medium mb-3">{slide.title}</h3>
                <p className="text-[18px] text-gray-600">{slide.description}</p>
              </div>
            ))}
          </div>

          {/* ================= ARROWS ================= */}
          {currentSlide > 0 && (
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 left-0 md:left-8 bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-lg text-black z-10"
            >
              ←
            </button>
          )}

          {currentSlide < maxSlideIndex && (
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -translate-y-1/2 right-0 md:right-8 bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-lg text-black z-10"
            >
              →
            </button>
          )}
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <BlackFooter />

      {/* ================= FOOTER IMAGE ================= */}
      <div
        className="relative h-screen sm:h-80 md:h-96 lg:h-150 xl:h-175 2xl:h-200 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerImage})` }}
      >
        <div className="relative h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-medium mb-6">Model Y Standard</h1>
          <button className="bg-blue-600 px-10 py-2 rounded text-sm font-medium hover:bg-blue-700">
            Design Yours
          </button>
        </div>

        <div className="absolute left-120 -bottom-10 hidden lg:block">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TeslaSpecCard;
