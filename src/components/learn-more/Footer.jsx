import React from 'react';

export default function Footer() {
  const features = [
    {
      icon: (
        <svg className="w-16 h-16 mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: "Full Self-Driving (Supervised)",
      description: "A suite of advanced driver-assistance features designed to provide more active guidance and assisted driving under your active supervision."
    },
    {
      icon: (
        <svg className="w-16 h-16 mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="10" rx="2"/>
          <circle cx="7" cy="12" r="1"/>
          <circle cx="17" cy="12" r="1"/>
        </svg>
      ),
      title: "Front-Facing Cameras",
      description: "Enhanced visibility for greater safety, easier parking and driver-assistance features."
    },
    {
      icon: (
        <svg className="w-16 h-16 mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      title: "Blind Spot Monitoring",
      description: "Illuminated warning lights and on-screen visualizations help you safely check your surroundings."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Crect fill='%23e0e0e0' width='1600' height='900'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3ETesla Interior View%3C/text%3E%3C/svg%3E" 
          alt="Tesla Interior Dashboard View"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Full Self-Driving Section */}
      <section className="max-w-7xl mx-auto px-5 py-20">
        <h1 className="text-4xl md:text-5xl font-semibold mb-5 text-black">
          Let Full Self-Driving (Supervised) Navigate You Home
        </h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Give it 110%. At the end of your day, activate Full Self-Driving (Supervised) and your Model Y can navigate you back home. Full Self-Driving (Supervised) unlocks more features. All Tesla vehicles are equipped with active safety features including Automatic Emergency Braking when obstacles get too close and Lane Departure Avoidance to keep you in your lane. Feature availability dependent upon local governmental approvals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-100 p-10 rounded-lg">
              {feature.icon}
              <h2 className="text-2xl font-semibold mb-4 text-black">
                {feature.title}
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Charging Image Section */}
      <section className="w-full h-screen md:h-[70vh] overflow-hidden my-16">
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Crect fill='%23333' width='1600' height='900'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%23ccc' text-anchor='middle' dominant-baseline='middle'%3ETesla Charging%3C/text%3E%3C/svg%3E" 
          alt="Tesla Vehicle Charging"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Power Sharing Section */}
      <section className="bg-gray-50 py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold mb-5 text-black">
            Enough Power to Share
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Use your vehicle's battery and the Tesla Outlet Adapter to power other devices and appliances including space heaters, e-bikes and power tools.
          </p>
        </div>
      </section>
    </div>
  );
}