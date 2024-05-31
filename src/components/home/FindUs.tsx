import React from 'react';
import Image from 'next/image';
import rightarrow from '../../../public/images/right-arrow.png';
import map_iphone from '../../../public/images/map-iphone.png';
import Link from 'next/link';

export const FindUs = () => {
  return (
    <div className='p-6 py-8 sm:p-8 md:p-10 lg:p-14 xl:p-18 2xl:p-20'>
      <div className='grid grid-cols-2 text-black gap-10 xl:gap-16 font-telegraf text-md sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>
        <div className='flex flex-col justify-center bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-16 2xl:p-20' style={{ aspectRatio: '2 / 2' }}>
          <h1>{"Worry you'd never find us?"}</h1>
          <h1 className='font-bold'>
            Follow this <br />
            route.
            <span className='inline-flex ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12 w-7 sm:h-5 sm:w-10 md:h-7 md:w-14 lg:h-9 lg:w-18 xl:h-14 xl:w-28'>
              <Image
                src={rightarrow}
                layout="responsive"
                width={1080}
                height={1920}
                quality={100}
                alt="Right Arrow"
                className="transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
            </span>
          </h1>
        </div>
        <div className='flex flex-col items-center justify-end bg-white rounded-xl md:rounded-2xl' style={{ aspectRatio: '2 / 2' }}>
            <div className='w-[130px] sm:w-[235px] md:w-[280px] lg:w-[370px] xl:w-[550px]'>
                <Link href="https://maps.app.goo.gl/6o3888YDQUAFQzPe9?g_st=com.google.maps.preview.copy" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                        <Image
                        src={map_iphone}
                        layout="responsive"
                        width={1080}
                        height={1920}
                        quality={100}
                        alt="Samsung Galaxy S23 Ultra"
                        className="transform group-hover:scale-105 transition duration-300 ease-in-out"
                        />
                    </a>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};
