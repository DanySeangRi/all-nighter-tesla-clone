import React from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";






// MobileChargingContent component
function MobileChargingContent({ onBack, onClose }) {
  const chargingItems = [
    "Home Charging",
    "Charging",
    "Supercharging",
    "Wall Connector for Business",
    "Supercharger for Business",
  ];

  return (
    <div className="fixed inset-0 z-70 bg-white px-4 pt-4 overflow-y-auto lg:hidden">
      {/* HEADER */}
      <div className="flex items-center justify-between h-14">
        <button onClick={onBack} className="text-xl">
          <IoIosArrowBack />
        </button>
        <h1 className="text-[16px] font-medium">Charging</h1>
        <button onClick={onClose}>
          <IoClose className="text-xl" />
        </button>
      </div>

      {/* CHARGING GRID */}
      <div className="grid grid-cols-3 gap-3 mt-6 text-center">
        {chargingItems.map((item) => (
          <div key={item}>
            <p className="mt-2 font-medium">{item}</p>

            <div className="flex justify-center space-x-4 text-sm text-gray-600 mt-1">
              <span className="underline cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg">Learn</span>
            </div>
          </div>
        ))}
      </div>

      {/* EXTRA LINKS */}
      <div className="p-4 mt-10 space-y-6 text-[16px] font-medium">
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">
          Help Me Charge
        </div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">
          Charging Calculator
        </div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">
          Charging With NACS
        </div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">
          Supercharger Voting
        </div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">
          Host a Supercharger
        </div>
      </div>
    </div>
  );
}



// MobileShopContent component
function MobileShopContent({ onBack, onClose }) {
  const shopItems = ["Apparel", "Accessories", "Lifestyle"];

  return (
    <div className="fixed inset-0 z-70 bg-white px-4 pt-4 overflow-y-auto lg:hidden">
      {/* HEADER */}
      <div className="flex items-center justify-between h-14">
        <button onClick={onBack} className="text-xl"><IoIosArrowBack /></button>
        <h1 className="text-[16px] font-medium">Shop</h1>
        <button onClick={onClose}>
          <IoClose className="text-xl" />
        </button>
      </div>

      {/* SHOP GRID */}
      <div className="grid grid-cols-3 gap-3 mt-6 text-center">
        {shopItems.map((item) => (
          <div key={item}>
            <p className="mt-2 font-medium">{item}</p>

            <div className="flex justify-center space-x-4 text-sm text-gray-600 mt-1">
                <span className="underline cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg">Explore</span>
            </div>
          </div>
        ))}
      </div>

      {/* EXTRA LINKS */}
      <div className="p-4 mt-10 space-y-6 text-[16px] font-medium">
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">Shop All</div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">Gift Cards</div>
      </div>
    </div>
  );
}


// Main MobileMenuContent component
export default function ShopMobileMenuContent({ activeMenu, onBack, onClose }) {
  if (activeMenu === "Charging") {
    return <MobileChargingContent onBack={onBack} onClose={onClose} />;
  } else if (activeMenu === "Vehicle Accessories" || activeMenu === "Apparel" || activeMenu === "Lifestyle") {
    return <MobileShopContent onBack={onBack} onClose={onClose} />;
  }
  return null;
}
