import React from 'react';

export const ProductCard = () => {
  return (
    <div className='border-black border-2 rounded-2xl'>
        <div className='border-black border-2 rounded-t-xl p-32'>
        <img
                src="https://www.pngall.com/wp-content/uploads/5/iPhone-11-PNG-Transparent-HD-Photo.png"
                alt="Product Image"
                className="w-full h-full object-cover rounded-t-xl transform scale-[3.5]"
            />
        </div>
        <div className='p-8'>
            <h1 className='font-semibold text-xl'>iPhone 11 256GB Second Ex Internasional</h1>
            <p className='text-gray-500 text-xl'>Rp7,550,000.00</p>
        </div>
    </div>
  );
};
