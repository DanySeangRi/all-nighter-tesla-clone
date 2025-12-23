import React, { useState, useRef, useEffect } from "react";

// Image imports (will be moved here from original files)
import chargingImg from "../../assets/images/navbar/Mega-Menu-Charging-Charging.png";
import homeChargingImg from "../../assets/images/navbar/Mega-Menu-Charging-Home-Charging.png";
import superChargingImg from "../../assets/images/navbar/Mega-Menu-Charging-Supercharger-For-Business.png";
import connectorImg from "../../assets/images/navbar/Mega-Menu-Charging-Supercharging-NA.png";
import businessImg from "../../assets/images/navbar/Mega-Menu-Charging-Charging-for-Business.png";

import modelSImg from "../../assets/images/navbar/Mega-Menu-Vehicles-Model-S-New.png";
import model3Img from "../../assets/images/navbar/Mega-Menu-Vehicles-Model-3-Performance-LHD.png";
import modelYImg from "../../assets/images/navbar/Mega-Menu-Vehicles-Model-Y-2-v2.png";
import modelXImg from "../../assets/images/navbar/Mega-Menu-Vehicles-Model-X-New.png";
import cyberTruckImg from "../../assets/images/navbar/Mega-Menu-Vehicles-Cybertruck-1x.png";
import InventoryImg from "../../assets/images/navbar/Mega-Menu-Vehicles-Inventory.png";

import solarPanelImg from "../../assets/images/navbar/Mega-Menu-Energy-Solar-Panels.png";
import solarRoofImg from "../../assets/images/navbar/Mega-Menu-Energy-Solar-Roof.png";
import powerWallImg from "../../assets/images/navbar/Mega-Menu-Energy-Powerwall-US.png";
import megaPackImg from "../../assets/images/navbar/Mega-Menu-Energy-Megapack.png";

import shopChargingImg from "../../assets/images/navbar/Mega-Menu-Charging-Home-Charging.png";
import accessoriesImg from "../../assets/images/navbar/Mega-Menu-Shop-Vehicle-Accessories.png";
import apparelImg from "../../assets/images/navbar/Mega-Menu-Shop-Apparel.png";
import lifestyleImg from "../../assets/images/navbar/Mega-Menu-Shop-Lifestyle.png";
import { NavLink } from "react-router";

// Data definitions (will be moved here from original files)
const DROPDOWN_DATA = {
  Charging: {
    // Changed key from 'charging' to 'Charging'
    items: [
      { name: "Charging", img: chargingImg, learnOnly: true },
      { name: "Home Charging", img: homeChargingImg },
      { name: "Supercharging", img: superChargingImg },
      { name: "Wall Connector for Business", img: connectorImg },
      { name: "Supercharging for Business", img: businessImg },
    ],
    links: [
      "Help Me Charge",
      "Charging Calculator",
      "Charging With NACS",
      "Supercharger Voting",
      "Host a Supercharger",
    ],
  },
  Vehicles: {
    // Changed key from 'vehicles' to 'Vehicles'
    items: [
      { name: "Model S", img: modelSImg },
      { name: "Model 3", img: model3Img },
      { name: "Model Y", img: modelYImg },
      { name: "Model X", img: modelXImg },
      { name: "Cybertruck", img: cyberTruckImg },
      { name: "Inventory", img: InventoryImg, sub: ["New", "Pre-Owned"] },
    ],
    links: [
      "Full Self-Driving (Supervised)",
      "Current Offers",
      "Demo Drive",
      "Trade-in",
      "Vehicle Safety Report",
      "Pre-Owned",
      "Features",
      "Help Me Charge",
      "Help Me Choose",
      "Compare",
      "Safety",
      "Fleet",
      "Semi",
      "Roadster",
      "Robotaxi",
    ],
  },
  Energy: {
    // Changed key from 'energy' to 'Energy'
    items: [
      { name: "Solar Panels", img: solarPanelImg },
      { name: "Solar Roof", img: solarRoofImg },
      { name: "Powerwall", img: powerWallImg },
      { name: "Megapack", img: megaPackImg, learnOnly: true },
    ],
    links: [
      "Schedule a Consultation",
      "Why Solar",
      "Incentives",
      "Support",
      "Partner with Tesla",
      "Commercial",
      "Utilities",
    ],
  },
  Discover: {
    // Changed key from 'discover' to 'Discover'
    columns: [
      {
        heading: "Resources",
        links: [
          "Demo Drive",
          "Insurance",
          "Current Offers",
          "Learn",
          "Video Guides",
          "Customer Stories",
          "Events",
          "Safety",
        ],
      },
      {
        heading: "Location Services",
        links: [
          "Find Us",
          "Find a Collision Center",
          "Find a Certified Installer",
        ],
      },
      {
        heading: "Company",
        links: ["About", "Careers", "Investor Relations"],
      },
    ],
  },
  Shop: {
    // Changed key from 'shop' to 'Shop'
    items: [
      { name: "Charging", img: shopChargingImg },
      { name: "Vehicle Accessories", img: accessoriesImg },
      { name: "Apparel", img: apparelImg },
      { name: "Lifestyle", img: lifestyleImg },
    ],
  },
};

export default function MegaMenu({
  activeMenu,
  open,
  onMouseEnter,
  onMouseLeave,
}) {
  const [menuHeight, setMenuHeight] = useState(0);
  const contentRef = useRef(null);

  const data = DROPDOWN_DATA[activeMenu];

  useEffect(() => {
    if (activeMenu && contentRef.current) {
      setMenuHeight(contentRef.current.offsetHeight);
    } else if (!activeMenu) {
      setMenuHeight(0);
    }
  }, [activeMenu, data]); // Re-measure when activeMenu or its data changes

  const renderImageGridWithLinks = (
    items,
    links,
    animationDelayFn,
    isActive
  ) => (
    <div className="mx-auto max-w-7xl py-14 ">
      <div className="grid grid-cols-[3fr_1fr] gap-10">
        {/* LEFT PRODUCTS */}
        <div className="grid grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.name} className="text-center">
              {/* IMAGE ONLY ANIMATION */}
              <div className="h-24 flex items-center justify-center overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className={`h-28 object-contain
                    ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-8"
                    }
                  `}
                />
              </div>

              {/* STATIC TEXT */}
              <h4 className="mt-3 text-[15px] font-medium text-[#171A20]">
                {item.name}
              </h4>

              <div className="mt-2 flex justify-center gap-4 text-[13px] text-[#5C5E62] underline">
                {item.sub ? (
                  item.sub.map((s) => <span key={s}>{s}</span>)
                ) : (
                  <>
                    <span>Learn</span>
                    {!item.learnOnly && <span>Order</span>}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT LINKS (STATIC) */}
        <div className="border-l pl-10">
          <ul className="space-y-3 text-[14px] font-semibold text-[#171A20]">
            {links.map((link) => (
              <li key={link} className="cursor-pointer hover:underline">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const renderDiscoverLayout = (columns) => (
    <div className="py-10">
      <div className="flex space-x-20 text-[#171A20] ">
        {columns.map((col) => (
          <div key={col.heading}>
            <h4 className="mb-4 text-[14px] font-medium text-[#5C5E62]">
              {col.heading}
            </h4>
            <ul className="space-y-4 text-[15px] font-medium">
              {col.links.map((link) => (
                <li key={link} className="cursor-pointer hover:underline">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  const renderShopLayout = (items) => (
    <div className="flex justify-center py-16">
      <div className="flex gap-10 text-center">
        {items.map((item, index) => {
          let link = "/";

          if (index === 0) link = "/charging";
          if (index === 1) link = "/vichleaccessories";
          if (index === 2) link = "/apparel";
           if (index === 3) link = "/lifestyle";
          return (
            <NavLink
              to={link}
              className="underline cursor-pointer px-2 py-1 rounded-lg"
            >
              <div key={item.name} className="group cursor-pointer">
                {/* IMAGE */}

                <img
                  src={item.img}
                  alt={item.name}
                  className="h-28 mx-auto transition-transform duration-300 group-hover:scale-105"
                />

                {/* LABEL */}
                <p className="mt-6 text-[16px] font-medium text-[#171A20]">
                  {item.name}
                </p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );

  let content = null;
  // let transitionClass = "ease-out"; // Default transition, likely not needed anymore for outer container
  let additionalContainerClasses = ""; // For discover layout's specific centering

  if (activeMenu && data) {
    // Only render content if activeMenu is set and data exists
    switch (activeMenu) {
      case "Charging":
        content = renderImageGridWithLinks(
          data.items,
          data.links,
          (i) => `${i * 100}ms`,
          activeMenu === "Charging"
        );
        break;
      case "Vehicles":
        content = renderImageGridWithLinks(
          data.items,
          data.links,
          (i) => `${i * 100}ms`, // Use 100ms delay as in original Dropdowns.jsx
          activeMenu === "Vehicles"
        );
        break;
      case "Energy":
        content = renderImageGridWithLinks(
          data.items,
          data.links,
          (i) => `${i * 100}ms`,
          activeMenu === "Energy"
        );
        break;
      case "Discover":
        content = renderDiscoverLayout(data.columns);
        // transitionClass = "ease-initial";
        additionalContainerClasses = "flex justify-center"; // Apply to inner content wrapper if needed
        break;
      case "Shop":
        content = renderShopLayout(data.items);
        // transitionClass = "ease-out";
        break;
      default:
        content = null;
    }
  }

  return (
    <div
      className={`fixed left-0 top-14 w-full bg-white z-40 overflow-hidden
        transition-all duration-500 ease-out
        ${
          open
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2 invisible"
        }
      `}
      style={{ height: open ? menuHeight : 0 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        key={activeMenu}
        ref={contentRef}
        className={`transition-opacity duration-200 custom-tesla-ease ${additionalContainerClasses}`}
      >
        {data ? content : null}
      </div>
    </div>
  );
}
