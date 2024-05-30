import React from 'react'
import { ProductCard } from './ProductCard'

export const OurProducts = () => {
  return (
    <div className='text-telegraf p-6'>
        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14'>Our Products</h1>
        <div className='flex overflow-scroll py-10'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}
