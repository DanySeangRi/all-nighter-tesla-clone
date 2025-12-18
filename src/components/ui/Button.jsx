import React from 'react'

export default function Button({name,bgColor,textColor,width,height}) {
  return (
    <div className={`
    ${width} ${height}
    ${bgColor} 
    rounded-sm 
    flex justify-center
     items-center p-1 
     text-sm ${textColor}`}>
      
      <button>{name}</button>

    </div>
  )
}
