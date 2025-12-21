import React, { useState, useRef, useEffect } from "react";

export default function ChargingAccessoriesDropdown({ open }) {
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
      className={`absolute left-0 top-14 w-full  bg-white z-50 overflow-hidden
        transition-all duration-500 ease-out
        ${
          open
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2 invisible"
        }
      `}
      style={{ height: open ? menuHeight : 0 }}
    >
      <div ref={contentRef} className="px-20 py-12">
        <div className="flex gap-24">
          
          <Category title="Chargers" />
          <Category title="Adapters" />
          <Category title="Parts" />

        </div>
      </div>
    </div>
  );
}

function Category({ title }) {
  return (
    <div className="w-64">
      <p className="text-sm font-medium">{title}</p>
      <div className="mt-3 h-0.75 w-full bg-gray-300"></div>
    </div>
  );
}