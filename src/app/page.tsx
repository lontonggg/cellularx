'use client'

import { Navbar } from "@/components/common/Navbar";
import { Benefits } from "@/components/home/Benefits";
import { BrokenDevice } from "@/components/home/BrokenDevice";
import { FindUs } from "@/components/home/FindUs";
import { OurProducts } from "@/components/home/OurProducts";
import { Payments } from "@/components/home/Payments";
import { Profile } from "@/components/home/Profile";
import { Siri } from "@/components/home/Siri";
import { SocialMedia } from "@/components/home/SocialMedia";
import { Testimony } from "@/components/home/Testimony";
import { useState } from "react";
import { MainBanner } from "@/components/home/MainBanner";
import { SecondBanner } from "@/components/home/SecondBanner";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HowToBook } from "@/components/home/HowToBook";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const banners = [<MainBanner key="main" />, <SecondBanner key="second" />];

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
      setFade(true);
    }, 300);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? banners.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 300);
  };

  return (
    <div className="relative w-screen flex flex-col gap-10 bg-black">
      <div className="relative z-20">
        <Navbar />
      </div>
      <div className="relative z-10 text-white mt-16">
        <div className="relative">
          <div
            className={`carousel transition-opacity duration-500 ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {banners[currentIndex]}
          </div>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2"
            onClick={handlePrev}
          >
            <FaChevronLeft size={32} />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2"
            onClick={handleNext}
          >
            <FaChevronRight size={32} />
          </button>
        </div>
        <BrokenDevice />
        <Profile id="profile" />
        <Siri />
        <HowToBook />
        <Benefits />
        <Testimony id="testimony" />
        <OurProducts id="products" />
        <FindUs />
        <SocialMedia id="social-media" />
        <Payments />
      </div>
    </div>
  );
}
