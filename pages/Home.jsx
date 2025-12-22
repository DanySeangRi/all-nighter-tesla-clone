import React from 'react';
import PowerSupply from '/src/components/homepage/PowerSupply';
import Footer from '/src/components/layout/Footer';
import Hero from '/src/components/ui/Hero';
import Navbar from '/src/components/layout/Navbar';
import StickyBottomBar from '../src/components/ui/SkickyBottomBar';
import SelfDriving from '../src/components/homepage/SelfDriving';
export default function Home() {
  return (
    <div >

      <Navbar/>
      <Hero />
      <SelfDriving/>
      <PowerSupply />
      <Footer/>
      <StickyBottomBar/>
    </div>
  )
}

