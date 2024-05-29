import React from 'react'
import { ProductCard } from './ProductCard'

export const Product = () => {
  return (
    <>
        <div className='p-16 px-64 flex justify-between items-center'>
            <h1 className='text-4xl font-bold'>Product</h1>
            <div className='flex gap-3'>
                <input className='border-black border-2 rounded-xl p-3 w-[500px]' placeholder='Search'></input>
                <button className='border-black border-2 rounded-xl p-3'>Search</button>
            </div>
            <div className='flex justify-center items-center'>
                <div className='border-black border-2 p-[11px] rounded-l-lg'>Filter by</div>
                <select className='border-black border-2 h-[50px] rounded-r-lg'>
                    <option>Default</option>
                    <option>Name (A - Z)</option>
                    <option>Name (Z - A)</option>
                    <option>Price (Low to High)</option>
                    <option>Price (High to Low)</option>
                </select>
            </div>
        </div>
        <div className='border-black border-2 mx-16 p-10 rounded-3xl grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </>
  )
}
