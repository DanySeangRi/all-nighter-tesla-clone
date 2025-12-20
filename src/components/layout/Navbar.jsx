import React, { useState } from "react";
import { IoHelpCircleOutline, IoClose } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";
import { HiOutlineUserCircle } from "react-icons/hi2";

import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = ["Vehicles", "Energy", "Charging", "Discover", "Shop"];
  const icons = [IoHelpCircleOutline, CiGlobe, HiOutlineUserCircle];
  return (
  
    <div className="relative" onMouseLeave={() => setActiveMenu(null)}>
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full bg-white">
        <div className="mx-auto flex h-14 max-w-360 items-center justify-between px-4 lg:px-0 ">         
          <div className="font-['Tesla'] text-xl uppercase tracking-[0.5em] text-[#282c35]">
            Tesla
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex font-tesla font-['Inter' ] font-medium text-[14px]  text-black tracking-[1px]">
            {menuItems.map((item) => (
              <li
                key={item}
                onMouseEnter={() => setActiveMenu(item)}
                className="cursor-pointer rounded-sm px-4 py-2 hover:bg-black/5  transition"
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

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-sm px-4 py-2 text-[14px] font-medium tracking-[1px] hover:bg-black/5 transition bg-gray-100"
            >
              {isMobileMenuOpen ? <IoClose className="text-[26px]" /> : "Menu"}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 transform bg-white transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden pt-14`}
      >
        <div className="flex justify-end px-2 py-6">
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <IoClose className="text-[26px]" />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-4 text-xl font-medium">
          {menuItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer rounded-sm px-4 py-2 hover:bg-black/5 bg-gray-100 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* DROPDOWNS */}
      {!isMobileMenuOpen && (
        <>
      <MegaMenu activeMenu={activeMenu} open={activeMenu !== null} />
        </>
      )}
      {/* Later:
     
      <Discover open={activeMenu === "Discover"} />
      */}
    </div>
  );
}
