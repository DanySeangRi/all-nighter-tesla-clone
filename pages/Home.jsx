import React from 'react';
import PowerSupply from '/src/components/homepage/PowerSupply';
import Footer from '/src/components/layout/Footer';
import Hero from '/src/components/ui/Hero';
import Navbar from '/src/components/layout/Navbar';
export default function Home() {
  return (
    <div >

      <Navbar/>
      <Hero />
      <PowerSupply />
      <Footer/>
    </div>
  )
}

