import React from 'react';

const TeslaSpecsCard = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        {/* Drive Section */}
        <div className="border-t border-gray-800 py-6">
          <h2 className="text-sm font-medium mb-4">Drive</h2>
          <div className="grid grid-cols-4 gap-x-12">
            <div>
              <div className="text-xs text-gray-500 mb-1">Battery</div>
              <div className="text-sm">Long Range</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Range (EPA est.)</div>
              <div className="text-sm">306 mi</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Acceleration¹</div>
              <div className="text-sm">3.3 s 0-60 mph</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Drive</div>
              <div className="text-sm">Dual Motor All-Wheel Drive</div>
            </div>
          </div>
        </div>

        {/* Dimensions Section */}
        <div className="border-t border-gray-800 py-6">
          <h2 className="text-sm font-medium mb-4">Dimensions</h2>
          
          <div className="grid grid-cols-4 gap-x-12 gap-y-6">
            {/* Row 1 */}
            <div>
              <div className="text-xs text-gray-500 mb-1">Weight (Curb Mass)</div>
              <div className="text-sm">4,466 lbs</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Cargo</div>
              <div className="text-sm">76 cu ft</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Wheels</div>
              <div className="text-sm">21"</div>
            </div>
            <div className="row-span-3 flex items-center justify-center relative">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 120'%3E%3Cpath d='M30 80 Q30 50 55 42 L95 42 L110 35 L190 35 L205 42 L245 42 Q270 50 270 80 L270 88 L230 88 Q230 95 222 95 L215 95 Q207 95 207 88 L93 88 Q93 95 85 95 L78 95 Q70 95 70 88 L30 88 Z' fill='%23dc2626'/%3E%3Ccircle cx='80' cy='88' r='12' fill='%23222'/%3E%3Ccircle cx='220' cy='88' r='12' fill='%23222'/%3E%3Cpath d='M70 50 Q70 47 73 47 L110 47 Q113 47 113 50 L113 65 Q113 68 110 68 L73 68 Q70 68 70 65 Z' fill='%23444' opacity='0.4'/%3E%3Cpath d='M120 50 Q120 47 123 47 L177 47 Q180 47 180 50 L180 65 Q180 68 177 68 L123 68 Q120 68 120 65 Z' fill='%23444' opacity='0.4'/%3E%3Cpath d='M187 50 Q187 47 190 47 L227 47 Q230 47 230 50 L230 65 Q230 68 227 68 L190 68 Q187 68 187 65 Z' fill='%23444' opacity='0.4'/%3E%3C/svg%3E" 
                alt="Model Y"
                className="w-full"
              />
              <div className="absolute -top-2 right-8 text-xs text-gray-500">63.4 in</div>
              <div className="absolute -bottom-2 left-0 text-xs text-gray-500">83.8 in</div>
              <div className="absolute -bottom-2 right-0 text-xs text-gray-500">188.8 in</div>
            </div>
            
            {/* Row 2 */}
            <div>
              <div className="text-xs text-gray-500 mb-1">Seating</div>
              <div className="text-sm">5 adults</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Displays</div>
              <div className="text-sm">16" Center Touchscreen</div>
              <div className="text-sm">8" Rear Touchscreen</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Ground Clearance</div>
              <div className="text-sm">6"</div>
            </div>
            
            {/* Row 3 */}
            <div>
              <div className="text-xs text-gray-500 mb-1">Overall Width</div>
              <div className="text-sm">Folded mirrors: 78.0"</div>
              <div className="text-sm">Extended mirrors: 83.8"</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Overall Height</div>
              <div className="text-sm">63.4"</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Overall Length</div>
              <div className="text-sm">188.8"</div>
            </div>
          </div>
        </div>

        {/* Charging Section */}
        <div className="border-t border-gray-800 py-6">
          <h2 className="text-sm font-medium mb-4">Charging</h2>
          <div className="grid grid-cols-2 gap-x-12">
            <div>
              <div className="text-xs text-gray-500 mb-1">Supercharging Max/Payment Type</div>
              <div className="text-sm">250 kW Max; Pay Per Use</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Charging Speed4</div>
              <div className="text-sm">Up to 144 miles added in 15 minutes</div>
            </div>
          </div>
        </div>

        {/* Warranty Section */}
        <div className="border-t border-gray-800 py-6">
          <h2 className="text-sm font-medium mb-4">Warranty</h2>
          <div className="grid grid-cols-2 gap-x-12">
            <div>
              <div className="text-xs text-gray-500 mb-1">Basic Vehicle</div>
              <div className="text-sm">4 years or 50,000 mi,</div>
              <div className="text-sm">whichever comes first</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Battery & Drive Unit</div>
              <div className="text-sm">8 years or 120,000 mi,</div>
              <div className="text-sm">whichever comes first</div>
            </div>
          </div>
          <button className="mt-3 text-xs underline text-gray-400 hover:text-white">
            See Details
          </button>
        </div>

        {/* Compare Models Section */}
        <div className="border-t border-b border-gray-800 py-6">
          <h2 className="text-sm font-medium">Compare Models</h2>
        </div>

        {/* Footnotes */}
         <div className="mt-6 text-sm text-white space-y-3 leading-relaxed">
          <p>* Vehicle shown for illustrative purposes only. Actual model may vary.</p>
          <p><sup>1</sup> With rollout subtracted.</p>
          <p><sup>2</sup> Full Self-Driving (Supervised) requires the driver to remain attentive at all times and does not make the vehicle autonomous.</p>
          <p><sup>3</sup> Tesla Outlet Adapter is included with purchase.</p>
          <p><sup>4</sup> Range added in 15 minutes is based on <button className="underline">constant speed data</button>.</p>
          <p className="pt-2">Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change. <button className="underline">Learn more about Standard Connectivity and any limitations</button>.</p>
        </div>
      </div>
    </div>
  );
};

export default TeslaSpecsCard;