import React from "react";
import { IoHelpCircleOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { SlGlobe } from "react-icons/sl";

export default function Navbar() {
  const menuItems = ["Vehicles", "Energy", "Charging", "Discover", "Shop"];
  const icons = [IoHelpCircleOutline, CiGlobe, HiOutlineUserCircle];
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-372 items-center justify-between px-6">
          {/* Logo */}
          <div className="font-['Tesla'] text-xl uppercase tracking-[0.5em] text-[#282c35]">
            Tesla
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex font-tesla font-['Inter' ] font-medium text-[14px]  text-black tracking-[1px]">
            {menuItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer rounded-sm px-4 py-2 hover:bg-black/5 transition"
              >
                {item}
              </li>
            ))}
          </ul>

<div className="hidden lg:flex items-center  space-x-2">
  <IoHelpCircleOutline className="text-[26px]" />
  <SlGlobe className="text-[20px]"/>
  <HiOutlineUserCircle className="text-[25px]"/>
</div>

          {/* Right Actions */}
          {/* <div className="hidden lg:flex items-center text-[27px] space-x-2">
            {icons.map((Icon, i) => (
              <span
                key={i}
                className="cursor-pointer rounded py-2  hover:bg-gray-100 transition"
              >
                <Icon />
              </span>
            ))}
          </div> */}

          {/* Mobile Menu */}
          <button className="lg:hidden rounded-sm hover:bg-gray-200 bg-gray-100 p-1.5 px-4 font-tesla font-['Inter' ] text-[14px]  font-semibold text-black transition-all duration-300">
            Menu
          </button>
        </div>
      </nav>
    </>
  );
}
