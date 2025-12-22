import React from "react";
import tee from "../../assets/images/navbar/ElectricSlideFeatured.avif";

export default function ShopApparelDropdown({ open, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={`absolute top-10 left-0 w-full bg-white z-40 overflow-hidden
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
        <div className="grid grid-cols-[1fr_1fr_1fr_1.2fr] gap-20">
          {/* MEN */}
          <Category
            title="Men"
            items={[
              "Best Sellers",
              "Tees",
              "Sweatshirts and Hoodies",
              "Outerwear",
              "Hats",
            ]}
          />

          {/* WOMEN */}
          <Category
            title="Women"
            items={[
              "Best Sellers",
              "Tees",
              "Sweatshirts and Hoodies",
              "Outerwear",
              "Hats",
            ]}
          />

          {/* KIDS */}
          <Category
            title="Kids"
            items={["Best Sellers", "Tees", "Onesies", "Outerwear", "Hats"]}
          />

          {/* FEATURED IMAGE */}
          <div className="flex flex-col items-start">
            <img
              src={tee}
              alt="Tesla Optimus Electric Slide Tee"
              className="w-full object-cover"
            />
            <p className="mt-6 text-xl font-medium">
              Tesla Optimus Electric Slide Tee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Category({ title, items }) {
  return (
    <div>
      <p className="text-sm font-medium">{title}</p>
      <div className="mt-3 mb-6 h-0.75 w-full bg-gray-300"></div>

      <ul className="space-y-4 text-[15px] text-gray-700">
        {items.map((item) => (
          <li key={item} className="cursor-pointer hover:text-black transition">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
