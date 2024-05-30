import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

export const SecondBanner = () => {
  return (
    <div className='middle-gradient my-10'>
      <div className='grid grid-cols-7 ml-8 sm:ml-14 md:ml-16 xl:ml-20'>
        <div className='border col-span-4'>Samsung Image</div>
        <div className='border col-span-3'>
          <div className='flex flex-col'>
            <div className='border px-2 py-14 xl:px-10 xl:py-20 flex flex-col xl:gap-5'>
                <h1 className='font-cy-grotesk-key-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>BRAND NEW</h1>
                <h1 className='font-samsung sm:text-2xl md:text-3xl xl:text-5xl'>SAMSUNG</h1>
                <h1 className='font-gotham font-light md:text-2xl xl:text-4xl'>Galaxy S23 Ultra</h1>
                <p className='font-gotham font-extralight text-sm sm:text-lg md:text-2xl xl:text-3xl pt-10 xl:pt-28'>256 GB | 512 GB | 1TB</p>
            </div>
            <div className='font-cy-grotesk-key-bold row-span-1 border p-2 md:p-4 md:text-2xl lg:text-4xl xl:text-5xl xl:p-10 hover:underline'>
                <Link href="/" className='flex gap-4 lg:gap-10 items-center'>BUY NOW <MdArrowOutward className='size-8 sm:size-10 md:size-14 lg:size-20 xl:size-24'/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
