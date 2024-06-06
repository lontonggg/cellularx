'use client'

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import carousel_1 from '../../../public/images/carousel-1.png'
import carousel_2 from '../../../public/images/carousel-2.png'
import carousel_3 from '../../../public/images/carousel-3.png'
import carousel_4 from '../../../public/images/carousel-4.png'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true
  };

  return (
    <div className='my-20 overflow-hidden'>
      <Slider {...settings}>
        <div>
            <Image 
            src={carousel_1} 
            layout='responsive'
            width={1920}
            height={1080}
            quality={100}
            alt='Image 1'
            />
        </div>
        <div>
            <Image 
            src={carousel_2} 
            layout='responsive'
            width={1920}
            height={1080}
            quality={100}
            alt='Image 1'
            />
        </div>
        <div>
            <Image 
            src={carousel_3} 
            layout='responsive'
            width={1920}
            height={1080}
            quality={100}
            alt='Image 1'
            />
        </div>
        <div>
            <Image 
            src={carousel_4} 
            layout='responsive'
            width={1920}
            height={1080}
            quality={100}
            alt='Image 1'
            />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
