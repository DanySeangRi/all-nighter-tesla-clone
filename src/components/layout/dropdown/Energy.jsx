import React from "react";
import solarPanel from "../../../assets/images/navbar/Mega-Menu-Energy-Solar-Panels.png";
import solarRoof from "../../../assets/images/navbar/Mega-Menu-Energy-Solar-Roof.png";
import powerWall from "../../../assets/images/navbar/Mega-Menu-Energy-Powerwall-US.png";
import megaPack from "../../../assets/images/navbar/Mega-Menu-Energy-Megapack.png";

const energyItems = [
  { name: "Solar Panels", img: solarPanel },
  { name: "Solar Roof", img: solarRoof },
  { name: "Powerwall", img: powerWall },
  { name: "Megapack", img: megaPack, learnOnly: true },
];

const links = [
  "Schedule a Consultation",
  "Why Solar",
  "Incentives",
  "Support",
  "Partner with Tesla",
  "Commercial",
  "Utilities",
];

export default function Energy({ open }) {
  return (
    <div
      className={`absolute left-0 top-14 w-full bg-white
        transition-all duration-500 ease-out
        ${
          open
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2"
        }
      `}
    >
      <div className="mx-auto max-w-7xl py-14">
        <div className="grid grid-cols-[3fr_1fr]">

          {/* LEFT: ENERGY PRODUCTS */}
          <div className="grid grid-cols-4 items-start">
            {energyItems.map((item, i) => (
              <div key={item.name} className="text-center">

                {/* IMAGE ONLY ANIMATION */}
                <div className="h-24 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className={`h-28 object-contain
                      transition-all duration-600 ease-out
                      ${
                        open
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-8"
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
                  <span>Learn</span>
                  {!item.learnOnly && <span>Order</span>}
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT: LINKS (STATIC) */}
          <div className="border-l pl-10">
            <ul className="space-y-3 text-[14px] font-semibold text-[#171A20]">
              {links.map((link) => (
                <li
                  key={link}
                  className="cursor-pointer hover:underline"
                >
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
