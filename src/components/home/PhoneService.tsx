import React from 'react';
import Image from 'next/image';
import service_phone from '../../../public/images/service phone.png';
import { useEffect, useState } from 'react';


export const PhoneService = () => {
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
        <div className="relative mt-10 xl:mt-24">
            <div className='relative p-10 lg:p-20 xl:px-72 ml-20 md:ml-32'>
                <div className='font-extrabold text-center text-4xl sm:text-5xl md:text-6xl lg:text-[100px] xl:text-[125px] -rotate-90 leading-none absolute top-0 bottom-0 left-0 xl:left-20 z-0'>
                    <p>PHONE</p>
                    <p>SERVICES</p>
                </div>
                <div className='absolute flex flex-col items-center justify-center bottom-0 right-10 xl:right-20 font-telegraf'>
                    <p className='font-telegraf text-xs xl:mb-1 md:text-base lg:text-lg xl:text-2xl mr-4'>*guaranteed for life.</p>
                    <a target="_blank" rel="noopener noreferrer" href={calendarLink} className='flex items-center justify-center'>
                        <button className='font-bold text-white text-xs md:text-sm lg:text-base xl:text-2xl border-white border-2 rounded-full p-1 px-5 md:p-2 md:px-8 lg:p-3 lg:px-12 xl:px-14 transform hover:scale-105 hover:font-bold transition duration-300 ease-in-out'>
                            Service Now!
                        </button>
                    </a>
                </div>
                <div className='font-bold text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl text-lg:text-2xl'>
                    <p>install your screen</p>
                    <p>protection now.*</p>
                </div>
                <Image
                    src={service_phone}
                    layout="responsive"
                    width={1920}
                    height={1080}
                    quality={100}
                    className="z-50 relative"
                    alt="Phone Service"
                    
                />
            </div>
        </div>
    );
};
