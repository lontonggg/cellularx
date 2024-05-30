import { AboutTitle } from '@/components/about/AboutTitle'
import { OurProfile } from '@/components/about/OurProfile'
import { ShopNow } from '@/components/about/ShopNow'
import { VisionMission } from '@/components/about/VisionMission'

import { Navbar } from '@/components/common/Navbar'
import React from 'react'

export default function page() {
  return (
    <>
        <Navbar />
        <div className='px-10 flex flex-col justify-center items-center'>
          <AboutTitle />
          <OurProfile />
          <VisionMission />
          <ShopNow />
        </div>
    </>
  )
}
