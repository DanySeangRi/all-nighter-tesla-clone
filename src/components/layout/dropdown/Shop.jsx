import React from "react";

import charging from "../../../assets/images/navbar/Mega-Menu-Charging-Home-Charging.png";
import accessories from "../../../assets/images/navbar/Mega-Menu-Shop-Vehicle-Accessories.png";
import apparel from "../../../assets/images/navbar/Mega-Menu-Shop-Apparel.png";
import lifestyle from "../../../assets/images/navbar/Mega-Menu-Shop-Lifestyle.png";

const shopItems = [
  { name: "Charging", img: charging },
  { name: "Vehicle Accessories", img: accessories },
  { name: "Apparel", img: apparel },
  { name: "Lifestyle", img: lifestyle },
];

export default function Shop({ open }) {
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
      {/* CENTER CONTENT */}
      <div className="flex justify-center py-16">
        <div className="flex gap-10 text-center">
          {shopItems.map((item) => (
            <div key={item.name} className="group cursor-pointer">
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.name}
                className="h-28 mx-auto transition-transform duration-300
                  group-hover:scale-105"
              />

              {/* LABEL */}
              <p className="mt-6 text-[16px] font-medium text-[#171A20]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
