'use client';

import React from 'react';
import Image from 'next/image';
import broken_phone from '../../../public/images/iphone-fix.png';
import circle_x from '../../../public/images/circle-x.png';
import { useState, useEffect } from 'react';

export const BrokenDevice = () => {

  const [calendarLink, setCalendarLink] = useState('');

  useEffect(() => {
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);

    const year = nextDay.getFullYear();
    const month = String(nextDay.getMonth() + 1).padStart(2, '0');
    const day = String(nextDay.getDate()).padStart(2, '0');

    const startTime = `${year}${month}${day}T100000Z`;
    const endTime = `${year}${month}${day}T110000Z`;

    const guestEmail = 'cellularx@cellularxca.com';
    const link = `https://calendar.google.com/calendar/u/0/r/eventedit?dates=${startTime}/${endTime}&text=Phone+Service&add=${guestEmail}`;
    setCalendarLink(link);
  }, []);

  return (
    <div className='font-telegraf p-8 lg:p-12 xl:p-16'>
      <div className='relative grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-16 md:gap-20 lg:gap-30 xl:gap-40'>
        <div className='bg-white rounded-xl flex flex-col justify-center items-center gap-6 text-black text-center text-xl sm:text-sm md:text-xl lg:text-3xl xl:text-5xl' style={{ aspectRatio: '4 / 2' }}>
          <h1 className='p-10'>Oh no! <span className='font-bold'>{"My new device's suddenly broken!"}</span></h1>
          <div className='w-full pl-10 pb-10'>
            <Image
              src={broken_phone}
              layout="responsive"
              width={1080}
              height={1920}
              quality={100}
              alt="Samsung Galaxy S23 Ultra"
            />
          </div>
        </div>
        <div className='text-white flex flex-col justify-center gap-4 lg:gap-8 xl:gap-12 p-2'>
          <h1 className='text-center font-bold text-xl sm:text-base md:text-xl lg:text-3xl xl:text-5xl'>Within a week of purchase?</h1>
          <p className='font-gotham text-justify sm:text-sm md:text-base lg:text-2xl'>{"No problem! Bring your device in for a complimentary service under our 1-week guarantee. We'll make it feel brand new again."}</p>
          <p className='font-gotham text-justify sm:text-sm md:text-base lg:text-2xl'>{"Plus, screen protectors are guaranteed for life!"}</p>
          <a target="_blank" rel="noopener noreferrer" href={calendarLink} className='flex items-center justify-center'>
            <button className='font-bold text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl border-white border-2 rounded-full p-3 px-10 md:p-4 md:px-18 lg:px-20 xl:px-24 transform hover:scale-105 hover:font-bold transition duration-300 ease-in-out'>Service Now!</button>
          </a>
        </div>
        <div className='absolute inset-0 flex justify-center items-center pointer-events-none'>
          <div className='relative hidden sm:block sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-18 lg:h-18 xl:w-24 xl:h-24'>
            <Image
              src={circle_x}
              layout="fill"
              quality={100}
              alt="Circle X"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
