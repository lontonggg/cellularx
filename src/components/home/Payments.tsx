import React from 'react'
import Image from 'next/image'
import rightarrow from '../../../public/images/right-arrow.png';
import Link from 'next/link';

export const Payments = () => {
  return (
    <div className='flex flex-col'>
        <div className='grid grid-cols-3 balance p-10 sm:p-14 md:p-20 lg:p-28 px-10 sm:px-20 lg:px-44 
        font-telegraf items-center justify-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl'>
            <div className='flex flex-col items-center justify-center '>
                <h1 className='font-bold '>Payment</h1>
                <h1 className=''>Methods</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48'>
                    <Image
                    src={rightarrow}
                    layout="responsive"
                    width={1080}
                    height={1920}
                    quality={100}
                    alt="=Right Arrow"
                    />
                </div>
            </div>
            <h1 className='flex justify-center items-center'>debit \ credit \ <br></br>cash</h1>
        </div>
        <div className='bg-white text-black'>
            <div className='text-center p-10 sm:p-14 md:p-20 lg:p-28'>
                <h1 className='font-telegraf font-bold mb-2 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Sales this way!</h1>
                <Link href="/products">
                    <button className='font-telegraf border-2 border-black rounded-full text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                    px-8 sm:px-10 md:px-14 lg:px-16 py-1 md:py-2 transition transform duration-300 ease-in-out hover:font-bold hover:scale-110'>
                        Buy Now
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}
