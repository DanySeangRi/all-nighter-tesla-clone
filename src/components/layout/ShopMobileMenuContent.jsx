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
import MobileApparelContent from "./MobileApparelContent"; // NEW IMPORT
import MobileLifestyleContent from "./MobileLifestyleContent"; // NEW IMPORT

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
      className={`fixed inset-0 z-70 w-[70%] bg-white  overflow-y-auto lg:hidden transform transition-transform ease-in-out duration-300 ${
        // Removed px-4
        showMenu ? "translate-x-37" : "translate-x-full"
      }`}
    >
      {/* HEADER */}
     <div className="sticky top-0 z-10 flex items-center justify-between  h-12 bg-white px-4">
        {" "}
        {/* Added sticky, top-0, z-10, bg-white, px-4 */}
        <button onClick={onBack} className="text-xl">
          <IoIosArrowBack />
        </button>
       
        {/* Changed title to Apparel */}
        <button onClick={onClose}>
          <IoClose className="text-xl" />
        </button>
      </div>
    

      {/* CHARGING GRID */}
      <div className="grid grid-cols-1 gap-3 p-5  text-center">   <span className="text-start">
          <h1 className="text-[20px] font-semibold p-2">Charging</h1>
        </span>
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

  const shopItems = [
    { name: "Cybertruck", image: cyber }, // Keeping car models for Vehicle Accessories
    { name: "Model S", image: models },
    { name: "Model 3", image: model3 },
    { name: "Model X", image: modelx },
    { name: "Model Y", image: modely },
    // Removed Lifestyle items from here
  ];

  return (
    <div
      className={`fixed inset-0 z-70 w-[70%] bg-white overflow-y-auto lg:hidden transform transition-transform ease-in-out duration-300 ${
        // Removed px-4
        showMenu ? "translate-x-37" : "translate-x-full"
      }`}
    >
      {/* HEADER */}
      <div className="sticky top-0 z-10 flex items-center justify-between  h-14 bg-white px-4">
        {" "}
        {/* Added sticky, top-0, z-10, bg-white, px-4 */}
        <button onClick={onBack} className="text-xl">
          <IoIosArrowBack />
        </button>
        <h1 className="text-[16px] font-medium">Apparel</h1>{" "}
        {/* Changed title to Apparel */}
        <button onClick={onClose}>
          <IoClose className="text-xl" />
        </button>
      </div>

      {/* SHOP GRID */}
      <div className="grid grid-cols-1 gap-3 p-4  mt-6 text-center">
        {shopItems.map((item) => (
          <div key={item.name}>
            {" "}
            {/* Use item.name as key */}
            <img
              src={item.image}
              alt={item.name}
              className="bg-gray-100 rounded-sm"
            />{" "}
            <p className=" font-medium py-4">{item.name}</p>
          </div>
        ))}
        {/* View All Button outside the map, after all items */}
        <div className="cursor-pointer p-2 border-2 hover:bg-gray-100  rounded-sm">
          View All
        </div>
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
  } else if (activeMenu === "Apparel") {
    // Modified condition
    return (
      <MobileApparelContent // Render new component for Apparel
        onBack={onBack}
        onClose={onClose}
        isParentMenuOpen={isParentMenuOpen}
      />
    );
  } else if (activeMenu === "Lifestyle") {
    // NEW condition for Lifestyle
    return (
      <MobileLifestyleContent // Render new component for Lifestyle
        onBack={onBack}
        onClose={onClose}
        isParentMenuOpen={isParentMenuOpen}
      />
    );
  } else if (
    activeMenu === "Vehicle Accessories" // Modified condition
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
