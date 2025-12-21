import React, { useState } from "react";

const VEHICLE_DATA = [
  {
    title: "Cybertruck",
    items: [
      "Featured Products",
      "Floor Mats",
      "Interior",
      "Exterior",
      "Bed",
      "Wheels and Tires",
      "Parts",
      "Keys",
    ],
  },
  {
    title: "Model S",
    items: [
      "Best Sellers",
      "Floor Mats",
      "Interior",
      "Exterior",
      "Wheels and Tires",
      "Parts",
      "Keys",
    ],
  },
  {
    title: "Model 3",
    items: [
      "Best Sellers",
      "Floor Mats",
      "Interior",
      "Exterior",
      "Wheels and Tires",
      "Parts",
      "Keys",
    ],
  },
  {
    title: "Model X",
    items: [
      "Best Sellers",
      "Floor Mats",
      "Interior",
      "Exterior",
      "Wheels and Tires",
      "Parts",
      "Keys",
    ],
  },
  {
    title: "Model Y",
    items: [
      "Best Sellers",
      "Floor Mats",
      "Interior",
      "Exterior",
      "Wheels and Tires",
      "Parts",
      "Keys",
    ],
  },
];

export default function ShopHoverDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* NAV LINKS */}
      <nav className="flex gap-8 text-[14px] font-medium">
        <span className="cursor-pointer hover:underline">Charging</span>
        <span className="cursor-pointer hover:underline">
          Vehicle Accessories
        </span>
        <span className="cursor-pointer hover:underline">Apparel</span>
        <span className="cursor-pointer hover:underline">Lifestyle</span>
      </nav>

      {/* DROPDOWN */}
      <div
        className={`absolute left-1/2 top-full w-screen -translate-x-1/2 bg-white
          transition-all duration-300 ease-out
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <div className="max-w-7xl mx-auto px-12 py-12">
          <div className="grid grid-cols-5 gap-12">
            {VEHICLE_DATA.map((col) => (
              <div key={col.title}>
                {/* TITLE */}
                <h4 className="text-[15px] font-medium text-[#171A20]">
                  {col.title}
                </h4>

                {/* DIVIDER */}
                <div className="mt-2 mb-6 h-[3px] w-full bg-[#D0D1D2]" />

                {/* LINKS */}
                <ul className="space-y-4 text-[14px] text-[#393C41]">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="cursor-pointer hover:underline"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
