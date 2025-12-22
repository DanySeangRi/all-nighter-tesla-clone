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
   
  

      <Routes>
        <Route path="/" element={<ShopHomePage />} />
        <Route path="/charging" element={
           <ShopLayout>
             <ChargingPage />
           </ShopLayout>
         
          } />
        <Route path="/vichleaccessories" element={
          <ShopLayout>
            <VehicleAccessoriesPage />
          </ShopLayout>
        } />
        <Route path="/apparel" element={
          <ShopLayout>
            <ApparelPage />
          </ShopLayout>
        } />
        <Route path="/lifestyle" element={
          <ShopLayout>
            <LifestylePage />
          </ShopLayout>
        } />
      </Routes>
 
    
   
    </>
  );
}
