import Image from 'next/image'
import React from 'react'
import flexible_payment from '../../../public/images/flexible-payment.png'
import guaranteed_authentic from '../../../public/images/guaranteed-authentic.png'
import expert_help from '../../../public/images/expert-help.png'
import one_week_guarantee from '../../../public/images/one-week-guarantee.png'

export const Benefits = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 m-10 xl:m-32 sm:text-2xl md:text-xl lg:text-3xl font-gotham font-extrabold text-center gap-10'>
        <div className='flex flex-col gap-10 items-center justify-center'>
            <div className='flex flex-col items-center justify-center rounded-full' style={{aspectRatio: 1/1}}>
                <Image 
                src={flexible_payment} 
                layout='responsive'
                width={1920}
                height={1080}
                quality={100}
                alt='Flexible Payment Options'
                />
            </div>
            <h1>Flexible Payment Options</h1>
        </div>
        <div className='flex flex-col gap-10 items-center justify-center'>
            <div className='flex flex-col items-center justify-center rounded-full' style={{aspectRatio: 1/1}}>
                <Image 
                src={guaranteed_authentic} 
                layout='responsive'
                width={1920}
                height={1080}
                quality={100}
                alt='Guaranteed Authentic'
                />
            </div>
            <h1>Guaranteed Authentic</h1>
        </div>
        <div className='flex flex-col gap-10 items-center justify-center'>
            <div className='flex flex-col items-center justify-center rounded-full' style={{aspectRatio: 1/1}}>
                <Image 
                src={expert_help} 
                layout='responsive'
                width={1920}
                height={1080}
                quality={100}
                alt='Expert Help Awaits In-Store'
                />
            </div>
            <h1>Expert Help Awaits In-Store</h1>
        </div>
        <div className='flex flex-col gap-10 items-center justify-center'>
            <div className='flex flex-col items-center justify-center rounded-full' style={{aspectRatio: 1/1}}>
                <Image 
                src={one_week_guarantee} 
                layout='responsive'
                width={1920}
                height={1080}
                quality={100}
                alt='1-Week Guarantee'
                />
            </div>
            <h1>1-Week Guarantee</h1>
        </div>
    </div>
  )
}
