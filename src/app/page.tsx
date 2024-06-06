import { Navbar } from "@/components/common/Navbar";
import { Benefits } from "@/components/home/Benefits";
import { BrokenDevice } from "@/components/home/BrokenDevice";
import Carousel from "@/components/home/Carousel";
import { FindUs } from "@/components/home/FindUs";
import { MainBanner } from "@/components/home/MainBanner";
import { OurProducts } from "@/components/home/OurProducts";
import { Payments } from "@/components/home/Payments";
import { Profile } from "@/components/home/Profile";
import { SecondBanner } from "@/components/home/SecondBanner";
import { Siri } from "@/components/home/Siri";
import { SocialMedia } from "@/components/home/SocialMedia";
import { Testimony } from "@/components/home/Testimony";

export default function Home() {
  return (
    <div className="relative w-screen flex flex-col gap-10 bg-black">
      <div className="relative z-20">
        <Navbar />
      </div>
      <div className="relative z-10 text-white mt-16">
        <MainBanner />
        <SecondBanner />
        <Profile id="profile" />
        <Carousel />
        <Siri />
        <Benefits />
        <Testimony id="testimony" />
        <OurProducts id="products" />
        <BrokenDevice />
        <FindUs />
        <SocialMedia id="social-media" />
        <Payments />
      </div>
    </div>
  );
}
