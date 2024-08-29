'use client';

import React from 'react';
import { ProductCard } from './ProductCard';
import Link from 'next/link';
import { products } from '@/data/products';

export const ProductContainer: React.FC = () => {
  return (
    <div className='text-telegraf p-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-base md:text-lg xl:text-xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14'>
          <Link href='/' className='hover:font-bold'>Home</Link>{` > `}
          <span className='text-[#FD4501]'>
            <Link href='/products' className='hover:font-bold'>Products</Link>
          </span>
        </h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10'>
        {products.map(product => (
          <ProductCard key={product.id} name={product.name} image={product.image} link={`/products/${product.id}`} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
