import React from "react";
import modelS from "../../../assets/images/navbar/Mega-Menu-Vehicles-Model-S-New.png";
import model3 from "../../../assets/images/navbar/Mega-Menu-Vehicles-Model-3-Performance-LHD.png";
import modelY from "../../../assets/images/navbar/Mega-Menu-Vehicles-Model-Y-2-v2.png";
import modelX from "../../../assets/images/navbar/Mega-Menu-Vehicles-Model-X-New.png";
import cyberTruck from "../../../assets/images/navbar/Mega-Menu-Vehicles-Cybertruck-1x.png";
import Inventory from "../../../assets/images/navbar/Mega-Menu-Vehicles-Inventory.png";

const vehicles = [
  { name: "Model S", img: modelS },
  { name: "Model 3", img: model3 },
  { name: "Model Y", img: modelY },
  { name: "Model X", img: modelX },
  { name: "Cybertruck", img: cyberTruck },
  { name: "Inventory", img: Inventory, sub: ["New", "Pre-Owned"] },
];

const links = [
  "Full Self-Driving (Supervised)",
  "Current Offers",
  "Demo Drive",
  "Trade-in",
  "Vehicle Safety Report",
  "Pre-Owned",
  "Features",
  "Help Me Charge",
  "Help Me Choose",
  "Compare",
  "Safety",
  "Fleet",
  "Semi",
  "Roadster",
  "Robotaxi",
];

export default function Dropdown({ open }) {
  return (
    <div
      className={`absolute left-0 top-14 w-full bg-white z-40
        transition-all duration-500
        ${
          open
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2"
        }`}
    >
      <div className="mx-auto max-w-7xl py-12">
        <div className="grid grid-cols-[3fr_1fr] gap-12">
          {/* VEHICLES */}
          <div className="grid grid-cols-4 gap-y-12 mt-4">
            {vehicles.map((v, i) => (
              <div
                key={v.name}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`
                  text-center transform
                  transition-all duration-500 ease-initial
                  ${
                    open
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-6"
                  }
                `}
              >
                <div className="h-20 flex items-center justify-center">
                  <img
                    src={v.img}
                    alt={v.name}
                    className="h-28 object-contain"
                  />
                </div>

                <h4 className="mt-2 text-[15px] font-medium text-[#171A20]">
                  {v.name}
                </h4>

                <div className="mt-2 flex justify-center gap-4 text-[13px] text-[#5C5E62] underline">
                  {v.sub ? (
                    v.sub.map((s) => <span key={s}>{s}</span>)
                  ) : (
                    <>
                      <span>Learn</span>
                      <span>Order</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* LINKS */}
          <div className="border-l pl-10">
            <ul className="space-y-3 text-[14px] font-semibold text-black">
              {links.map((item) => (
                <li key={item} className="cursor-pointer hover:underline">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
