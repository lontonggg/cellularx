import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import upward_arrow from '../../../public/images/upward-arrow.png';

export const ProductCard = () => {
  return (
    <div className='m-4 flex flex-col font-telegraf gap-5 sm:gap-7 md:gap-9 lg:gap-11 xl:gap-14 sm:m-6 md:m-8 lg:m-10 xl:m-12'>
        <div className='bg-white rounded-xl flex flex-col items-center justify-center p-14 sm:p-16 md:p-20 lg:p-28 xl:p-36' style={{ aspectRatio: '1 / 1' }}>
            <h1 className='text-black text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>Product Image</h1>
        </div>
        <h1 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Product Name</h1>
        <div className='flex justify-between items-center'>
            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:font-bold hover:underline'>
                <Link href="/">Buy Now</Link>
            </h1>
            <div className='w-8 h-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16'>
              <Image
                src={upward_arrow}
                layout="responsive"
                width={1080}
                height={1920}
                quality={100}
                alt="Right Arrow"
              />
            </div>
        </div>
        
    </div>
  )
}
