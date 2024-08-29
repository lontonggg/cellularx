'use client';

import { products } from '@/data/products';
import React, { useRef, useState, MouseEvent } from 'react';
import Navbar from '@/components/common/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { ProductCard } from '@/components/home/ProductCard';

const generateMailtoLink = (productName: string) => {
    const subject = `Inquiry about ${encodeURIComponent(productName)}`;
    const body = `Hi, I am interested in the ${productName}. Please provide me with more information.`;
    return `mailto:cellularx@cellularxca.com?subject=${subject}&body=${body}`;
};

export default function Page({ params }: any) {
    const data = products.find((product) => product.id === parseInt(params.id));

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        if (containerRef.current) {
            setIsDragging(true);
            setStartX(e.pageX - containerRef.current.offsetLeft);
            setScrollLeft(containerRef.current.scrollLeft);
        }
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !containerRef.current) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; 
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="relative w-screen flex flex-col gap-10 bg-white p-6 text-black">
            <div className="relative z-20">
                <Navbar />
            </div>
            <div className="relative z-10 mt-20">
                <div className='md:flex justify-between items-center hidden'>
                    <h1 className='flex items-center gap-4 text-base md:text-lg xl:text-xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 text-[#FD4501]'>
                        <Link href='/' className='hover:font-bold'>Home</Link>{` > `}
                        <span>
                            <Link href='/products' className='hover:font-bold'>Products</Link>
                            {` > `}
                        </span> 
                        <span>{data?.name}</span>
                    </h1>
                </div>
                <div className='grid lg:grid-cols-3 md:mt-28 gap-10'>
                    <div className='bg-white rounded-xl flex flex-col items-center justify-center overflow-hidden'>
                        <Image
                            src={data?.image || ''}
                            layout="responsive"
                            width={100}
                            height={100}
                            objectFit="contain"
                            quality={100}
                            alt={data?.name || ''}
                        />
                    </div>
                    <div>
                        <h1 className='text-4xl lg:text-5xl font-bold'>{data?.name}</h1>
                        <br></br>
                        <h1 className='text-3xl font-semibold mb-2'>Details</h1>
                        <p className='xl:text-xl text-justify'>{data?.description}</p>
                        <br />
                        <h1 className='text-3xl font-semibold mb-2'>Features</h1>
                        {data?.features && data.features.length > 0 ? (
                            <ul className='list-disc ml-5 xl:text-xl'>
                                {data.features.map((feature, index) => (
                                    <li key={index} className='mb-2'>{feature}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className='xl:text-xl'>No features available.</p>
                        )}
                    </div>
                    <div>
                        <div className='flex flex-col justify-center gap-10 border-2 border-black rounded-[50px] text-center p-10 md:mx-4 lg:mx-8 xl:mx-10 mt-10 lg:mt-0'>
                            <h1 className='text-4xl font-bold'>Interested?</h1>
                            <h1 className='font-telegraf-bold text-5xl'>+1</h1>
                            <Link href={generateMailtoLink(data?.name || 'product')}>
                                <div className='font-telegraf-bold border-2 border-[#FD4501] rounded-full mx-10 md:mx-44 lg:mx-8 xl:mx-12 p-2 text-xl transform hover:scale-105 hover:font-bold transition duration-300 ease-in-out'>Buy Now</div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='text-telegraf p-6 mt-20'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold text-3xl xl:text-4xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14'>Explore More</h1>
                    </div>
                    <div
                        className='flex overflow-scroll py-10 cursor-grab active:cursor-grabbing'
                        ref={containerRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        {products.map(product => (
                            <ProductCard key={product.id} name={product.name} image={product.image} link={`/products/${product.id}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
