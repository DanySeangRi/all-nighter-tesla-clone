import React, { useState, useEffect, useRef } from "react";
import { IoHelpCircleOutline, IoClose } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { IoSearchOutline, IoCartOutline, IoMenuOutline } from "react-icons/io5";

import ShopMegaMenu from "./ShopMegaMenu";
import ShopMobileMenuContent from "./ShopMobileMenuContent";
import ChargingAccessoriesDropdown from "./ChargingAccessoriesDropdown";
import ShopVehicleDropdown from "./ShopVehicleDropdown";
import ShopApparelDropdown from "./ShopApparelDropdown";
import LifestyleDropdown from "./LifestyleDropdown";
import { NavLink } from "react-router-dom";

export default function ShopNavbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isChargingDropdownOpen, setIsChargingDropdownOpen] = useState(false);
  const [isVehicleDropdownOpen, setIsVehicleDropdownOpen] = useState(false);
  const [isApparelDropdownOpen, setIsApparelDropdownOpen] = useState(false);
  const [isLifestyleDropdownOpen, setIsLifestyleDropdownOpen] = useState(false); // New state
  const hoverTimeout = useRef(null); // Add useRef for timeout management
  const closeOthersTimeout = useRef(null); // New ref for close others others timeout

  // Effect to close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      // Assuming 'lg' breakpoint is 1024px based on common Tailwind config
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setActiveMobileMenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]); // Re-run effect if isMobileMenuOpen changes

  const menuItems = ["Charging", "Vehicle Accessories", "Apparel", "Lifestyle"];
  const mobileMenuItems = [
    ...menuItems,
    "Shop FAQ",
    "View or Mange Order",
    "Conttact Us",
    "Sign In",
    "Support",
  ];

  const handleMouseEnter = (item) => {
    clearTimeout(hoverTimeout.current); // Clear any pending full close
    clearTimeout(closeOthersTimeout.current); // Clear any pending close of others

    // Immediately open the current dropdown
    if (item === "Charging") {
      setIsChargingDropdownOpen(true);
      setActiveMenu(null); // Ensure ShopMegaMenu is closed
    } else if (item === "Vehicle Accessories") {
      setIsVehicleDropdownOpen(true);
      setActiveMenu(null); // Ensure ShopMegaMenu is closed
    } else if (item === "Apparel") {
      setIsApparelDropdownOpen(true);
      setActiveMenu(null); // Ensure ShopMegaMenu is closed
    } else if (item === "Lifestyle") {
      // Handle Lifestyle separately
      setIsLifestyleDropdownOpen(true);
      setActiveMenu(null);
      setIsChargingDropdownOpen(false);
      setIsVehicleDropdownOpen(false);
      setIsApparelDropdownOpen(false);
    } else {
      // For ShopMegaMenu items, if any remain (currently none)
      setActiveMenu(item);
      setIsChargingDropdownOpen(false);
      setIsVehicleDropdownOpen(false);
      setIsApparelDropdownOpen(false);
      setIsLifestyleDropdownOpen(false); // Also close lifestyle if other mega menu item is chosen
    }

    // Close other dropdowns after a very short delay to allow for smooth cross-fade
    closeOthersTimeout.current = setTimeout(() => {
      if (item !== "Charging") setIsChargingDropdownOpen(false);
      if (item !== "Vehicle Accessories") setIsVehicleDropdownOpen(false);
      if (item !== "Apparel") setIsApparelDropdownOpen(false);
      if (item !== "Lifestyle") setIsLifestyleDropdownOpen(false);
      if (item !== "Lifestyle") setActiveMenu(null); // Only close if not currently lifestyle
    }, 100); // 100ms delay for closing others
  };

  const handleMouseLeave = () => {
    clearTimeout(closeOthersTimeout.current); // Clear any pending close of others
    hoverTimeout.current = setTimeout(() => {
      setActiveMenu(null);
      setIsChargingDropdownOpen(false);
      setIsVehicleDropdownOpen(false);
      setIsApparelDropdownOpen(false);
      setIsLifestyleDropdownOpen(false); // New line
    }, 300); // Keep this delay to allow mouse to enter dropdown content or prevent accidental closes
  };

  const handleMegaMenuEnter = () => {
    clearTimeout(hoverTimeout.current); // Keep this to prevent full menu close
    clearTimeout(closeOthersTimeout.current); // Also clear close others timeout
  };

  return (
    <div className="relative ">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full bg-white">
        <div className="mx-auto flex h-14 items-center justify-between px-10">
          {/* LOGO */}
          <div className="flex items-center gap-6">
            <NavLink to="/" className={({ isActive }) => isActive ? "font-bold text-black" : "text-black" } > 
            <span className="text-xl font-semibold font-['Tesla'] ">TESLA</span>
            </NavLink>
            <span>|</span>
             <NavLink to="/" className={({ isActive }) => isActive ? "font-bold text-black" : "text-black" } > 
            <span className=" py-1 rounded  text-sm font-medium">Shop</span>
             </NavLink>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex text-sm font-medium">
            {menuItems.map((item) => {
              if (item === "Charging") {
                return (
                  <li
                    key={item}
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={() => handleMouseLeave()}
                    className="px-4 py-2 rounded-sm cursor-pointer relative"
                  >
                      <NavLink to="/charging" className={({ isActive }) => isActive ? "font-bold text-black" : "text-black" } > {item} </NavLink>
                  </li>
                );
              } else if (item === "Vehicle Accessories") {
                return (
                  <li
                    key={item}
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={() => handleMouseLeave()}
                    className="px-4 py-2 rounded-sm cursor-pointer relative"
                  >
                     <NavLink to="/vichleaccessories" className={({ isActive }) => isActive ? "font-bold text-black" : "text-black" } > {item} </NavLink>
                  </li>
                );
              } else if (item === "Apparel") {
                return (
                  <li
                    key={item}
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={() => handleMouseLeave()}
                    className="px-4 py-2 rounded-sm cursor-pointer relative"
                  >
                     <NavLink to="/apparel" className={({ isActive }) => isActive ? "font-bold text-black" : "text-black" } > {item} </NavLink>
                  </li>
                );
              } else {
                // For "Lifestyle" and any other future items handled by ShopMegaMenu
                return (
                  <li
                    key={item}
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={() => handleMouseLeave()}
                    className="px-4 py-2 rounded-sm hover:bg-black/5 cursor-pointer"
                  >
                    <NavLink to="/lifestyle" className={({ isActive }) => isActive ? "font-bold text-black" : "text-black" } > {item} </NavLink>
                  </li>
                );
              }
            })}
          </ul>

          {/* RIGHT-ALIGNED ICONS AND MENU BUTTONS (Desktop and Mobile) */}
          <div className="flex items-center gap-4 text-xl">
            {/* Search and Cart Icons (Visible on both Mobile and Desktop) */}
            <IoSearchOutline className="cursor-pointer" />
            <IoCartOutline className="cursor-pointer" />

            {/* Mobile Menu Toggle Button (Mobile Only) */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setActiveMobileMenu(null);
              }}
              className="lg:hidden bg-gray-100 transition-transform duration-150 active:scale-95"
            >
              {isMobileMenuOpen ? (
                <IoClose className="text-xl" />
              ) : (
                <span className="text-sm p-2 rounded-sm  bg-gray-100">
                  Menu
                </span>
              )}
            </button>

            {/* Desktop Menu Button (Desktop Only) */}
            <button
              onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
              className="hidden lg:inline-flex px-4 py-2 rounded-sm hover:bg-black/5 cursor-pointer text-sm font-medium"
            >
              Menu
            </button>
          </div>
        </div>
      </nav>

      <ChargingAccessoriesDropdown
        open={isChargingDropdownOpen}
        onMouseEnter={handleMegaMenuEnter}
        onMouseLeave={handleMouseLeave}
      />
      <ShopVehicleDropdown
        open={isVehicleDropdownOpen}
        onMouseEnter={handleMegaMenuEnter}
        onMouseLeave={handleMouseLeave}
      />
      <ShopApparelDropdown
        open={isApparelDropdownOpen}
        onMouseEnter={handleMegaMenuEnter}
        onMouseLeave={handleMouseLeave}
      />
      <LifestyleDropdown
        open={isLifestyleDropdownOpen}
        onMouseEnter={handleMegaMenuEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* DESKTOP BLUR BACKDROP */}
      <div
        className={`${
          isDesktopMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-500 hidden lg:block`}
        onClick={() => {
          setIsDesktopMenuOpen(false);
        }}
      />

      {/* DESKTOP MAIN MENU */}
      {isDesktopMenuOpen && (
        <div
          className={`fixed top-0 bottom-0 right-0 w-1/4 z-60 bg-white pt-14 transform transition-transform duration-700 ease-in-out overflow-x-hidden hidden lg:block ${
            isDesktopMenuOpen
              ? "translate-x-0 visible"
              : "translate-x-full invisible"
          }`}
          onClick={() => {
            // Clicking inside the desktop menu should not close it
            // Unless there's a specific close button within its content
          }}
        >
          {/* HEADER (Desktop Close Button) */}
          <div className="absolute top-0 right-0 h-14 flex items-center px-4 ">
            <button
              onClick={() => {
                setIsDesktopMenuOpen(false);
              }}
              className="transition-transform duration-150 active:scale-95"
            >
              <IoClose className="text-xl" />
            </button>
          </div>

          {/* DESKTOP MENU CONTENT */}
          <div className="px-4 pt-4">
            <div className="w-72  p-6 space-y-5 text-[15px] text-black">
              <div className="space-y-4 font-medium">
                <div className="cursor-pointer hover:opacity-70">Shop FAQ</div>
                <div className="cursor-pointer hover:opacity-70">
                  View or Manage Order
                </div>
                <div className="cursor-pointer hover:opacity-70">
                  Contact Us
                </div>
                <div className="cursor-pointer hover:opacity-70">Sign In</div>
              </div>

              {/* Location */}
              <div className="pt-4">
                <div className="flex items-start gap-3 cursor-pointer">
                  <SlGlobe className="text-lg mt-1" />
                  <div>
                    <div className="font-medium">United States</div>
                    <div className="text-sm text-gray-500">English</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE BLUR BACKDROP */}
      <div
        className={`${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-500`}
        onClick={() => {
          setIsMobileMenuOpen(false);
          setActiveMobileMenu(null);
        }}
      />

      {/* MOBILE MAIN MENU */}
      {isMobileMenuOpen &&
        !activeMobileMenu && ( // Changed from showMobileMenu to isMobileMenuOpen
          <div
            className={`fixed top-0 bottom-0 right-0 w-[70%] z-60 bg-white pt-14 transform transition-transform duration-700 ease-in-out overflow-x-hidden lg:hidden ${
              // Changed inset-0 to top-0 bottom-0 right-0 w-1/3; duration and easing; added overflow-x-hidden
              isMobileMenuOpen
                ? "translate-x-0 visible"
                : "translate-x-full invisible" // Added visible/invisible
            }`}
            onClick={() => {
              setIsMobileMenuOpen(false);
              setActiveMobileMenu(null);
            }}
          >
            {" "}
            {/* HEADER (ONLY CLOSE) */}
            <div className="absolute top-0 right-0 h-14 flex items-center px-4 ">
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Stop propagation to prevent closing menu when close button is clicked
                  setIsMobileMenuOpen(false);
                  setActiveMobileMenu(null);
                }}
                className="transition-transform duration-150 active:scale-95"
              >
                <IoClose className="text-xl" />
              </button>
            </div>
            {/* MENU ITEMS */}
            <div className="px-4 pt-4" onClick={(e) => e.stopPropagation()}>
              {/* SEARCH */}
              <div className="px-4 pb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="
          w-full
          h-11
          rounded-sm
         
          pl-11 pr-4
          text-sm
          outline-none
          focus:border-black
          bg-gray-200
        "
                  />
                  <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                </div>
              </div>

              {/* MENU LIST */}
              <ul className="space-y-2">
                {mobileMenuItems.map((item) => (
                  <li
                    key={item}
                    onClick={() =>
                      menuItems.includes(item)
                        ? setActiveMobileMenu(item)
                        : null
                    }
                    className="
          flex items-center justify-between
          px-6 py-2
          rounded-lg
          hover:bg-gray-100
          cursor-pointer
        "
                  >
                    <span className="font-medium">{item}</span>
                    <IoIosArrowForward className="text-gray-400" />
                  </li>
                ))}
              </ul>

              {/* FOOTER */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-between px-6 py-4 hover:bg-gray-100 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <SlGlobe />
                    <div>
                      <p className="font-medium">United States</p>
                      <p className="text-sm text-gray-500">English</p>
                    </div>
                  </div>
                  <IoIosArrowForward className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        )}

      {/* Conditional rendering for ShopMobileMenuContent */}
      {isMobileMenuOpen && (
        <ShopMobileMenuContent
          activeMenu={activeMobileMenu}
          onBack={() => setActiveMobileMenu(null)}
          onClose={() => {
            setActiveMobileMenu(null);
            setIsMobileMenuOpen(false);
          }}
          isParentMenuOpen={isMobileMenuOpen} // Pass the state down
        />
      )}

      {/* DESKTOP MEGA MENU */}
      {!isMobileMenuOpen && (
        <ShopMegaMenu
          activeMenu={activeMenu}
          open={activeMenu !== null}
          onMouseEnter={handleMegaMenuEnter} // Pass handler to MegaMenu
          onMouseLeave={handleMouseLeave} // Pass handler to MegaMenu
        />
      )}
    </div>
  );
}
