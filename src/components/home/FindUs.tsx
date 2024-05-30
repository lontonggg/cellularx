import React from 'react'

export const FindUs = () => {
  return (
    <div className='p-4 sm:p-8 md:p-10 lg:p-14 xl:p-18 2xl:p-20'>
        <div className='grid grid-cols-2 text-black gap-10 xl:gap-16 font-telegraf text-md sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>
            <div className='flex flex-col justify-center bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-16 2xl:p-20'  style={{ aspectRatio: '2 / 2' }}>
                <h1>{"Worry you'd never find us?"}</h1>
                <h1 className='font-bold'>Follow this <br></br>route. {"->"}</h1>
            </div>
            <div className='flex flex-col justify-center items-center bg-white rounded-xl md:rounded-2xl'  style={{ aspectRatio: '2 / 2' }}>
                <h1>Phone Image</h1>
            </div>
        </div>
    </div>
  )
}
