import React from 'react';

interface TestimonyProps {
  id?: string;
}

export const Testimony: React.FC<TestimonyProps> = ({ id }) => {
  return (
    <div id={id} className='py-16'>
      <div className='Testimony bg-gray-100 text-black p-10 m-6 xl:p-20 xl:m-20 rounded-2xl relative'>
        <h1 className='absolute text-[100px] sm:text-[150px] md:text-[200px] lg:text-[350px] xl:text-[550px] font-cy-grotesk-key-bold top-[-10px] sm:top-[-30px] md:top-[-50px] lg:top-[-120px] xl:top-[-150px] text-black'>“</h1>
        <div className='relative top-0 left-0 py-10 xl:p-20'>
          <h1 className='text-center font-telegraf text-2xl sm:text-4xl md:text-5xl xl:text-7xl relative'>
            They <span className='font-extrabold'>proudly say . . .</span>
            <div className="underline-gradient"></div>
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 xl:gap-10'>
          <div className='border-4 border-black rounded-3xl xl:p-6 py-12 xl:py-20 bg-white flex flex-col items-center'>
            <h1 className='text-center font-gotham font-extrabold text-xl sm:text-2xl lg:text-4xl xl:text-4xl xl:mb-5'>Matt Wilson</h1>
            <div className='flex justify-center mb-5'>
              <span className='text-orange-500 text-xl sm:text-2xl xl:text-4xl'>★★★★★</span>
            </div>
            <p className='text-sm sm:text-xl md:text-sm lg:text-xl xl:text-xl text-center px-5 relative'>
              <span className="quote-symbol"></span>
              I bought a screen protector, camera protector and a phone case for my Galaxy S24 ultra. They got it done in less than 10 minutes with great communication. I Highly recommend.
              <span className="quote-symbol"></span>
            </p>
          </div>
          <div className='border-4 border-black rounded-3xl xl:p-6 py-12 xl:py-20 bg-white flex flex-col items-center'>
            <h1 className='text-center font-gotham font-extrabold text-xl sm:text-2xl lg:text-4xl xl:text-4xl xl:mb-5'>Mohammad Khan</h1>
            <div className='flex justify-center mb-5'>
              <span className='text-orange-500 text-xl sm:text-2xl xl:text-4xl'>★★★★★</span>
            </div>
            <p className='text-sm sm:text-xl md:text-sm lg:text-xl xl:text-xl text-center px-5 relative'>
              <span className="quote-symbol"></span>
              Amazing service....Specially I would like to mention the name Waqasa was very polite and helpful......Glad to come here
              <span className="quote-symbol"></span>
            </p>
          </div>
          <div className='border-4 border-black rounded-3xl xl:p-6 py-12 xl:py-20 bg-white flex flex-col items-center'>
            <h1 className='text-center font-gotham font-extrabold text-xl sm:text-2xl lg:text-4xl xl:text-4xl xl:mb-5'>Charity Adeleke</h1>
            <div className='flex justify-center mb-5'>
              <span className='text-orange-500 text-xl sm:text-2xl xl:text-4xl'>★★★★★</span>
            </div>
            <p className='text-sm sm:text-xl md:text-sm lg:text-xl xl:text-xl text-center px-5 relative'>
              <span className="quote-symbol"></span>
              These guys are literally the best!!! Super fast and also really pleasant!! Fantastic service and they even fixed my screen the second time for free!
              <span className="quote-symbol"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
