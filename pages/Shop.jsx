import ApparelPage from "../src/components/shop/ApparelPage";
import ChargingPage from "../src/components/shop/ChargingPage";
import VehicleAccessoriesPage from "../src/components/shop/VehicleAccessoriesPage";
import ShopLayout from "../src/components/shop/ShopLayout";
import ShopHomePage from "../src/components/shop/ShopHomePage";
import LifestylePage from "../src/components/shop/LifestylePage ";

export default function Shop() {
  return (
    <>
      <ShopHomePage />
      <ShopLayout>
        <ChargingPage />
        <VehicleAccessoriesPage />
        <ApparelPage />
        <LifestylePage/>
      </ShopLayout>
    </>
  );
}
