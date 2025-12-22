import React, { useState, useRef, useEffect } from "react";

const CHARGING_DATA = [
  {
    title: "At Home Charging",
    items: ["Wall Connector", "Mobile Connector", "Charging Adapter"],
  },
  {
    title: "On the Road Charging",
    items: ["Supercharger Access", "Destination Charging"],
  },
  {
    title: "Other",
    items: ["Charging Cables", "Adapters", "Power Banks"],
  },
];

export default function ChargingAccessoriesDropdown({
  open,
  onMouseEnter,
  onMouseLeave,
}) {
  const [menuHeight, setMenuHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (open && contentRef.current) {
      setMenuHeight(contentRef.current.offsetHeight);
    } else if (!open) {
      setMenuHeight(0);
    }
  }, [open]);

  return (
    <div
      className={`fixed left-0 top-14 w-full  bg-white z-40 overflow-hidden
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
      <div ref={contentRef} className="px-20 py-12">
        <div className="flex gap-24">
          {CHARGING_DATA.map((category) => (
            <Category
              key={category.title}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Category({ title, items }) {
  return (
    <div className="w-64">
      <p className="text-sm font-medium">{title}</p>
      <div className="mt-3 h-0.75 w-full bg-gray-300"></div>
      <ul className="space-y-2 text-[14px] text-[#393C41]">
        {items.map((item) => (
          <li key={item} className="cursor-pointer hover:underline">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
