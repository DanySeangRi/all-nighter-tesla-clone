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
      {/* Autonomous Section */}
      <div className="bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-8">
          {/* Video/Image Header */}
          <div className="mb-16">
            <img 
              src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2000" 
              alt="Tesla Interior"
              className="w-full h-[600px] object-cover rounded"
            />
          </div>

          {/* Title and Description */}
          <div className="text-left mb-16 px-4 sm:px-10 2xl:px-20">
            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-bold px-20 mb-6">
              The Future of Travel Is Autonomous
            </h2>
            <p className="text-lg text-gray-600 max-w-full px-20">
              Equipped with active safety features including Automatic Emergency
              Braking when obstacles get too close and Lane Departure Avoidance
              to keep you in your lane. Upgrade to Full Self-Driving
              (Supervised) to unlock more features.
            </p>
          </div>

          {/* Feature Cards Carousel */}
          <div className="px-40 relative overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentSlide * 100}% - ${
                  currentSlide * 24
                }px))`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="cursor-pointer group flex-shrink-0 w-full md:w-[600px] 2xl:w-[800px]"
                >
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    {slide.type === "image" ? (
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[580px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[580px] bg-black">
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
                  <h3 className="text-xl font-medium mb-3">{slide.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows - positioned at edges */}
            {currentSlide > 0 && (
              <button
                onClick={prevSlide}
                className="absolute top-1/2 -translate-y-1/2 left-8 bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition shadow-lg text-black z-10"
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
                className="absolute top-1/2 -translate-y-1/2 right-8 bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition shadow-lg text-black z-10"
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
      </div>

      {/* Specs Content */}
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl mb-2">
              Model Y <span className="italic font-light">Performance</span>{" "}
              Specs
            </h1>
            <p className="text-lg">All-Wheel Drive</p>
          </div>

          {/* Drive Section */}
          <div className="border-t border-gray-800 py-8">
            <h2 className="text-lg font-medium mb-8">Drive</h2>
            <div className="grid grid-cols-4 gap-x-16">
              <div>
                <div className="text-sm text-gray-400 mb-2">Battery</div>
                <div className="text-base font-medium">Long Range</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">
                  Range (EPA est.)
                </div>
                <div className="text-base font-medium">306 mi</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">
                  Acceleration<sup>1</sup>
                </div>
                <div className="text-base font-medium">3.3 s 0-60 mph</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Drive</div>
                <div className="text-base font-medium">
                  Dual Motor All-Wheel Drive
                </div>
              </div>
            </div>
          </div>

          {/* Dimensions Section */}
          <div className="border-t border-gray-800 py-8">
            <h2 className="text-lg font-medium mb-8">Dimensions</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-x-8 lg:gap-x-16 gap-y-8">
              {/* Row 1 */}
              <div>
                <div className="text-sm text-gray-400 mb-2">
                  Weight (Curb Mass)
                </div>
                <div className="text-base font-medium">4,466 lbs</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Cargo</div>
                <div className="text-base font-medium">76 cu ft</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Wheels</div>
                <div className="text-base font-medium">21"</div>
              </div>
              <div className="row-span-3 flex items-center justify-center relative">
                <img src={carImage} alt="Model Y" className="w-full" />
              </div>

              {/* Row 2 */}
              <div>
                <div className="text-sm text-gray-400 mb-2">Seating</div>
                <div className="text-base font-medium">5 adults</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Displays</div>
                <div className="text-base font-medium">
                  16" Center Touchscreen
                </div>
                <div className="text-base font-medium">8" Rear Touchscreen</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">
                  Ground Clearance
                </div>
                <div className="text-base font-medium">6"</div>
              </div>

              {/* Row 3 */}
              <div>
                <div className="text-sm text-gray-400 mb-2">Overall Width</div>
                <div className="text-base font-medium">
                  Folded mirrors: 78.0"
                </div>
                <div className="text-base font-medium">
                  Extended mirrors: 83.8"
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Overall Height</div>
                <div className="text-base font-medium">63.4"</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Overall Length</div>
                <div className="text-base font-medium">188.8"</div>
              </div>
            </div>
          </div>

          {/* Charging Section */}
          <div className="border-t border-gray-800 py-8">
            <h2 className="text-lg font-medium mb-8">Charging</h2>
            <div className="grid grid-cols-2 gap-x-16">
              <div>
                <div className="text-sm text-gray-400 mb-2">
                  Supercharging Max/Payment Type
                </div>
                <div className="text-base font-medium">
                  250 kW Max; Pay Per Use
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">
                  Charging Speed<sup>4</sup>
                </div>
                <div className="text-base font-medium">
                  Up to 144 miles added in 15 minutes
                </div>
              </div>
            </div>
          </div>

          {/* Warranty Section */}
          <div className="border-t border-gray-800 py-8">
            <h2 className="text-lg font-medium mb-8">Warranty</h2>
            <div className="grid grid-cols-2 gap-x-16">
              <div>
                <div className="text-sm text-gray-400 mb-2">Basic Vehicle</div>
                <div className="text-base font-medium">
                  4 years or 50,000 mi,
                </div>
                <div className="text-base font-medium">
                  whichever comes first
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">
                  Battery & Drive Unit
                </div>
                <div className="text-base font-medium">
                  8 years or 120,000 mi,
                </div>
                <div className="text-base font-medium">
                  whichever comes first
                </div>
              </div>
            </div>
            <button className="mt-4 text-sm underline hover:no-underline">
              See Details
            </button>
          </div>

          {/* Compare Models Section */}
          <div className="border-t border-b border-gray-800 py-8">
            <button className="text-lg font-medium underline hover:no-underline">
              Compare Models
            </button>
          </div>

          {/* Footnotes */}
          <div className="mt-8 mb-60 text-sm text-white space-y-4 leading-relaxed max-w-4xl">
            <p>
              Vehicle shown for illustrative purposes only. Actual model may
              vary.
            </p>
            <p>
              <sup>1</sup> Third-party subscriptions may be reqiured.
            </p>
            <p>
              <sup>2</sup> Range added in 15 minutes is based on{" "}
              <button className="underline hover:no-underline">
                constant speed data
              </button>
              .
            </p>
            <p>
              <sup>3</sup> Full Self-Driving (Supervised) requires the driver to
              remain attentive at all times and does not make the vehicle
              autonomous.
            </p>
            <p className="pt-2">
              Certain high data usage vehicle features require at least Standard
              Connectivity, including maps, navigation and voice commands.
              Access to features that use cellular data and third-party licenses
              are subject to change.{" "}
              <button className="underline hover:no-underline">
                Learn more about Standard Connectivity and any limitations
              </button>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Footer with Background Image */}
      <div className="bg-black h-[200px]"></div>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${footerImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-20"></div>

        {/* Content */}
        <div className="relative  h-75 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium mb-6">
            Model Y Standard
          </h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded text-sm font-medium transition ">
            Design Yours
          </button>
        </div>

        <footer className=" absolute left-110 -bottom-20 ">
         <Footer />
        </footer>

      </div>
    </div>
  );
};

export default TeslaSpecCard;
