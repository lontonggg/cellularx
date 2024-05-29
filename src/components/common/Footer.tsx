import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-black text-white p-16'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3'>
            <div className='xl:px-56'>
                <h1 className='text-3xl font-bold'>CellularX</h1>
                <div className='flex flex-col gap-4 mt-4'>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/product">Product</Link>
                    <Link href="/testimony">Testimony</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
            <div>
                <h1 className='text-3xl font-bold'>OUR LOCATIONS</h1>
                <div className='flex flex-col gap-4 mt-4'>
                    <div> - Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div> - Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div> - Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
    
                </div>
            </div>
            <div>
                <h1 className='text-3xl font-bold'>QUICK LINKS</h1>
                <div className='flex flex-col gap-4 mt-4'>
                    <Link href="/">Cara Belanja</Link>
                    <Link href="/about">Promo ShopeePayLater</Link>
                    <Link href="/product">Promo Kredivo</Link>
                    <Link href="/testimony">Syarat dan Ketentuan</Link>
                    <Link href="/contact">Shopping Cart</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}
