'use client';

import React, { useRef, useState, MouseEvent } from 'react';
import { ProductCard } from './ProductCard';
import Image from 'next/image';
import Link from 'next/link';
import rightarrow from '../../../public/images/right-arrow.png';
import { products } from '../../data/products';

interface OurProductsProps {
  id?: string;
}

export const OurProducts: React.FC<OurProductsProps> = ({ id }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div id={id} className='text-telegraf p-6'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14'>Our Products</h1>
        <Link href='/products'>
          <div className='flex flex-col items-center justify-center w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 mr-20 transition-transform duration-300 ease-in-out hover:scale-105'>
            <Image
              src={rightarrow}
              layout="responsive"
              width={1080}
              height={1920}
              quality={100}
              alt="Right Arrow"
            />
          </div>
        </Link>
      </div>
      <div
        className='flex overflow-scroll py-10 cursor-grab active:cursor-grabbing'
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {products.map(product => (
          <ProductCard key={product.id} name={product.name} image={product.image} link={`/products/${product.id}`} />
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
