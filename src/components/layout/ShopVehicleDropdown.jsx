import React from "react";

const DATA = [
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

export default function ShopVehicleDropdown({ open }) {
  if (!open) return null;

  return (
    <div className="absolute left-0 top-full w-full bg-white border-t z-40">
      <div className="max-w-7xl mx-auto px-12 py-12">
        <div className="grid grid-cols-5 gap-12">
          {DATA.map((col) => (
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
  );
}