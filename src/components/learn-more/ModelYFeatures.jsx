import React from "react";
import FeatureVideo from "./FeatureVideo";
import InfoCard from "./InfoCard";
import { learnMoreData, affordabilityData, connected } from "./learnMoreData";
const ModelYFeatures = () => {
  return (
    <section>
      {/* --- SECTION 1: EVERYTHING YOU WANT --- */}
      <section className="card">
        <div className=" md:px-12">
          <div className="w-full h-142.5 lg:h-225  bg-amber-400 relative rounded-none min-[700px]:rounded-xl overflow-hidden">
            {/* REPLACED WITH NEW COMPONENT */}
            <FeatureVideo src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-Y-Standard-Everything-Mobile.mp4" />
          </div>
        </div>
        <InfoCard data={learnMoreData} />
      </section>

      {/* --- SECTION 2: MORE THAN A CAR --- */}
      <section className="secound-card mt-24 md:mt-36 min-[1440px]:mt-40">
        <div className="px-0">
          <div className=" md:px-12">
            <div className="w-full h-122.5 min-[1440px]:h-168 bg-amber-400 relative rounded-none min-[700px]:rounded-xl overflow-hidden">
              {/* REPLACED WITH NEW COMPONENT */}
              <FeatureVideo src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-Y-Standard-Software-Mobile.mp4" />
            </div>
          </div>
        </div>
        <div className="px-6 md:px-12 xl:px-40 mt-10 md:mt-10">
          <div className="max-w-7xl ">
            <h1 className="text-[40px] xl:text-[48px] text-[#171A20] font-semibold leading-tight">
              More Than a Car
            </h1>
            <p className="mt-4 md:mt-4 text-[20px] xl:text-[20px] text-[#5C5E62] font-normal leading-normal">
              Model Y Standard includes all the fun. Park at your favorite spot
              and play music, movies and games through the center 15.4-inch
              touchscreen. Active Camp Mode to keep your cabin comfortable while
              you stream, relax or spend the night...
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THEATER --- */}
      <section className="third-card mt-24 md:mt-36">
        <div className="px-6 md:px-12 xl:px-40">
          {/* Video full width */}
          <div className="w-full h-122.5 min-[1440px]:h-168 bg-amber-400 relative rounded-xl overflow-hidden">
            <FeatureVideo src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-Y-Standard-Theater-Mobile-EMEA.mov" />
          </div>

          {/* Text below video */}
          <div className="mt-6 md:mt-8">
            <h1 className="text-[40px] xl:text-[48px] text-[#171A20] font-semibold leading-tight">
              Transform Your Car Into a Theater
            </h1>
            <p className="mt-4 md:mt-5 text-[16px] xl:text-[20px] text-[#5C5E62] font-normal max-w-3xl leading-normal">
              Sit back, relax, and watch your favorite movies and shows in Tesla
              Theater — a high-resolution center touchscreen with fully
              immersive audio.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 4 & 5: MUSIC & GAME --- */}
      <section className="card mt-20 md:mt-20 px-6 md:px-12 xl:px-40">
        {/* First Card */}
        <div className="flex flex-col lg:flex-row-reverse items-start gap-8 lg:gap-12 pt-20 pb-30">
          <div className="w-full lg:w-[70%] order-1 lg:order-2">
            <div className="w-full h-92.25 xl:h-132 bg-amber-400 relative rounded-xl overflow-hidden">
              <img
                src="/src/assets/images/learn-more/Model-Y-Standard-Music-Desktop.jpg"
                alt="Turn Up the Music"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="flex-1 w-full lg:w-[30%] lg:pl-12 order-2 lg:order-1">
            <h1 className="text-[40px] xl:text-[48px] text-[#171A20] font-semibold leading-tight">
              Turn Up the Music
            </h1>
            <p className="mt-6 md:mt-5 text-[16px] xl:text-[20px] text-[#5C5E62] leading-normal max-w-md">
              Sound insulation makes your favorite song sound even better.
              Select Caraoke to turn your cabin into your own private karaoke
              lounge.
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pb-38">
          <div className="w-full lg:w-[70%] order-1 lg:order-2">
            <div className="w-full h-92.25 xl:h-132 bg-amber-400 relative rounded-xl overflow-hidden">
              <img
                src="/src/assets/images/learn-more/Model-Y-Standard-Game-Desktop.avif"
                alt="Game Anywhere"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="flex-1 w-full lg:w-[30%] order-2 lg:order-1 flex flex-col">
            <h1 className="text-[40px] xl:text-[48px] text-[#171A20] font-semibold leading-tight">
              Game Anywhere
            </h1>
            <p className="mt-6 md:mt-6 text-[20px] xl:text-[20px] text-[#5C5E62] leading-normal max-w-md">
              Use the touchscreen or steering wheel to play games in Tesla
              Arcade. Connect a controller through Bluetooth for more fun.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: ALWAYS CONNECTED --- */}
      <section className="six-card mt-24 md:mt-36">
        <div className="px-0 md:px-12">
          <div className="card">
            <div className=" md:px-12">
              <div className="w-full h-122.5 lg:h-212.5  bg-amber-400 relative rounded-none min-[700px]:rounded-xl overflow-hidden">
                {/* REPLACED WITH NEW COMPONENT */}
                <FeatureVideo src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-Y-Standard-Connected-Mobile.mp4" />
              </div>
            </div>
          </div>
          <InfoCard data={connected} />
        </div>

        {/* --- SECTION 7: ALL THE RANGE YOU NEED --- */}
        <div className="card mt-24 md:mt-36">
          <div className="px-0 md:px-12">
            <div className="w-full h-122.5  lg:h-212.5  min-[1440px]:h-145 mx-auto bg-amber-400 relative rounded-none md:rounded-xl overflow-hidden">
              <img
                src="/src/assets/images/learn-more/Model-Y-Standard-Range-Desktop.avif"
                alt="All the Range You Need"
                className="w-full h-full object-cover rounded-none md:rounded-xl"
              />
            </div>
          </div>
          <div className="px-6 md:px-12 xl:px-40 mt-10 md:mt-10">
            <div className="max-w-7xl">
              <h1 className="text-[40px] xl:text-[48px] text-[#171A20] font-semibold leading-tight">
                All the Range You Need
              </h1>
              <p className="mt-4 md:mt-4 text-[20px] xl:text-[20px] text-[#5C5E62] font-normal max-w-3xl leading-normal">
                Go anywhere with up to 321 miles of EPA estimated range on a
                single charge. Navigate on longer trips with Trip Planner and
                your Tesla will add Supercharging stops along the way.
              </p>
            </div>
          </div>
        </div>

        <div className="three-box mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-center xl:justify-between gap-y-12 md:gap-x-12 px-6 md:px-12 xl:px-40 text-black w-full font-sans">
          <div className="flex flex-col items-center md:items-start min-w-50">
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-[48px] md:text-[48px] font-bold tracking-[-1.5px] leading-none ">
                15
              </span>
              <span className="text-[24px] md:text-[24px] font-medium">
                min
              </span>
            </div>
            <p className="text-[16px] md:text-[20px] font-semibold uppercase tracking-[1.5px] text-neutral-800 text-center md:text-left leading-tight">
              Recharge up to 160 miles²
            </p>
          </div>
          <div className="hidden md:block w-[1.5px] h-15 bg-neutral-200"></div>
          <div className="flex flex-col items-center md:items-start min-w-50">
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-[48px] md:text-[48px] font-medium tracking-[-1.5px] leading-none">
                75,000
              </span>
              <span className="text-[24px] md:text-[28px] font-bold">+</span>
            </div>
            <p className="text-[17px] md:text-[20px] font-semibold uppercase tracking-[1.5px] text-neutral-800 text-center md:text-left leading-tight">
              Global Superchargers
            </p>
          </div>
          <div className="hidden md:block w-[1.5px] h-15 bg-neutral-200"></div>
          <div className="flex flex-col items-center md:items-start min-w-50">
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-[48px] md:text-[48px] tracking-[-1.5px] leading-none font-medium ">
                99
              </span>
              <span className="text-[24px] md:text-[24px] font-medium">%</span>
            </div>
            <p className="text-[17px] md:text-[20px] font-semibold uppercase tracking-[1.5px] text-neutral-800 text-center md:text-left leading-tight">
              Supercharger uptime
            </p>
          </div>
        </div>

        {/* --- SECTION 8: MORE AFFORDABLE --- */}
        <div className="card mt-24 md:mt-36">
          <div className="px-0 md:px-12">
            <div className="w-full h-122.5 min-[1440px]:min-w-336 min-[1440px]:h-168 mx-auto bg-amber-400 relative rounded-none md:rounded-xl overflow-hidden">
              <img
                src="/src/assets/images/learn-more/Model-Y-Standard-Affordable-Desktop.avif"
                alt="More Affordable Than a Gas Car"
                className="w-full h-full object-cover rounded-none md:rounded-xl"
              />
            </div>
          </div>
          <InfoCard data={affordabilityData} />
        </div>

        {/* --- SECTION 9: SAFETY --- */}
        <div className="card md:pt-38 px-6 md:px-12 xl:px-60 mt-12 flex pb-18 lg:pb-38">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 w-full">
            {/* Text content first on small screens */}
            <div className="w-full lg:w-112.5 order-2 lg:order-1">
              <h1 className="text-[40px] xl:text-[48px] text-[#171A20] font-semibold leading-tight">
                Engineered for Your Safety
              </h1>
              <div className="mt-6 text-[20px] xl:text-[20px] text-[#5C5E62] leading-normal space-y-6 max-w-md">
                <p>
                  Safety at Tesla is paramount. Every Tesla vehicle is designed
                  with impact-absorbing zones, a stiff passenger compartment to
                  minimize intrusion, and multiple airbags to help protect
                  occupants.
                </p>
                <p>
                  Active safety features can help reduce impact severity or
                  prevent accidents altogether. Forward Collision Warning,
                  Active Emergency Braking, and Lane Departure Avoidance come
                  standard.
                </p>
                <p>
                  The passive and active safety systems are engineered to make
                  Tesla vehicles the safest in the world with a very low
                  probability of injury.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-full order-1 lg:order-2">
              <div className="w-full h-92.25 xl:h-150 bg-amber-400 relative rounded-xl overflow-hidden">
                <img
                  src="/src/assets/images/learn-more/Model-Y-Standard-Safety-Desktop.avif"
                  alt="Engineered for Your Safety"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ModelYFeatures;
