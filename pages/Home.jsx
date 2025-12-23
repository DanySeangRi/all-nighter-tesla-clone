import React from 'react';
import PowerSupply from '/src/components/homepage/PowerSupply';
import Footer from '/src/components/layout/Footer';
import Navbar from '/src/components/layout/Navbar';
import StickyBottomBar from '../src/components/ui/SkickyBottomBar';
import SelfDriving from '../src/components/homepage/SelfDriving';
import Map from '../src/components/homepage/Map'
import HomePromotionsOffers from '../src/components/homepage/HomePromotionsOffers';

export default function Home() {
  const { x, y } = useScroll();

  return (
    <div >
      <Navbar/>
      <HomePromotionsOffers/>
      <SelfDriving/>
      <Map/>
      <PowerSupply />
      <Footer/>
      <StickyBottomBar/>
    </div>


)
}

