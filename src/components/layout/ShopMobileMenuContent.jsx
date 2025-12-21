import React from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

// Image imports for MobileVehiclesContent
import modelSImg from "../../assets/images/navbar/Mega-Menu-Vehicles-Model-S-New.png";
import model3Img from "../../assets/images/navbar/Mega-Menu-Vehicles-Model-3-Performance-LHD.png";
import modelYImg from "../../assets/images/navbar/Mega-Menu-Vehicles-Model-Y-2-v2.png";
import modelXImg from "../../assets/images/navbar/Mega-Menu-Vehicles-Model-X-New.png";
import cyberTruckImg from "../../assets/images/navbar/Mega-Menu-Vehicles-Cybertruck-1x.png";
import inventoryImg from "../../assets/images/navbar/Mega-Menu-Vehicles-Inventory.png";

// Image imports for MobileEnergyContent
import solarPanelImg from "../../assets/images/navbar/Mega-Menu-Energy-Solar-Panels.png";
import solarRoofImg from "../../assets/images/navbar/Mega-Menu-Energy-Solar-Roof.png";
import powerWallImg from "../../assets/images/navbar/Mega-Menu-Energy-Powerwall-US.png";
import megaPackImg from "../../assets/images/navbar/Mega-Menu-Energy-Megapack.png";

// Image imports for MobileChargingContent
import shopChargingImg from "../../assets/images/navbar/Mega-Menu-Charging-Home-Charging.png";
import accessoriesChargingImg from "../../assets/images/navbar/Mega-Menu-Charging-Charging.png"; // Renamed to avoid conflict
import apparelChargingImg from "../../assets/images/navbar/Mega-Menu-Charging-Supercharging-NA.png"; // Renamed to avoid conflict
import businessChargingImg from "../../assets/images/navbar/Mega-Menu-Charging-Charging-for-Business.png"; // Renamed to avoid conflict
import superchargChargingImg from "../../assets/images/navbar/Mega-Menu-Charging-Supercharger-For-Business.png"; // Renamed to avoid conflict

// Image imports for MobileShopContent
import apparelShopImg from "../../assets/images/navbar/Mega-Menu-Shop-Apparel.png";
import accessoriesShopImg from "../../assets/images/navbar/Mega-Menu-Shop-Vehicle-Accessories.png";
import lifestyleShopImg from "../../assets/images/navbar/Mega-Menu-Shop-Lifestyle.png";


// MobileVehiclesContent component
function MobileVehiclesContent({ onBack, onClose }) {
  const vehicles = [
    { name: "Model S", img: modelSImg },
    { name: "Model 3", img: model3Img },
    { name: "Model Y", img: modelYImg },
    { name: "Model X", img: modelXImg },
    { name: "Cybertruck", img: cyberTruckImg },
    { name: "Inventory", img: inventoryImg, links: ["New", "Pre-Owned"] },
  ];

  return (
    <div className="fixed inset-0 z-70 bg-white px-4 pt-4 overflow-y-auto lg:hidden">
      {/* HEADER */}
      <div className="flex items-center justify-between h-14">
        <button onClick={onBack} className="text-xl"><IoIosArrowBack /></button>
        <h1 className="text-[16px] font-medium">Vehicles</h1>
        <button onClick={onClose}>
          <IoClose className="text-xl" />
        </button>
      </div>

      {/* VEHICLE GRID */}
      <div className="grid grid-cols-3 gap-3 mt-6 text-center">
        {vehicles.map((v) => (
          <div key={v.name}>
            <img
              src={v.img}
              alt={v.name}
              className="mx-auto h-26 object-contain"
            />

            <p className="mt-2 font-medium">{v.name}</p>

            <div className="flex justify-center space-x-4 text-sm text-gray-600 mt-1">
              {v.links ? (
                v.links.map((l) => (
                  <span key={l} className="underline cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg">
                    {l}
                  </span>
                ))
              ) : (
                <>
                  <span className="underline cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg">Learn</span>
                  <span className="underline cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg">Order</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* EXTRA LINKS */}
      <div className="p-4 mt-10 space-y-6 text-[16px] font-medium">
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">Full Self-Driving (Supervised)</div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">Current Offers</div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">Demo Drive</div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">Trade-In</div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">Vehicle Safety Report</div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">Pre-Owned</div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">Features</div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">Help Me Charge</div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">Help Me Choose</div>
      </div>
    </div>
  );
}

// MobileEnergyContent component
function MobileEnergyContent({ onBack, onClose }) {
  const energyItems = [
    {
      name: "Solar Panels",
      img: solarPanelImg,
      actions: ["Learn", "Order"],
    },
    {
      name: "Solar Roof",
      img: solarRoofImg,
      actions: ["Learn", "Order"],
    },
    {
      name: "Powerwall",
      img: powerWallImg,
      actions: ["Learn", "Order"],
    },
    {
      name: "Megapack",
      img: megaPackImg,
      actions: ["Learn"],
    },
  ];

  return (
    <div className="fixed inset-0 z-70 bg-white px-4 pt-4 overflow-y-auto lg:hidden">
      {/* HEADER */}
      <div className="flex items-center justify-between h-14">
        <button onClick={onBack} className="text-xl font-light">
          <IoIosArrowBack />
        </button>

        <h1 className="font-medium">Energy</h1>

        <button onClick={onClose}>
          <IoClose className="text-xl" />
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-6 mt-6 text-center">
        {energyItems.map((item) => (
          <div key={item.name}>
            <img
              src={item.img}
              alt={item.name}
              className="mx-auto h-20 object-contain"
            />

            <p className="mt-2 font-medium">{item.name}</p>

            <div className="flex justify-center space-x-4 text-sm text-gray-600">
              {item.actions.map((action) => (
                <span key={action} className="underline cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg">
                  {action}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* LINKS */}
      <div className="p-4 mt-10 space-y-6 text-[16px] font-medium">
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">
          Schedule a Consultation
        </div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">
          Why Solar
        </div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">
          Incentives
        </div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">
          Support
        </div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">
          Partner with Tesla
        </div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">
          Commercial
        </div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">
          Utilities
        </div>
      </div>
    </div>
  );
}

// MobileChargingContent component
function MobileChargingContent({ onBack, onClose }) {
  const chargingItems = [
    { name: "Home Charging", img: accessoriesChargingImg },
    { name: "Charging", img: shopChargingImg },
    { name: "Supercharging", img: apparelChargingImg },

    { name: "Wall Connector for Business", img: businessChargingImg },
    { name: "Supercharger for Business", img: superchargChargingImg },
  ];

  return (
    <div className="fixed inset-0 z-70 bg-white px-4 pt-4 overflow-y-auto lg:hidden">
      {/* HEADER */}
      <div className="flex items-center justify-between h-14">
        <button onClick={onBack} className="text-xl">
          <IoIosArrowBack />
        </button>
        <h1 className="text-[16px] font-medium">Charging</h1>
        <button onClick={onClose}>
          <IoClose className="text-xl" />
        </button>
      </div>

      {/* CHARGING GRID */}
      <div className="grid grid-cols-3 gap-3 mt-6 text-center">
        {chargingItems.map((item) => (
          <div key={item.name}>
            <img
              src={item.img}
              alt={item.name}
              className="mx-auto h-26 object-contain"
            />

            <p className="mt-2 font-medium">{item.name}</p>

            <div className="flex justify-center space-x-4 text-sm text-gray-600 mt-1">
              <span className="underline cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg">Learn</span>
            </div>
          </div>
        ))}
      </div>

      {/* EXTRA LINKS */}
      <div className="p-4 mt-10 space-y-6 text-[16px] font-medium">
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">
          Help Me Charge
        </div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">
          Charging Calculator
        </div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">
          Charging With NACS
        </div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">
          Supercharger Voting
        </div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">
          Host a Supercharger
        </div>
      </div>
    </div>
  );
}

// MobileDiscoverContent component
function MobileDiscoverContent({ onBack, onClose }) {
  const menuItems = [
    "Demo Drive",
    "Insurance",
    "Current Offers",
    "Learn",
    "Video Guides",
    "Customer Stories",
    "Events",
    "Find Us",
    "Find a Collision Center",
    "Find a Certified Installer",
    "About",
    "Careers",
    "Investor Relations",
  ];
  return (
    <div className="fixed inset-0 z-70 bg-white px-4 pt-4 overflow-y-auto lg:hidden">
      {/* HEADER */}
      <div className="flex items-center justify-between h-14">
        <button onClick={onBack} className="text-xl">
          <IoIosArrowBack />
        </button>
        <h1 className="text-[17px] font-medium">Discover</h1>
        <button onClick={onClose}>
          <IoClose className="text-xl" />
        </button>
      </div>

      <div className="p-4 mt-10 space-y-6 text-[16px] font-medium ">
        {menuItems.map((item, index) => (
          <div key={index} className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

// MobileShopContent component
function MobileShopContent({ onBack, onClose }) {
  const shopItems = [
    { name: "Apparel", img: apparelShopImg },
    { name: "Accessories", img: accessoriesShopImg },
    { name: "Lifestyle", img: lifestyleShopImg },
  ];

  return (
    <div className="fixed inset-0 z-70 bg-white px-4 pt-4 overflow-y-auto lg:hidden">
      {/* HEADER */}
      <div className="flex items-center justify-between h-14">
        <button onClick={onBack} className="text-xl"><IoIosArrowBack /></button>
        <h1 className="text-[16px] font-medium">Shop</h1>
        <button onClick={onClose}>
          <IoClose className="text-xl" />
        </button>
      </div>

      {/* SHOP GRID */}
      <div className="grid grid-cols-3 gap-3 mt-6 text-center">
        {shopItems.map((item) => (
          <div key={item.name}>
            <img
              src={item.img}
              alt={item.name}
              className="mx-auto h-26 object-contain"
            />

            <p className="mt-2 font-medium">{item.name}</p>

            <div className="flex justify-center space-x-4 text-sm text-gray-600 mt-1">
                <span className="underline cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg">Explore</span>
            </div>
          </div>
        ))}
      </div>

      {/* EXTRA LINKS */}
      <div className="p-4 mt-10 space-y-6 text-[16px] font-medium">
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">Shop All</div>
        <div className="cursor-pointer p-2 hover:bg-gray-100 py-4 rounded-lg">Gift Cards</div>
      </div>
    </div>
  );
}


// Main MobileMenuContent component
export default function ShopMobileMenuContent({ activeMenu, onBack, onClose }) {
  if (activeMenu === "Vehicles") {
    return <MobileVehiclesContent onBack={onBack} onClose={onClose} />;
  } else if (activeMenu === "Energy") {
    return <MobileEnergyContent onBack={onBack} onClose={onClose} />;
  } else if (activeMenu === "Charging") {
    return <MobileChargingContent onBack={onBack} onClose={onClose} />;
  } else if (activeMenu === "Discover") {
    return <MobileDiscoverContent onBack={onBack} onClose={onClose} />;
  } else if (activeMenu === "Shop") {
    return <MobileShopContent onBack={onBack} onClose={onClose} />;
  }
  return null;
}
