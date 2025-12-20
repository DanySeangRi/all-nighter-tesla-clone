import React from 'react'
import HomeShowcaseCard from './HomeShowcaseCard'
import HomeShowcaseData from './data'
import { Home } from 'lucide-react'
const PowerSupply = () => {
  return (
    <div className='flex w-1000 px-12 gap-6'>
      {HomeShowcaseData.map((item,index)=>(
        <HomeShowcaseCard
        key={index}
        mobileImage={item.imageMobile}
        desktopImage={item.imageDesktop}
        name={item.name}
        description={item.description}
      />  
      ))}
    </div>
  )
}

export default PowerSupply
