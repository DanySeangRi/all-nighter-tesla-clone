import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import navImage from "../../assets/images/navbar/2044041-00-A-1_nav.avif";
import wirelessCharger from "../../assets/images/navbar/black_wireless_portable_charger_hamburgermenu.avif";
import cyberquad from "../../assets/images/navbar/cyberquad_hamburger_menu.avif";
import cybertruckBag from "../../assets/images/navbar/cybertruck_bag_hamburger_menu.avif";
import giftCard from "../../assets/images/navbar/Gift_card_hamburger_menu.avif";

// MobileLifestyleContent component
function MobileLifestyleContent({ onBack, onClose }) {
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

  const lifestyleItems = [
    { name: "Lifestyle Nav", image: navImage },
    { name: "Wireless Charger", image: wirelessCharger },
    { name: "Cyberquad", image: cyberquad },
    { name: "Cybertruck Bag", image: cybertruckBag },
    { name: "Gift Card", image: giftCard },
  ];

  return (
    <div
      className={`fixed inset-0 z-70 w-[70%] bg-white px-4 overflow-y-auto lg:hidden transform transition-transform ease-in-out duration-300 ${
        showMenu ? "translate-x-37" : "translate-x-full"
      }`}
    >
      {/* HEADER */}
      <div className="sticky top-0  z-10 flex items-center justify-between  h-12 bg-white px-4">
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
      {/* LIFESTYLE GRID */}{" "}
      <div className="grid grid-cols-1 gap-3 p-4 mt-6 text-center">
        <span className="text-start">
          <h1 className="text-[20px] font-semibold p-2">Lifestyle</h1>
        </span>
        {lifestyleItems.map((item) => (
          <div key={item.name}>
            <img
              src={item.image}
              alt={item.name}
              className="bg-gray-100 rounded-sm"
            />{" "}
            <p className=" font-medium py-4">{item.name}</p>
          </div>
        ))}
        <div className="cursor-pointer p-2 border-2 hover:bg-gray-100  rounded-sm">
          View All
        </div>
      </div>
    </div>
  );
}

export default MobileLifestyleContent;
