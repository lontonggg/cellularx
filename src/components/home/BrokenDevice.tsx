import React from 'react';

export const BrokenDevice = () => {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 md:gap-20 lg:gap-30 xl:gap-40 font-telegraf p-8 lg:p-12 xl:p-16'>
        <div className='bg-white rounded-xl flex flex-col justify-center items-center gap-4 text-black p-10 text-center text-xl sm:text-sm md:text-xl lg:text-3xl xl:text-5xl' style={{ aspectRatio: '3 / 2' }}>
          <h1 className=''>Oh no! <span className='font-bold'>{"My new device's suddenly broken!"}</span></h1>
          <div className='p-10'>Phone Image</div>
        </div>
        <div className='text-white flex flex-col justify-center gap-4 lg:gap-8 xl:gap-12 p-2'>
          <h1 className='text-center font-bold text-xl sm:text-base md:text-xl lg:text-3xl xl:text-5xl'>Within a week of purchase?</h1>
          <p className='font-gotham text-justify text-balance sm:text-sm md:text-base lg:text-2xl xl:text-3xl'>{"No problem! Bring your device in for a complimentary service under our 1-week guarantee. We'll make it feel brand new again."}</p>
          <p className='font-gotham sm:text-sm md:text-base lg:text-2xl xl:text-3xl'>Plus, screen protectors are guaranteed for life!</p>
        </div>
      </div>
    </div>
  );
};
