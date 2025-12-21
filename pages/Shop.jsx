import ApparelPage from "../src/components/shop/ApparelPage";
import ChargingPage from "../src/components/shop/ChargingPage";
import VehicleAccessoriesPage from "../src/components/shop/VehicleAccessoriesPage";
import ShopLayout from "../src/components/shop/ShopLayout";

export default function Shop() {
  return (
    <>
      <ShopLayout>
        <ChargingPage />
        <VehicleAccessoriesPage />
        <ApparelPage />
      </ShopLayout>
    </>
  );
}
