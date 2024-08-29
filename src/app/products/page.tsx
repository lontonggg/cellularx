import React from 'react';
import Navbar from '@/components/common/Navbar';
import ProductContainer from '@/components/products/ProductContainer';

export default function page() {
  return (
    <div className="relative w-screen flex flex-col gap-10 bg-black">
      <div className="relative z-20">
        <Navbar />
      </div>
      <div className="relative z-10 text-white mt-20">
        <ProductContainer />
      </div>
    </div>
  );
}
