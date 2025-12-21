import React from 'react';
import PowerSupply from '/src/components/homepage/PowerSupply';
import Footer from '/src/components/layout/Footer';
import Hero from '/src/components/ui/Hero';
import Navbar from '/src/components/layout/Navbar';
import StickyBottomBar from '../src/components/ui/SkickyBottomBar';
export default function Home() {
  return (
    <div >

      <Navbar/>
      <Hero />
      <PowerSupply />
      <Footer/>
      <StickyBottomBar/>
    </div>
  )
}

