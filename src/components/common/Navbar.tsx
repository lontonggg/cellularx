import { Popover, PopoverButton, PopoverOverlay, PopoverPanel, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React, { Fragment } from 'react'

export const Navbar = () => {
  return (
    <Popover>
      {/* Normal navbar */}
      <div className='hidden lg:block'>
        <header className='fixed top-10 left-1/2 transform -translate-x-1/2 w-2/3 xl:w-1/2 font-telegraf-bold rounded-full py-6 px-16 flex justify-between bg-white shadow-xl transition-transform duration-300 ease-in-out hover:scale-105'>
          <Link href="/" className='font-bold'>Cellular X</Link>
          <nav className='flex gap-14'>
            <Link href="/about" className='font-telegraf hover:font-bold'>About</Link>
            <Link href="/product" className='font-telegraf hover:font-bold'>Product</Link>
            <Link href="/testimony" className='font-telegraf hover:font-bold'>Testimony</Link>
            <Link href="/contact" className='font-telegraf hover:font-bold'>Contact</Link>
          </nav>
        </header>
      </div>

      {/* Hamburger Navbar */}
      <div className='lg:hidden'>
        <header className='fixed top-0 left-0 w-full border-gray-300 border-2 p-8 flex justify-between items-center bg-white'>
          <Link href="/" className='font-telegraf-bold text-2xl'>Cellular X</Link>
          <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400
          hover:bg-gray-100 hover-text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
            <span className='sr-only'>Open menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden="true"/>
          </PopoverButton>
        </header>
      </div>
      
      <PopoverOverlay className="fixed inset-0 bg-black opacity-30"/>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <PopoverPanel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden">
          <div className='rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <h1 className='font-telegraf-bold'>Cellular X</h1>
                <div className='-mr-2'>
                  <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400
                hover:bg-gray-100 hover-text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                      <span className='sr-only'>Close menu</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid gap-y-8'>
                  <Link href="/" className='font-telegraf hover:font-bold focus:outline-none px-2'>
                    Home
                  </Link>
                  <Link href="/about" className='font-telegraf hover:font-bold focus:outline-none px-2'>
                    About
                  </Link>
                  <Link href="/product" className='font-telegraf hover:font-bold focus:outline-none px-2'>
                    Product
                  </Link>
                  <Link href="/testimony" className='font-telegraf hover:font-bold focus:outline-none px-2'>
                    Testimony
                  </Link>
                  <Link href="/contact" className='font-telegraf hover:font-bold focus:outline-none px-2'>
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  )
}
