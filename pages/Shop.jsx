import ApparelPage from "../src/components/shop/ApparelPage";
import ChargingPage from "../src/components/shop/ChargingPage";
import VehicleAccessoriesPage from "../src/components/shop/VehicleAccessoriesPage";
import ShopLayout from "../src/components/shop/ShopLayout";
import ShopHomePage from "../src/components/shop/ShopHomePage";

export default function Shop() {
  return (
    <>
      <ShopHomePage />
      <ShopLayout>
        <ChargingPage />
        <VehicleAccessoriesPage />
        <ApparelPage />
      </ShopLayout>
    </>
  );
}
