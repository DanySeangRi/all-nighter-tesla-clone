import React from 'react'
import carImage from "../../assets/images/learn-more/Model-Y-Standard-Specs-Mobile-Imperial.avif";
const BlackFooter = () => {
  return (
    <div>
            <div className="p-2 sm:p-12">
              <div className="bg-black text-white min-h-screen">
                <div className="max-w-7xl mx-auto">
                  {/* Header */}
                  <div className="px-6 lg:px-24 pt-10 lg:pt-16 mb-6 lg:mb-10">
                    <h1 className="text-2xl lg:text-4xl mb-2 lg:mb-4">
                      Model Y <span className="italic font-light">Standard</span>{" "}
                      Specs
                    </h1>
                    <p className="text-base lg:text-lg">Rear-Wheel Drive</p>
                  </div>
      
                  {/* Drive Section */}
                  <div className="px-6 lg:px-24 mb-8 lg:mb-12">
                    <h2 className="text-xl lg:text-2xl font-medium mb-6 lg:mb-8">
                      Drive
                    </h2>
      
                    {/* Mobile: 2 columns */}
                    <div className="grid grid-cols-2 gap-6 lg:hidden">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Battery</div>
                        <div className="text-base font-medium">Standard Range</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">
                          Range (EPA est.)
                        </div>
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
                        <div className="text-sm text-gray-400 mb-2">
                          Range (EPA est.)
                        </div>
                        <div className="text-base font-medium">321 mi</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-2">
                          Acceleration<sup>1</sup>
                        </div>
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
                    <h2 className="text-xl lg:text-2xl font-medium mb-6 lg:mb-8">
                      Dimensions
                    </h2>
      
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
                          <div className="text-sm text-gray-400 mb-1">
                            Weight (Curb Mass)
                          </div>
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
                          <div className="text-base font-medium">
                            15.4" Center Touchscreen
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400 mb-1">
                            Ground Clearance
                          </div>
                          <div className="text-base font-medium">6.4"</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400 mb-1">
                            Overall Width
                          </div>
                          <div className="text-base font-medium">
                            Folded mirrors: 78"
                          </div>
                          <div className="text-base font-medium">
                            Extended mirrors: 83.8"
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400 mb-1">
                            Overall Height
                          </div>
                          <div className="text-base font-medium">63.8"</div>
                        </div>
                      </div>
      
                      <div className="mt-6">
                        <div className="text-sm text-gray-400 mb-1">
                          Overall Length
                        </div>
                        <div className="text-base font-medium">188.7"</div>
                      </div>
                    </div>
      
                    {/* Desktop Layout */}
                    <div className="hidden lg:grid lg:grid-cols-4 gap-8">
                      <div>
                        <div className="text-sm text-gray-400 mb-2">
                          Weight (Curb Mass)
                        </div>
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
                        <div className="text-base font-medium">
                          15.4" Center Touchscreen
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-2">
                          Ground Clearance
                        </div>
                        <div className="text-base font-medium">6.4"</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-2">
                          Overall Width
                        </div>
                        <div className="text-base font-medium">
                          Folded mirrors: 78"
                        </div>
                        <div className="text-base font-medium">
                          Extended mirrors: 83.8"
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-2">
                          Overall Height
                        </div>
                        <div className="text-base font-medium">63.8"</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-2">
                          Overall Length
                        </div>
                        <div className="text-base font-medium">188.7"</div>
                      </div>
                    </div>
                  </div>
      
                  {/* Charging Section */}
                  <div className="border-t border-gray-800 px-6 lg:px-24 pt-8 lg:pt-12 mb-8 lg:mb-12">
                    <h2 className="text-xl lg:text-2xl font-medium mb-6 lg:mb-8">
                      Charging
                    </h2>
      
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-sm text-gray-400 mb-1 lg:mb-2">
                          Supercharging Max/Payment Type
                        </div>
                        <div className="text-base font-medium">
                          225 kW Max; Pay Per Use
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1 lg:mb-2">
                          Charging Speed<sup>2</sup>
                        </div>
                        <div className="text-base font-medium">
                          Up to 160 miles added in 15 minutes
                        </div>
                      </div>
                    </div>
                  </div>
      
                  {/* Warranty Section */}
                  <div className="border-t border-gray-800 px-6 lg:px-24 pt-8 lg:pt-12 mb-8 lg:mb-12">
                    <h2 className="text-xl lg:text-2xl font-medium mb-6 lg:mb-8">
                      Warranty
                    </h2>
      
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-sm text-gray-400 mb-1 lg:mb-2">
                          Basic Vehicle
                        </div>
                        <div className="text-base font-medium">
                          4 years or 50,000 mi,
                        </div>
                        <div className="text-base font-medium">
                          whichever comes first
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1 lg:mb-2">
                          Battery & Drive Unit
                        </div>
                        <div className="text-base font-medium">
                          8 years or 100,000 mi,
                        </div>
                        <div className="text-base font-medium mb-4">
                          whichever comes first
                        </div>
                        <button className="text-base underline hover:no-underline">
                          See Details
                        </button>
                      </div>
                    </div>
                  </div>
      
                  {/* Compare Models */}
                  <div className="border-t border-gray-800 px-6 lg:px-24 pt-8 lg:pt-12 pb-8">
                    <button className="text-xl underline hover:no-underline">
                      Compare Models
                    </button>
                  </div>
      
                  {/* Footnotes */}
                  <div className="px-6 lg:px-24 font-medium py-8 text-xs lg:text-sm text-gray-300 space-y-3">
                    <p>
                      Vehicle shown for illustrative purposes only. Actual model may
                      vary.
                    </p>
                    <p>
                      <sup>1</sup> Third-party subscriptions may be required.
                    </p>
                    <p>
                      <sup>2</sup> Range added in 15 minutes is based on{" "}
                      <button className="underline hover:no-underline">
                        constant speed data
                      </button>
                      .
                    </p>
                    <p>
                      <sup>3</sup> Full Self-Driving (Supervised) requires the driver
                      to remain attentive at all times and does not make the vehicle
                      autonomous.
                    </p>
                    <p className="pt-2">
                      Certain high data usage vehicle features require at least
                      Standard Connectivity, including maps, navigation and voice
                      commands. Access to features that use cellular data and
                      third-party licenses are subject to change.{" "}
                      <button className="underline hover:no-underline">
                        Learn more about Standard Connectivity and any limitations
                      </button>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default BlackFooter
