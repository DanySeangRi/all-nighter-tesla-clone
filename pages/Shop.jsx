import ApparelPage from "../src/components/shop/ApparelPage";
import ChargingPage from "../src/components/shop/ChargingPage";
import VehicleAccessoriesPage from "../src/components/shop/VehicleAccessoriesPage";
import ShopLayout from "../src/components/shop/ShopLayout";
import ShopHomePage from "../src/components/shop/ShopHomePage";
import LifestylePage from "../src/components/shop/LifestylePage ";
import { Routes, Route } from 'react-router-dom'
import ShopNavbar from "../src/components/layout/ShopNavbar";
export default function Shop() {
  return (
    <>
    <ShopNavbar/>
   
  
    <ShopLayout>
      <Routes>
        <Route path="/" element={<ShopHomePage />} />
        <Route path="/charging" element={<ChargingPage />} />
        <Route path="/vichleaccessories" element={<VehicleAccessoriesPage />} />
        <Route path="/apparel" element={<ApparelPage />} />
        <Route path="/lifestyle" element={<LifestylePage />} />
      </Routes>
    </ShopLayout>
    
   
    </>
  );
}
