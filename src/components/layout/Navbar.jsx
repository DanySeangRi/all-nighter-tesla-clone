import React, { useState } from "react";
import { IoHelpCircleOutline, IoClose, IoMenuOutline } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = ["Vehicles", "Energy", "Charging", "Discover", "Shop"];
  const mobileMenuItems = [...menuItems, "Support"];

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };
  return (
    <div className="relative">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full bg-white">
        <div className="mx-auto flex h-14 max-w-360 items-center justify-between px-4 lg:px-0">
          <div
            className={`font-['Tesla'] text-xl uppercase tracking-[0.5em] text-[#282c35] ${
              isMobileMenuOpen ? "hidden" : "block"
            } lg:block`}
          >
            Tesla
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex font-tesla font-['Inter' ] font-medium text-[14px]  text-black tracking-[1px]">
            {menuItems.map((item) => (
              <li
                key={item}
                onMouseEnter={() => setActiveMenu(item)}
                onMouseLeave={handleMouseLeave}
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
          <div className={`lg:hidden ${isMobileMenuOpen ? "ml-auto" : ""}`}>
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
        className={`fixed inset-0 z-40 bg-white p-4 transition-opacity duration-600 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible, mt-10"
            : "opacity-0 invisible"
        } lg:hidden`}
      >
        <ul className="flex flex-col items-start ">
          {mobileMenuItems.map((item) => (
            <li
              key={item}
              className="flex items-center justify-between text-[#171A20] hover:bg-gray-100 rounded-lg w-full px-4 py-4 mt-2 cursor-pointer"
            >
              <span>{item}</span>
              <IoIosArrowForward className="text-[18px] text-gray-400" />
            </li>
          ))}
        </ul>
        {/* Mobile Icons */}
        <div className="mt-6 space-y-2">
          {/* Language */}
          <div className="flex items-center justify-between rounded-lg  px-4 py-4 cursor-pointer hover:bg-gray-100 transition">
            <div className="flex items-center space-x-4">
              <SlGlobe className="text-[20px]" />
              <div className="flex flex-col">
                <span className="text-[16px] font-medium">United States</span>
                <span className="text-[14px] text-gray-500">English</span>
              </div>
            </div>
            <IoIosArrowForward className="text-[18px] text-gray-400" />
          </div>

          {/* Account */}
          <div className="flex items-center justify-between px-4 py-4 rounded-lg cursor-pointer hover:bg-gray-100 transition">
            <div className="flex items-center space-x-4">
              <HiOutlineUserCircle className="text-[22px]" />
              <span className="text-[16px] font-medium">Account</span>
            </div>
            <IoIosArrowForward className="text-[18px] text-gray-400" />
          </div>
        </div>
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
