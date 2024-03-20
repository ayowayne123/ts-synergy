import React from 'react'
import Image from 'next/image'
import mask from "@/public/mask.svg"


function TitleHeader({ parentClass, children }) {
  return (
    <div className={`w-full relative overflow-hidden ${parentClass}`}>
        {children}
        <div className="absolute lg:-bottom-20 -bottom-7 left-0 right-0 z-0">
        <Image src={mask} 
    className="object-contain w-full object-bottom z-0" alt="bg"/>
</div>
    </div>
  )
}

export default TitleHeader