import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import upward_arrow from '../../../public/images/upward-arrow.png';

interface ProductCardProps {
  name: string;
  image: string;
  link: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, image, link }) => {
  return (
    <div className='m-4 flex flex-col justify-between font-telegraf gap-5 sm:gap-7 md:gap-9 lg:gap-11 xl:gap-14 sm:m-6 md:m-8 lg:m-10 xl:m-12'>
      <div className='relative bg-white rounded-xl flex flex-col items-center justify-center overflow-hidden' style={{ paddingBottom: '100%' }}>
        <Image
          src={image}
          layout="fill"
          objectFit="contain"
          quality={100}
          alt={name}
        />
      </div>
      <h1 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>{name}</h1>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:font-bold hover:underline'>
          <Link href={link}>Buy Now</Link>
        </h1>
        <div className='w-8 h-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16'>
          <Image
            src={upward_arrow}
            layout="responsive"
            width={1080}
            height={1920}
            quality={100}
            alt="Right Arrow"
          />
        </div>
      </div>
    </div>
  );
};
