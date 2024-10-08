import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import upward_arrow from '../../../public/images/upward-arrow.png';
import { usePathname } from 'next/navigation';

interface ProductCardProps {
  name: string;
  image: string;
  link: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, image, link }) => {
  const pathname = usePathname();
  return (
    <div className='m-4 flex flex-col justify-between font-telegraf gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 sm:m-6 md:m-8 lg:m-10 xl:m-12' style={{ flex: '0 0 25%' }}>
      <div className='relative bg-gray-100 rounded-xl flex flex-col items-center justify-center overflow-hidden' style={{ height: '350px', width: '100%', aspectRatio: 1/1 }}>
        <Image
          src={image}
          layout="fill"
          objectFit="contain"
          quality={100}
          alt={name}
        />
      </div>
      <h1 className='font-bold text-2xl lg:text-3xl xl:text-4xl'>{name}</h1>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl lg:text-3xl xl:text-4xl hover:font-bold hover:underline'>
          <Link href={link}>Buy Now</Link>
        </h1>
        <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18'>
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
