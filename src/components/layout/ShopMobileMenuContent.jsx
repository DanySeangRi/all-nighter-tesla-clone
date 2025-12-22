import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import charging from "../../assets/images/navbar/WC_F8_Mobile_Menu.avif";
import adapter from "../../assets/images/navbar/FeaturedNavMPOS_1512830-00-A.avif";
import part from "../../assets/images/navbar/Faceplate_F8_Mobile_Menu.avif";
import cyber from "../../assets/images/navbar/ct_34_model.avif";
import models from "../../assets/images/navbar/ms_34_new.avif";
import model3 from "../../assets/images/navbar/m3_34_new.avif";
import modelx from "../../assets/images/navbar/MX_34_blue.avif";
import modely from "../../assets/images/navbar/shop-model-y-mobile.avif";
// MobileChargingContent component
function MobileChargingContent({ onBack, onClose }) {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMenu(true);
    }, 0);
    return () => {
      setShowMenu(false); // Reset state on unmount
      clearTimeout(timer);
    };
  }, []);

  const chargingItems = ["Adapter"];

  return (
    <div
      className={`fixed inset-0 z-70 bg-white px-4 pt-4  overflow-y-auto lg:hidden transform transition-transform ease-in-out duration-300 ${
        showMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between h-14">
        <button onClick={onBack} className="text-xl">
          <IoIosArrowBack />
        </button>

        <button onClick={onClose}>
          <IoClose className="text-xl" />
        </button>
      </div>
      <h1 className="text-[20px] font-semibold">Charging</h1>

      {/* CHARGING GRID */}
      <div className="grid grid-cols-1 gap-3 p-4 mt-6 text-center">
        {chargingItems.map((item) => (
          <div key={item}>
            <img src={charging} alt="" />
            <h1 className="my-6 font-semibold">Charger</h1>
            <img src={adapter} alt="" />
            <p className="mt-2 font-medium">{item}</p>
            <img src={part} alt="" />
            <p className="mt-3">Parts</p>

            <div className="flex justify-center space-x-4 text-sm text-gray-600 mt-1">
              <span className="underline cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg">
                Learn
              </span>
            </div>
            <div className="p-2 rounded-sm border-2 mt-3 space-y-3 text-[16px] font-medium text-center   mb-2">
              <button>View All</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// MobileShopContent component
function MobileShopContent({ onBack, onClose }) {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMenu(true);
    }, 0);
    return () => {
      setShowMenu(false); // Reset state on unmount
      clearTimeout(timer);
    };
  }, []);

  const shopItems = ["Cybertruck"];

  return (
    <div
      className={`fixed inset-0 z-70 bg-white px-4 pt-4 overflow-y-auto lg:hidden transform transition-transform ease-in-out duration-300 ${
        showMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between h-14">
        <button onClick={onBack} className="text-xl">
          <IoIosArrowBack />
        </button>
        <h1 className="text-[16px] font-medium">Shop</h1>
        <button onClick={onClose}>
          <IoClose className="text-xl" />
        </button>
      </div>

      {/* SHOP GRID */}
      <div className="grid grid-cols-1 gap-3 p-4  mt-6 text-center">
        {shopItems.map((item) => (
          <div key={item}>
            <img src={cyber} alt="" className="bg-gray-100 rounded-sm" />{" "}
            <p className=" font-medium py-4">{item}</p>
            <img src={models} alt="" className="bg-gray-100 rounded-sm" />
            <p className="font-medium py-4">Model S</p>
            <img src={model3} alt="" className="bg-gray-100 rounded-sm" />
            <p className="font-medium py-4">Model 3</p>
            <img src={modelx} alt="" className="bg-gray-100 rounded-sm" />
            <p className="font-medium py-4"> Model X</p>
            <img src={modely} alt="" className="bg-gray-100 rounded-sm" />
            <p className="font-medium py-4">Model Y</p>
            <div className="flex justify-center space-x-4 text-sm text-gray-600 mt-1"></div>
            <div className="cursor-pointer p-2 border-2 hover:bg-gray-100  rounded-sm">
              View All
            </div>
          </div>
        ))}
      </div>

      {/* EXTRA LINKS */}
    </div>
  );
}

// Main MobileMenuContent component
export default function ShopMobileMenuContent({
  activeMenu,
  onBack,
  onClose,
  isParentMenuOpen,
}) {
  if (activeMenu === "Charging") {
    return (
      <MobileChargingContent
        onBack={onBack}
        onClose={onClose}
        isParentMenuOpen={isParentMenuOpen}
      />
    );
  } else if (
    activeMenu === "Vehicle Accessories" ||
    activeMenu === "Apparel" ||
    activeMenu === "Lifestyle"
  ) {
    return (
      <MobileShopContent
        onBack={onBack}
        onClose={onClose}
        isParentMenuOpen={isParentMenuOpen}
      />
    );
  }
  return null;
}
