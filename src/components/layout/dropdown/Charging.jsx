import React from "react";

import charging from "../../../assets/images/navbar/Mega-Menu-Charging-Charging.png";
import homeCharging from "../../../assets/images/navbar/Mega-Menu-Charging-Home-Charging.png";
import superCharging from "../../../assets/images/navbar/Mega-Menu-Charging-Supercharger-For-Business.png";
import connector from "../../../assets/images/navbar/Mega-Menu-Charging-Supercharging-NA.png";
import business from "../../../assets/images/navbar/Mega-Menu-Charging-Charging-for-Business.png";

const energyItems = [
  { name: "Charging", img: charging, learnOnly: true },
  { name: "Home Charging", img: homeCharging },
  { name: "Supercharging", img: superCharging },
  { name: "Wall Connector for Business", img: connector },
  { name: "Supercharging for Business", img: business },
];

const links = [
  "Help Me Charge",
  "Charging Calculator",
  "Charging With NACS",
  "Supercharger Voting",
  "Host a Supercharger",
];

export default function Charging({ open }) {
  return (
    <div
      className={`absolute left-0 top-14 z-50 w-full bg-white
        transition-all duration-500 ease-out
        ${
          open
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2"
        }
      `}
    >
      <div className="mx-auto max-w-7xl py-14">
        <div className="grid grid-cols-[3fr_1fr] gap-10">
          {/* LEFT PRODUCTS */}
          <div className="grid grid-cols-4 gap-6">
            {energyItems.map((item, i) => (
              <div key={item.name} className="text-center">
                {/* IMAGE ONLY ANIMATION */}
                <div className="h-24 flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className={`h-28 object-contain
                      transition-all duration-600 ease-out
                      ${
                        open
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-6"
                      }
                    `}
                    style={{
                      transitionDelay: open ? `${i * 120}ms` : "0ms",
                    }}
                  />
                </div>

                {/* STATIC TEXT */}
                <h4 className="mt-3 text-[15px] font-medium text-[#171A20]">
                  {item.name}
                </h4>

                <div className="mt-2 flex justify-center gap-4 text-[13px] text-[#5C5E62] underline">
                  <span className="cursor-pointer">Learn</span>
                  {!item.learnOnly && (
                    <span className="cursor-pointer">Order</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT LINKS (STATIC) */}
          <div className="border-l pl-10">
            <ul className="space-y-3 text-[14px] font-semibold text-[#171A20]">
              {links.map((link) => (
                <li key={link} className="cursor-pointer hover:underline">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
