import React from "react";

export default function Discover({ open }) {
  return (
    <div
      className={`absolute left-0 top-14 w-full h-115.5 bg-white
        transition-all duration-500 ease-initial
        ${
          open
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2"
        }
        flex justify-center
      `}
    >
      <div className="py-10">
        <div className="flex space-x-20 text-[#171A20] ">

          {/* RESOURCES */}
          <div>
            <h4 className="mb-4 text-[14px] font-medium text-[#5C5E62]">
              Resources
            </h4>
            <ul className="space-y-4 text-[15px] font-medium">
              <li className="cursor-pointer hover:underline">Demo Drive</li>
              <li className="cursor-pointer hover:underline">Insurance</li>
              <li className="cursor-pointer hover:underline">Current Offers</li>
              <li className="cursor-pointer hover:underline">Learn</li>
              <li className="cursor-pointer hover:underline">Video Guides</li>
              <li className="cursor-pointer hover:underline">Customer Stories</li>
              <li className="cursor-pointer hover:underline">Events</li>
              <li className="cursor-pointer hover:underline">Safety</li>
            </ul>
          </div>

          {/* LOCATION SERVICES */}
          <div>
            <h4 className="mb-4 text-[14px] font-medium text-[#5C5E62]">
              Location Services
            </h4>
            <ul className="space-y-4 text-[15px] font-medium">
              <li className="cursor-pointer hover:underline">Find Us</li>
              <li className="cursor-pointer hover:underline">
                Find a Collision Center
              </li>
              <li className="cursor-pointer hover:underline">
                Find a Certified Installer
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="mb-4 text-[14px] font-medium text-[#5C5E62]">
              Company
            </h4>
            <ul className="space-y-4 text-[15px] font-medium">
              <li className="cursor-pointer hover:underline">About</li>
              <li className="cursor-pointer hover:underline">Careers</li>
              <li className="cursor-pointer hover:underline">
                Investor Relations
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}