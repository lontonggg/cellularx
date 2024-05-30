import React from 'react';

export const SocialMedia = () => {
  return (
    <div className='bg-white grid grid-cols-2 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-16 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 text-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
      <div className='border bg-black p-4 sm:p-6 lg:p-8 xl:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl xl:rounded-5xl flex items-start justify-start' style={{ aspectRatio: '3 / 2' }}>
        <h1 className='font-telegraf text-white'>Instagram</h1>
      </div>
      <div className='border bg-black p-4 sm:p-6 lg:p-8 xl:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl xl:rounded-5xl flex items-start justify-start' style={{ aspectRatio: '3 / 2' }}>
        <h1 className='font-telegraf text-white'>Facebook</h1>
      </div>
    </div>
  );
};
