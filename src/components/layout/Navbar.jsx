import React, { useState } from "react";
import { IoHelpCircleOutline } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";
import { HiOutlineUserCircle } from "react-icons/hi2";

import Dropdown from "./dropdown/Dropdown";
import Energy from "./dropdown/Energy";
import Charging from "./dropdown/Charging";
import Discover from "./dropdown/Discover";
import Shop from "./dropdown/Shop";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = ["Vehicles", "Energy", "Charging", "Discover", "Shop"];

  return (
    // 🔑 ONE hover wrapper (keeps dropdown alive)
    <div className="relative" onMouseLeave={() => setActiveMenu(null)}>
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full bg-white">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <div className="font-['Tesla'] text-xl uppercase tracking-[0.5em] text-[#282c35]">
            Tesla
          </div>

          {/* MENU */}
          <ul className="hidden lg:flex text-[14px] font-medium tracking-[1px]">
            {menuItems.map((item) => (
              <li
                key={item}
                onMouseEnter={() => setActiveMenu(item)}
                className="cursor-pointer rounded-sm px-4 py-2 hover:bg-black/5 transition"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="hidden lg:flex items-center space-x-2">
            <IoHelpCircleOutline className="text-[26px]" />
            <SlGlobe className="text-[20px]" />
            <HiOutlineUserCircle className="text-[26px]" />
          </div>
        </div>
      </nav>

      {/* DROPDOWNS */}
      <Dropdown open={activeMenu === "Vehicles"} />
      <Energy open={activeMenu === "Energy"} />
      <Charging open={activeMenu === "Charging"} />
      <Discover open={activeMenu === "Discover"} />
      <Shop open={activeMenu === "Shop"} />
      {/* Later:
     
      <Discover open={activeMenu === "Discover"} />
      */}
    </div>
  );
}
