import React from 'react'

export const HowToBook = () => {
  return (
    <>
        <div className='font-gotham flex flex-col items-center justify-center text-white py-20'>
            <div className='flex border-2 p-4 pb-2 md:p-6 lg:p-10 xl:p-12 px-10 rounded-full font-bold mb-10 md:text-3xl lg:text-4xl xl:text-5xl'>
              <h1>HOW TO BOOK?</h1>
            </div>
            <div className='md:text-2xl lg:text-3xl xl:text-4xl px-10 text-justify leading-relaxed'>
                <p>1. Go to Cellular X’s <span className='font-bold'>Google Calendar</span> appointment maker.</p>
                <p>2. Set your <span className='font-bold'>appointment schedule.</span></p>
                <p>3. <span className='font-bold'>Come</span> to Cellular X’s offline store.</p>
                <p>4. Voila! <span className='font-bold'>Your device is ready to go!</span></p>
                <br></br>
                <p className='text-right'>*if needed, you may <span className='font-bold'>contact Cellular X’s email!</span></p>
            </div>
        </div>
    </>
  )
}
