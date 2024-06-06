import React from 'react';

interface ProfileProps {
  id?: string;
}

export const Profile: React.FC<ProfileProps> = ({ id }) => {
  return (
    <div id={id} className='font-telegraf text-center py-10 md:py-20 xl:py-48'>
      <h1 className='text-2xl sm:text-2xl md:text-4xl lg:text-6xl p-4 sm:p-6 md:p-8 lg:p-10'>LOGO</h1>
      <p className='text-sm sm:text-xl md:text-2xl lg:text-4xl px-10 sm:px-16 md:px-24 lg:px-28 xl:px-64 text-balance'>
        Starting from [year] in Canada, we strive to bring people coast-to-coast the tech they love with straightforward advice and hassle-free solutions.
      </p>
      <p className='sm:text-xl md:text-2xl lg:text-4xl font-bold'>Together, let’s unlock the possibilities!</p>
    </div>
  );
}
