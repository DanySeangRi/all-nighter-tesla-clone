import React from 'react'
import HomeShowcaseCard from './HomeShowcaseCard'
import { powerSupplyData } from './data'
import Button from '../ui/Button'
import { cardBtn, } from "../ui/uiStyle";
const PowerSupply = () => {
  return (
    <div className='flex px-12 gap-6 relative overflow-x-auto h-165 mt-12 '>
      {powerSupplyData.map((item,index)=>(
        <HomeShowcaseCard
        key={index}
        
        mobileImage={item.imageMobile}
        desktopImage={item.imageDesktop}
        name={item.name}
        description={item.description}
        btn1={ index ==2 ?
          null :
        <Button title={cardBtn[0].title} css={cardBtn[0].css} />}
        btn2={
          index === 2
            ? <Button title={cardBtn[5].title} css={cardBtn[5].css} />
            : <Button title={cardBtn[1].title} css={cardBtn[1].css} />
        }
      />  

      ))}
    

    </div>
  )
}

export default PowerSupply
