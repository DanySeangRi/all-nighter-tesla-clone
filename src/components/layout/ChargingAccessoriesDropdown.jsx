import React from "react";

export default function ChargingAccessoriesDropdown() {
  return (
    <div className="absolute top-full left-0 w-full bg-white z-50">
      <div className="px-20 py-12">
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
      <div className="mt-3 h-[3px] w-full bg-gray-300"></div>
    </div>
  );
}