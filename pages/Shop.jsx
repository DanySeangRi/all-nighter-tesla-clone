import React from "react";
import ApparelPage from "../src/components/shop/ApparelPage";
import ChargingPage from "../src/components/shop/ChargingPage";
import VehicleAccessoriesPage from "../src/components/shop/VehicleAccessoriesPage";

export default function Shop() {
  return (
    <>
      <ChargingPage />
      <VehicleAccessoriesPage/>
      <ApparelPage />
    </>
  );
}
