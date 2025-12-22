import React from 'react'
import VideoDisplay from './VideoDisplay'
import HomeShowcaseCardSmall from './HomeShowcaseCardSmall'
import { selfDriving} from './data'
const SelfDriving = () => {
  return (
    <div className='w-full   flex-col gap-6 flex-1 py-8 px-3 lg:px-12 lg:py-8  justify-center flex lg:flex-row '>
      <VideoDisplay id='small-card' height="h-[520px] w-[402px] lg:h-[580px]  "/>
      <HomeShowcaseCardSmall
      name={selfDriving[0].name}
      mobileImage={selfDriving[0].imageMobile}
      desktopImage={selfDriving[0].imageDesktop} />
    </div>
  )
}

export default SelfDriving
