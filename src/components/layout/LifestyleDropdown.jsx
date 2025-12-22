import React from "react";
import cybertruck from "../../assets/images/navbar/CT_for_kids_white_nav.avif"; // update path

const categories = [
  "Best Sellers",
  "Bags",
  "Drinkware",
  "Mini Teslas",

  "Gift Card",
];

export default function LifestyleDropdown({
  open,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div
      className={`fixed top-10 left-0 w-full bg-white z-40 overflow-hidden
        transition-all duration-500 ease-out
        ${
          open
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2 invisible"
        }
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="px-20 py-14">
        <div className="grid grid-cols-[1.2fr_2fr] gap-24">
          {/* LEFT SIDE – CATEGORIES */}
          <div className="grid grid-cols-4 gap-x-16 ">
            {categories.map((item) => (
              <div key={item}>
                <p className="text-sm font-medium">{item}</p>
                <div className="mt-3 h-0.75 w-full bg-gray-300"></div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE – FEATURED PRODUCT */}
          <div className="flex flex-col items-center">
            <img
              src={cybertruck}
              alt="Cybertruck for Kids"
              className="w-full max-w-lg object-contain"
            />
            <p className="mt-6 text-xl font-medium">Cybertruck for Kids</p>
          </div>
        </div>
      </div>
    </div>
  );
}
