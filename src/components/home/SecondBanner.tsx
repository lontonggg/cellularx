import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import Image from 'next/image';
import samsung from '../../../public/images/samsung.png';
import samsung_logo from '../../../public/images/samsung_logo.png';

export const SecondBanner = () => {
  return (
    <div className='middle-gradient'>
      <div className='grid grid-cols-7 py-20 ml-8 sm:ml-14 md:ml-16 xl:ml-32'>
        <div className='border col-span-4 flex items-center justify-center'>
          <div className='w-full'>
            <Image
              src={samsung}
              layout="responsive"
              width={1080}
              height={1920}
              quality={100}
              alt="Samsung Galaxy S23 Ultra"
              className="transform group-hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        </div>
        <div className='border col-span-3 flex flex-col'>
          <div className='border px-2 py-14 md:px-8 xl:px-10 xl:py-20 flex flex-col xl:gap-5 flex-grow justify-center'>
            <h1 className='font-cy-grotesk-key-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>BRAND NEW</h1>
            <div className='w-28 sm:w-44 md:w-50 lg:w-58 xl:w-64 py-4'>
              <Image
                src={samsung_logo}
                layout="responsive"
                width={1080}
                height={1920}
                quality={100}
                alt="Samsung Galaxy S23 Ultra"
                className="transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
            <h1 className='font-gotham font-light md:text-2xl lg:text-3xl xl:text-4xl'>Galaxy S23 Ultra</h1>
            <p className='font-gotham font-extralight text-sm sm:text-lg md:text-2xl xl:text-3xl pt-10 md:pt-16 xl:pt-28'>256 GB | 512 GB | 1TB</p>
          </div>
          <div className='font-cy-grotesk-key-bold border p-2 md:p-4 md:px-10 md:text-2xl lg:text-4xl xl:text-5xl xl:p-10 hover:underline'>
            <Link href="mailto:cellularx@cellularxca.com?subject=Inquiry%20about%20Samsung%20Galaxy%20S23%20Ultra&body=Hi,%20I%20am%20interested%20in%20the%20Samsung%20Galaxy%20S23%20Ultra.%20Please%20provide%20me%20with%20more%20information." className='flex gap-4 lg:gap-10 items-center'>BUY NOW <MdArrowOutward className='size-8 sm:size-10 md:size-14 lg:size-20 xl:size-24'/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
