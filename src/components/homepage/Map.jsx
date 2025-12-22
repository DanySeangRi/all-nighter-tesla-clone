import React, { useState } from "react";
import { MapPin } from "lucide-react";
import Superchargers from "../../assets/images/homepage/map-icon/superchargers-tesla.svg";
import DestinationChargers from "../../assets/images/homepage/map-icon/charger-tesla.svg";

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);

  const handleFindMe = () => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.error(error)
    );
  };

  return (
    <div className="w-full bg-white">
      {/* Desktop padding wrapper */}
      <div className="max-w-[1440px] mx-auto xl:px-[48px] xl:py-[40px]">
        <div className="flex flex-col gap-12">
          {/* ================= MAP ================= */}
          <div className="relative w-full h-[300px] sm:h-[400px] xl:h-[550px] overflow-hidden rounded-none xl:rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13314326.018839667!2d-104.65713107243092!3d39.76453878103594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1677777777777"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <button
              onClick={handleFindMe}
              className="absolute bottom-4 left-4 z-10 flex items-center gap-2 bg-white px-4 py-2 rounded shadow text-sm"
            >
              <MapPin className="w-4 h-4" />
              Find Me
            </button>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="px-4 sm:px-6 md:px-10 xl:p-[12px]">
            {/* Header + Stats row */}
            <div className="flex flex-col xl:flex-row xl:justify-between gap-10">
              {/* LEFT */}
              <div>
                <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-gray-900 mb-3">
                  Find Your Charge
                </h1>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
                  View the network of Tesla Superchargers and Destination
                  Chargers available near you.
                </p>
              </div>

              {/* RIGHT – Stats */}
              <div className="flex flex-row gap-12">
                {/* Superchargers */}
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-3xl sm:text-4xl xl:text-5xl font-medium text-gray-900">
                      35,324
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">
                      Superchargers
                    </div>
                  </div>
                  <img
                    src={Superchargers}
                    alt="Superchargers Icon"
                    className="w-10 h-10 sm:w-10 sm:h-10 sm:mb-5"
                  />
                </div>

                {/* Destination */}
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-3xl sm:text-4xl font-medium text-gray-900">
                      30,094
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">
                      Destination Chargers
                    </div>
                  </div>
                  <img
                    src={DestinationChargers}
                    alt="Destination Chargers Icon"
                    className="w-10 h-10 sm:w-10 sm:h-10 sm:mb-5 "
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-row gap-4 mt-10">
              <button className="bg-black text-white px-10 py-3 rounded hover:bg-gray-800">
                View Network
              </button>
              <button className="bg-gray-100 px-10 py-3 rounded hover:bg-gray-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
