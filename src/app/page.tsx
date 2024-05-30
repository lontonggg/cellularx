import { Navbar } from "@/components/common/Navbar";
import { Airpods } from "@/components/home/Airpods";
import { BrokenDevice } from "@/components/home/BrokenDevice";
import { FindUs } from "@/components/home/FindUs";
import { MainBanner } from "@/components/home/MainBanner";
import { OurProducts } from "@/components/home/OurProducts";
import { Payments } from "@/components/home/Payments";
import { Profile } from "@/components/home/Profile";
import { SecondBanner } from "@/components/home/SecondBanner";
import { SocialMedia } from "@/components/home/SocialMedia";

export default function Home() {
  return (
    <div className="relative w-screen flex flex-col gap-10 bg-black">
      <div className="relative z-20">
        <Navbar />
      </div>
      <div className="relative z-10 text-white mt-16">
        <MainBanner />
        <SecondBanner />
        <Profile />
        <OurProducts />
        <BrokenDevice />
        <FindUs />
        <SocialMedia />
        <Payments />
      </div>
    </div>
  );
}
