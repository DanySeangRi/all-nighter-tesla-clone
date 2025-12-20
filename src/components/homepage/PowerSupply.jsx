import React from 'react'
import HomeShowcaseCard from './HomeShowcaseCard'
import powerSupplyData from './data'
import { Home } from 'lucide-react'
import NavigationButtons from '../ui/NavigationButtons'
import SlideIndicator from '../ui/SlideIndicator'
const PowerSupply = () => {
  return (
    <div className='flex w-1000 px-12 gap-6 relative'>
      {powerSupplyData.map((item,index)=>(
        <HomeShowcaseCard
        key={index}
        mobileImage={item.imageMobile}
        desktopImage={item.imageDesktop}
        name={item.name}
        description={item.description}
      />  

      ))}
      <SlideIndicator/>
     <NavigationButtons/>

    </div>
  )
}

export default PowerSupply
