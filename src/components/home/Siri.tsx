import Image from 'next/image'
import React from 'react'
import iphone_siri from '../../../public/images/iphone-siri.png';
import ChatBubble from './ChatBubble';
import cornerasset from '../../../public/images/corner-asset-2.png';

export const Siri = () => {
  return (
    <div className='relative xl:p-10 overflow-x-clip'>
        <div className="absolute -bottom-10 -right-10 xl:-right-20 w-32 sm:w-44 md:w-56 lg:w-64 xl:w-96 rotate-90">
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
        <div className="absolute -top-10 -left-10 xl:-left-20 w-32 sm:w-44 md:w-56 lg:w-64 xl:w-96 -rotate-90 ">
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
        <div className='flex flex-col items-center justify-center bg-white rounded-3xl m-6 mb-20 md:m-10 lg:m-16 xl:m-20 text-black font-telegraf text-center sm:text-2xl lg:text-5xl xl:text-7xl'>
            <h1 className='pt-10 lg:pt-24 xl:pt-36 pb-10 xl:pb-10'>Get <span className='font-bold'>everything you need</span> in <br></br> <span className='font-bold'>one convenient place.</span></h1>
            <div className='relative w-[180px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[500px]'>
                <Image 
                    src={iphone_siri}
                    layout="responsive"
                    width={1080}
                    height={1920}
                    alt="Iphone Siri"
                />
                <ChatBubble message="Phone service" color="#257DFC" style={{ position: 'absolute', top: '10%', right: '-35%' }} />
                <ChatBubble message="Cool Casing!" color="#EAEAEC" inverted={true} style={{ position: 'absolute', top: '20%', left: '-45%', color: 'black' }} />
                <ChatBubble message={<span>1 week service<br />guarantee :0</span>} color="#257DFC" style={{ position: 'absolute', top: '50%', right: '-45%'}} />
                <ChatBubble message="★★★★. . . !" color="#EAEAEC" inverted={true} style={{ position: 'absolute', top: '60%', left: '-35%', color: 'black' }} />
            </div>
        </div>
    </div>
    
  )
}
