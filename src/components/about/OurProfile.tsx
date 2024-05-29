import React from 'react'

export const OurProfile = () => {
  return (
    <div className='bg-gray-200 w-screen p-10 lg:p-28'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 mx-6 xl:mx-44'>
            <div>
                <h1 className='text-3xl font-extrabold'>OUR PROFILE</h1>
                <br></br>
                <p className='text-justify text-sm md:text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta provident qui hic aperiam odit doloremque minima non commodi laboriosam quis repudiandae illum architecto fuga natus accusamus, nobis quidem quasi voluptatum.</p>
                <br></br>
                <p className='text-justify text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsa praesentium, quos blanditiis, tenetur magnam numquam soluta architecto enim, earum veniam sequi maxime quam quod deserunt accusamus quia laudantium tempora?</p>
            </div>
            <div className='hidden md:block'>
                <div className='border-black border-2 p-10 rounded-xl text-center h-[300px] content-center'>Image</div>
            </div>
        </div>
    </div>
    
  )
}
