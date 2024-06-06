import Image from 'next/image';
import React from 'react';
import cornerasset from '../../../public/images/corner-asset.png';

interface SocialMediaProps {
  id?: string;
}

export const SocialMedia: React.FC<SocialMediaProps> = ({ id }) => {
  return (
    <div id={id} className='relative'>
      <div className="absolute bottom-0 left-0 w-16 sm:w-32 md:w-40 lg:w-48 xl:w-64">
        <Image
          src={cornerasset}
          layout="responsive"
          width={1080}
          height={1920}
          quality={100}
          alt="Right Arrow"
          className="transform group-hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
      <div className="absolute top-0 right-0 w-16 sm:w-32 md:w-40 lg:w-48 xl:w-64 rotate-180">
        <Image
          src={cornerasset}
          layout="responsive"
          width={1080}
          height={1920}
          quality={100}
          alt="Right Arrow"
          className="transform group-hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
      <div className='bg-white grid grid-cols-2 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-16 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 text-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
        <div className='border bg-black p-4 sm:p-6 lg:p-8 xl:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl xl:rounded-5xl flex items-start justify-start' style={{ aspectRatio: '3 / 2' }}>
          <h1 className='font-telegraf text-white'>Instagram</h1>
        </div>
        <div className='border bg-black p-4 sm:p-6 lg:p-8 xl:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl xl:rounded-5xl flex items-start justify-start' style={{ aspectRatio: '3 / 2' }}>
          <h1 className='font-telegraf text-white'>Facebook</h1>
        </div>
      </div>
    </div>
  );
};
