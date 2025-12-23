import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

import cybertruckTee from "../../assets/images/navbar/2124435-00-A_CybertruckHeadlightTaillightTeeMobileNav.avif";
import electricSlideTee from "../../assets/images/navbar/ElectricslideHamburgerMenuTransparent.avif";
import womensRelaxedTee from "../../assets/images/navbar/womens_relaxed_wordmark_hamburger_menu_transparent.avif";

// MobileApparelContent component
function MobileApparelContent({ onBack, onClose }) {
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

  const apparelItems = [
    { name: "Men", image: electricSlideTee },
    { name: "Women", image: womensRelaxedTee },
    { name: "Kids", image: cybertruckTee },
  ];

  return (
    <div
      className={`fixed inset-0 z-70 w-[70%] bg-white overflow-y-auto lg:hidden transform transition-transform ease-in-out duration-300 ${
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

      {/* APPAREL GRID */}
      <div className="grid grid-cols-1 gap-3 p-6 text-center ">
        {" "}
        <span className="text-start">
          <h1 className="text-[20px] font-semibold p-2">Apparel</h1>
        </span>
        {apparelItems.map((item) => (
          <div key={item.name}>
            <img
              src={item.image}
              alt={item.name}
              className="bg-gray-100 rounded-sm "
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

export default MobileApparelContent;
