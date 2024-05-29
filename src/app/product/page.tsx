import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { Product } from '@/components/product/Product'
import React from 'react'

export default function page() {
  return (
    <>
        <Navbar />
        <Product />
        <Footer />
    </>
  )
}
