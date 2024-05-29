import Link from 'next/link'
import React from 'react'

export const ShopNow = () => {
  return (
    <div className='w-screen bg-gray-200'>
        <div className='flex flex-col gap-8 p-20 md:p-28 items-center justify-cetner'>
            <h1 className='font-extrabold text-3xl md:text-5xl text-center'>{"DON'T MISS OUT ON OUR CRAZY DEALS ONLY AT CELLULARX!"}</h1>
            <Link href="/product"><button className='bg-gray-700 py-4 px-10 text-white md:text-2xl font-medium rounded-full'>SHOP NOW</button></Link>
        </div>
    </div>
  )
}
