import React from 'react';
import carImage from '../../assets/images/learn-more/Model-Y-Performance-Specs-Desktop-US-Imperial.png';

const TeslaSpecsCard = () => {
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium mb-4">The Future of Travel Is Autonomous</h2>
            <p className="text-sm text-gray-600 max-w-4xl mx-auto">
              Equipped with active safety features including Automatic Emergency Braking when obstacles get too close and Lane Departure Avoidance to keep you in your lane. Upgrade to Full Self-Driving (Supervised) to unlock more features.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="cursor-pointer group">
              <div className="relative mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800" 
                  alt="Full Self-Driving"
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button className="absolute top-6 right-6 bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <h3 className="text-2xl font-medium mb-3">Full Self-Driving (Supervised)</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                A suite of advanced driver-assistance features designed to provide more active guidance and assisted driving under your active supervision.
              </p>
            </div>

            {/* Card 2 */}
            <div className="cursor-pointer group">
              <div className="relative mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800" 
                  alt="Front-Facing Cameras"
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button className="absolute top-6 right-6 bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <h3 className="text-2xl font-medium mb-3">Front-Facing Cameras</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Enhanced visibility for greater safety, easier parking and driver-assistance features like Actually Smart Summon.
              </p>
            </div>

            {/* Card 3 */}
            <div className="cursor-pointer group">
              <div className="relative mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800" 
                  alt="Blind Spot Monitoring"
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button className="absolute top-6 right-6 bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <h3 className="text-2xl font-medium mb-3">Blind Spot Monitoring</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Illuminated warning lights and on-screen visualizations help you safely check your surroundings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Specs Content */}
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl mb-2">
              Model Y <span className="italic font-light">Performance</span> Specs
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
                <div className="text-sm text-gray-400 mb-2">Range (EPA est.)</div>
                <div className="text-base font-medium">306 mi</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Acceleration<sup>1</sup></div>
                <div className="text-base font-medium">3.3 s 0-60 mph</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Drive</div>
                <div className="text-base font-medium">Dual Motor All-Wheel Drive</div>
              </div>
            </div>
          </div>

          {/* Dimensions Section */}
          <div className="border-t border-gray-800 py-8">
            <h2 className="text-lg font-medium mb-8">Dimensions</h2>
            
            <div className="grid grid-cols-4 gap-x-16 gap-y-8">
              {/* Row 1 */}
              <div>
                <div className="text-sm text-gray-400 mb-2">Weight (Curb Mass)</div>
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
                <img 
                  src={carImage} 
                  alt="Model Y"
                  className="w-full"
                />
                {/* Height dimension - right side */}
                <div className="absolute top-1/2 -translate-y-1/2 -right-8">
                  <div className="flex items-center gap-3">
                    <div className="w-px h-40 bg-gray-600"></div>
                    <span className="text-sm text-white whitespace-nowrap">63.4 in</span>
                  </div>
                </div>
                
                {/* Width dimension - bottom left */}
                <div className="absolute -bottom-6 left-8">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-px w-24 bg-gray-600"></div>
                    <span className="text-sm text-white whitespace-nowrap">83.8 in</span>
                  </div>
                </div>
                
                {/* Length dimension - bottom right */}
                <div className="absolute -bottom-6 right-20">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-px w-40 bg-gray-600"></div>
                    <span className="text-sm text-white whitespace-nowrap">188.8 in</span>
                  </div>
                </div>
              </div>
              
              {/* Row 2 */}
              <div>
                <div className="text-sm text-gray-400 mb-2">Seating</div>
                <div className="text-base font-medium">5 adults</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Displays</div>
                <div className="text-base font-medium">16" Center Touchscreen</div>
                <div className="text-base font-medium">8" Rear Touchscreen</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Ground Clearance</div>
                <div className="text-base font-medium">6"</div>
              </div>
              
              {/* Row 3 */}
              <div>
                <div className="text-sm text-gray-400 mb-2">Overall Width</div>
                <div className="text-base font-medium">Folded mirrors: 78.0"</div>
                <div className="text-base font-medium">Extended mirrors: 83.8"</div>
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
                <div className="text-sm text-gray-400 mb-2">Supercharging Max/Payment Type</div>
                <div className="text-base font-medium">250 kW Max; Pay Per Use</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Charging Speed<sup>4</sup></div>
                <div className="text-base font-medium">Up to 144 miles added in 15 minutes</div>
              </div>
            </div>
          </div>

          {/* Warranty Section */}
          <div className="border-t border-gray-800 py-8">
            <h2 className="text-lg font-medium mb-8">Warranty</h2>
            <div className="grid grid-cols-2 gap-x-16">
              <div>
                <div className="text-sm text-gray-400 mb-2">Basic Vehicle</div>
                <div className="text-base font-medium">4 years or 50,000 mi,</div>
                <div className="text-base font-medium">whichever comes first</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Battery & Drive Unit</div>
                <div className="text-base font-medium">8 years or 120,000 mi,</div>
                <div className="text-base font-medium">whichever comes first</div>
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
          <div className="mt-8 text-sm text-white space-y-4 leading-relaxed max-w-4xl">
            <p>Vehicle shown for illustrative purposes only. Actual model may vary.</p>
            <p><sup>1</sup> With rollout subtracted.</p>
            <p><sup>2</sup> Full Self-Driving (Supervised) requires the driver to remain attentive at all times and does not make the vehicle autonomous.</p>
            <p><sup>3</sup> Tesla Outlet Adapter is included with purchase.</p>
            <p><sup>4</sup> Range added in 15 minutes is based on <button className="underline hover:no-underline">constant speed data</button>.</p>
            <p className="pt-2">
              Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. 
              Access to features that use cellular data and third-party licenses are subject to change. <button className="underline hover:no-underline">Learn more about Standard Connectivity and any limitations</button>.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div 
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2000')"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-medium mb-6">Model Y Standard</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded text-sm font-medium transition">
            Design Yours
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeslaSpecsCard;