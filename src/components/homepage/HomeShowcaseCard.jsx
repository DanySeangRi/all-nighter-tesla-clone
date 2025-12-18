import React from 'react'
import Button from '../ui/Button'
import { useEffect, useState } from "react";
const HomeShowcaseCard = ({ mobileImage, desktopImage,name,underline,description }) => {
  const [isDesktop, setIsDesktop] = useState(false);

 
  useEffect(() => {
    const media = window.matchMedia("(min-width: 640px)");
    setIsDesktop(media.matches);

    const listener = () => setIsDesktop(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);


  return (
    <div className={`w-82.5 h-130       
                    sm:w-5xl sm:h-145
                      bg-amber-950 rounded-[10px] 
                      
                      bg-cover flex items-end`}   style={{
        backgroundImage: `url(${isDesktop ? desktopImage : mobileImage})`
      }}>
    
      <div className='flex gap-5 flex-col p-4  '>
        <span className='flex flex-col '>
          <h1 className='text-[40px] text-white top-1 relative'>{name}</h1>
          <a className={`text-white ${underline} text-[16px]`}>{description}</a>
        </span>
        <span className='flex gap-2 mb-4 '>
          <Button name='Order Now' bgColor='bg-[#3e6ae1]' textColor='' width='w-[145px]' height='h-10'/>
          <Button name='Learn More' bgColor='bg-[white]' textColor='' width='w-[145px]' height='h-10'/>
        </span>
      </div>
    </div>
  )
}

export default HomeShowcaseCard
