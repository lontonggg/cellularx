import React from 'react';
import { FaApple } from 'react-icons/fa';
import Image from 'next/image';
import iphone15 from '../../../public/images/iphone.png';

export const MainBanner = () => {
  return (
    <div className="custom-gradient">
      <div className="grid grid-cols-2 mx-5 lg:mx-20 py-16 sm:py-24 md:py-30 lg:py-36 xl:py-40">
        <div className="text-center flex flex-col items-center justify-center py-10">
          <h1 className="font-san-fransisco font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-6xl py-2 flex items-center justify-center">
            <FaApple className="mr-1" /> iPhone 15 Pro
          </h1>
          <p className="font-gotham text-xs sm:text-md md:text-lg lg:text-xl xl:text-4xl xl:py-3 xl:pt-5">Titanium.</p>
          <p className="font-gotham text-xs sm:text-md md:text-lg lg:text-xl xl:text-4xl">So strong. So light. So Pro.</p>
          <h1 className="font-gotham text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-5xl p-6 sm:pt-4 sm:pb-4 xl:pt-14 xl:pb-8">Available Now</h1>
          <button className="font-telegraf border text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl border-white rounded-full py-1 sm:py-2 md:py-3 lg:py-4 xl:py-5 
          px-9 sm:px-12 md:px-16 lg:px-20 xl:px-24 bg-transparent hover:bg-white hover:text-black transform hover:scale-105 hover:font-bold transition duration-300 ease-in-out ">
            Buy Now
          </button>
        </div>
        <div className='flex justify-center items-center'>
          <div className="relative group w-full max-w-lg">
            <Image
              src={iphone15}
              layout="responsive"
              width={1080}
              height={1920}
              quality={100}
              alt="iPhone 15 Pro"
              className="transform group-hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
