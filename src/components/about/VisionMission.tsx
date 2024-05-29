import React from 'react'

export const VisionMission = () => {
  return (
    <div className='bg-black w-screen p-10 lg:p-28'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 mx-6 xl:mx-44'>
            <div className='hidden md:block'>
                <div className='border-black border-2 p-10 bg-white rounded-xl text-center h-[300px] content-center'>Image</div>
            </div>
            <div>
                <h1 className='text-3xl text-white font-extrabold'>VISION</h1>
                <br></br>
                <p className='text-justify text-white text-sm md:text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta provident qui hic aperiam odit doloremque minima non commodi laboriosam quis repudiandae illum architecto fuga natus accusamus, nobis quidem quasi voluptatum.</p>
                <br></br>
                <h1 className='text-3xl text-white font-extrabold'>MISSION</h1>
                <br></br>
                <p className='text-justify text-white text-sm'>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className='text-justify text-white text-sm'>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className='text-justify text-white text-sm'>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>
  )
}
