import React, { useState } from "react";
import carImage from "../../assets/images/learn-more/Model-Y-Standard-Specs-Mobile-Imperial.avif";
import slideImage1 from "../../assets/images/learn-more/Model-Y-Standard-FSD-Carousel-Slide-1-Desktop.avif";
import slideImage2 from "../../assets/images/learn-more/Model-Y-Standard-FSD-Carousel-Slide-2-Desktop.avif";
import footerImage from "../../assets/images/learn-more/Model-Y-Standard-End-Desktop.avif";
import Video from "./VideoDisplay.jsx";
import Footer from "../layout/Footer.jsx";

const TeslaSpecCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-black text-white">
      {/* Autonomous Section - Video and Description */}
      <div className="bg-white text-black py-10">
        <div className="max-w-full 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10">
          {/* Video/Image Header */}
          <div className="mb-16">
            <Video
              id="big-card"
              height="h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[600px]"
              className=""
              autoPlay={true}
              loop={true}
              muted={true}
            />
          </div>
        </div>

        {/* Title and Description */}
        <div className="text-left px-6 mb-30 sm:px-10 2xl:px-20">
          <h2 className="text-[40px] sm:text-4xl 2xl:text-5xl font-bold md:px-20">
            The Future of Travel Is Autonomous
          </h2>
          <p className="text-[20px] text-gray-600 max-w-full md:px-20">
            Equipped with active safety features including Automatic Emergency
            Braking when obstacles get too close and Lane Departure Avoidance to
            keep you in your lane. Upgrade to Full Self-Driving (Supervised) to
            unlock more features.
          </p>
        </div>

        {/* Feature Cards Carousel */}
        <div className="px-4 sm:px-10 md:px-40 relative overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${currentSlide * 100}% - ${
                currentSlide * 16
              }px))`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="cursor-pointer group shrink-0 w-full md:w-150 2xl:w-200"
              >
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  {slide.type === "image" ? (
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-75 md:h-100 lg:h-125 2xl:h-145 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative w-full h-75 md:h-100 lg:h-125 2xl:h-145 bg-black">
                      <Video
                        id={`carousel-video-${index}`}
                        height="h-full"
                        className="w-full"
                        autoPlay={true}
                        loop={true}
                        muted={true}
                      />
                      <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-md flex items-center gap-2 hover:bg-opacity-30 transition">
                        <div className="w-0 h-0 border-t-6 border-t-transparent border-l-8 border-l-white border-b-6 border-b-transparent"></div>
                        <span className="text-white text-sm font-medium">
                          Play
                        </span>
                      </button>
                    </div>
                  )}
                </div>
                <h3 className="text-[40px] font-medium mb-3">{slide.title}</h3>
                <p className="text-[18px] text-gray-600 leading-relaxed">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - positioned at edges */}
          {currentSlide > 0 && (
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 left-0 md:left-8 bg-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-gray-100 transition shadow-lg text-black z-10"
            >
              <svg
                className="w-6 h-6"
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
          )}

          {currentSlide < slides.length - 1 && (
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -translate-y-1/2 right-0 md:right-8 bg-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-gray-100 transition shadow-lg text-black z-10"
            >
              <svg
                className="w-6 h-6"
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
          )}
        </div>
      </div>

      {/* Specs Content */}
      <div className="p-2 sm:p-12">
        <div className="bg-black text-white min-h-screen">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="px-6 lg:px-24 pt-10 lg:pt-16 mb-6 lg:mb-10">
              <h1 className="text-2xl lg:text-4xl mb-2 lg:mb-4">
                Model Y <span className="italic font-light">Standard</span> Specs
              </h1>
              <p className="text-base lg:text-lg">Rear-Wheel Drive</p>
            </div>

            {/* Drive Section */}
            <div className="px-6 lg:px-24 mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium mb-6 lg:mb-8">Drive</h2>
              
              {/* Mobile: 2 columns */}
              <div className="grid grid-cols-2 gap-6 lg:hidden">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Battery</div>
                  <div className="text-base font-medium">Standard Range</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Range (EPA est.)</div>
                  <div className="text-base font-medium">321 mi</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Acceleration</div>
                  <div className="text-base font-medium">6.8 s 0-60 mph</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Drive</div>
                  <div className="text-base font-medium">Rear-Wheel Drive</div>
                </div>
              </div>

              {/* Desktop: 4 columns */}
              <div className="hidden lg:grid lg:grid-cols-4 gap-8">
                <div>
                  <div className="text-sm text-gray-400 mb-2">Battery</div>
                  <div className="text-base font-medium">Standard Range</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Range (EPA est.)</div>
                  <div className="text-base font-medium">321 mi</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Acceleration<sup>1</sup></div>
                  <div className="text-base font-medium">6.8 s 0-60 mph</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Drive</div>
                  <div className="text-base font-medium">Rear-Wheel Drive</div>
                </div>
              </div>
            </div>

            {/* Dimensions Section */}
            <div className="border-t border-gray-800 px-6 lg:px-24 pt-8 lg:pt-12 mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium mb-6 lg:mb-8">Dimensions</h2>

              {/* Mobile Layout */}
              <div className="lg:hidden">
                {/* Car Image */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-full max-w-md">
                    <img src={carImage} alt="Model Y" className="w-full" />
                    {/* Dimension Lines */}
                  </div>
                </div>

                {/* Specs Grid - Mobile */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Weight (Curb Mass)</div>
                    <div className="text-base font-medium">4,061 lbs</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Cargo</div>
                    <div className="text-base font-medium">74 cu ft</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Wheels</div>
                    <div className="text-base font-medium">18" or 19"</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Seating</div>
                    <div className="text-base font-medium">5 adults</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Displays</div>
                    <div className="text-base font-medium">15.4" Center Touchscreen</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Ground Clearance</div>
                    <div className="text-base font-medium">6.4"</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Overall Width</div>
                    <div className="text-base font-medium">Folded mirrors: 78"</div>
                    <div className="text-base font-medium">Extended mirrors: 83.8"</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Overall Height</div>
                    <div className="text-base font-medium">63.8"</div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-sm text-gray-400 mb-1">Overall Length</div>
                  <div className="text-base font-medium">188.7"</div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:grid lg:grid-cols-4 gap-8">
                <div>
                  <div className="text-sm text-gray-400 mb-2">Weight (Curb Mass)</div>
                  <div className="text-base font-medium">4,061 lbs</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Cargo</div>
                  <div className="text-base font-medium">74 cu ft</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Wheels</div>
                  <div className="text-base font-medium">18" or 19"</div>
                </div>
                <div className="row-span-3 flex items-center justify-center">
                  <img src={carImage} alt="Model Y" className="w-full" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Seating</div>
                  <div className="text-base font-medium">5 adults</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Displays</div>
                  <div className="text-base font-medium">15.4" Center Touchscreen</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Ground Clearance</div>
                  <div className="text-base font-medium">6.4"</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Overall Width</div>
                  <div className="text-base font-medium">Folded mirrors: 78"</div>
                  <div className="text-base font-medium">Extended mirrors: 83.8"</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Overall Height</div>
                  <div className="text-base font-medium">63.8"</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Overall Length</div>
                  <div className="text-base font-medium">188.7"</div>
                </div>
              </div>
            </div>

            {/* Charging Section */}
            <div className="border-t border-gray-800 px-6 lg:px-24 pt-8 lg:pt-12 mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium mb-6 lg:mb-8">Charging</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-gray-400 mb-1 lg:mb-2">Supercharging Max/Payment Type</div>
                  <div className="text-base font-medium">225 kW Max; Pay Per Use</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1 lg:mb-2">Charging Speed<sup>2</sup></div>
                  <div className="text-base font-medium">Up to 160 miles added in 15 minutes</div>
                </div>
              </div>
            </div>

            {/* Warranty Section */}
            <div className="border-t border-gray-800 px-6 lg:px-24 pt-8 lg:pt-12 mb-8 lg:mb-12">
              <h2 className="text-xl lg:text-2xl font-medium mb-6 lg:mb-8">Warranty</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-gray-400 mb-1 lg:mb-2">Basic Vehicle</div>
                  <div className="text-base font-medium">4 years or 50,000 mi,</div>
                  <div className="text-base font-medium">whichever comes first</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1 lg:mb-2">Battery & Drive Unit</div>
                  <div className="text-base font-medium">8 years or 100,000 mi,</div>
                  <div className="text-base font-medium mb-4">whichever comes first</div>
                  <button className="text-base underline hover:no-underline">See Details</button>
                </div>
              </div>
            </div>

            {/* Compare Models */}
            <div className="border-t border-gray-800 px-6 lg:px-24 pt-8 lg:pt-12 pb-8">
              <button className="text-xl underline hover:no-underline">Compare Models</button>
            </div>

            {/* Footnotes */}
            <div className="px-6 lg:px-24 font-medium py-8 text-xs lg:text-sm text-gray-300 space-y-3">
              <p>Vehicle shown for illustrative purposes only. Actual model may vary.</p>
              <p><sup>1</sup> Third-party subscriptions may be required.</p>
              <p>
                <sup>2</sup> Range added in 15 minutes is based on{" "}
                <button className="underline hover:no-underline">constant speed data</button>.
              </p>
              <p>
                <sup>3</sup> Full Self-Driving (Supervised) requires the driver to remain attentive at all times and does not make the vehicle autonomous.
              </p>
              <p className="pt-2">
                Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change.{" "}
                <button className="underline hover:no-underline">
                  Learn more about Standard Connectivity and any limitations
                </button>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Background Image */}
      <div className="bg-black h-50"></div>
      <div
        className="relative h-screen sm:h-80 md:h-96 lg:h-150 xl:h-175 2xl:h-200 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${footerImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-20"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium mb-6">
            Model Y Standard
          </h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white mb-90 px-10 py-2 rounded text-sm font-medium transition">
            Design Yours
          </button>
        </div>
        
        {/* Footer - Desktop */}
        <div className="absolute left-120 -bottom-10 hidden lg:block">
          <Footer />
        </div>
        
        {/* Footer - Mobile */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 py-4 lg:hidden">
          <div className="text-center text-white text-xs px-4">
            <p>Tesla © 2025 Privacy & Legal Vehicle Recalls News Learn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeslaSpecCard;