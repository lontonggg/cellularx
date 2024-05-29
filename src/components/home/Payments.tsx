import React from 'react'

export const Payments = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex justify-between p-10 sm:p-14 md:p-20 lg:p-28 px-16 sm:px-20 lg:px-36 
        font-telegraf items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl'>
            <div className='flex flex-col '>
                <h1 className='font-bold '>Payment</h1>
                <h1 className=''>Methods</h1>
            </div>
            <div>{"->"}</div>
            <h1 className=''>debit \ credit \ <br></br>cash</h1>
        </div>
        <div className='bg-white text-black'>
            <div className='text-center p-10 sm:p-14 md:p-20 lg:p-28'>
                <h1 className='font-telegraf font-bold mb-2 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Sales this way!</h1>
                <button className='font-telegraf border-2 border-black rounded-full text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                px-8 sm:px-10 md:px-14 lg:px-16 py-1 md:py-2 transition transform duration-300 ease-in-out hover:font-bold hover:scale-110'>
                    Buy Now
                </button>
            </div>
        </div>
    </div>
  )
}
