import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { Airpods } from "@/components/home/Airpods";;
import { MainBanner } from "@/components/home/MainBanner";
import { Payments } from "@/components/home/Payments";
import { Profile } from "@/components/home/Profile";
import { SecondBanner } from "@/components/home/SecondBanner";
import { SocialMedia } from "@/components/home/SocialMedia";

export default function Home() {
  return (
    <div className="relative w-screen flex flex-col gap-10 pt-24 bg-black">
      <div className="relative z-20">
        <Navbar />
      </div>
      <div className="relative z-10 text-white">
        <MainBanner />
      </div>
      <div className="relative z-10 text-white">
        <SecondBanner />
      </div>
      <div className="relative z-10 text-white">
        <Profile />
      </div>
      <div className="relative z-10 text-white">
        <SocialMedia />
      </div>
      <div className="relative z-10 text-white">
        <Payments />
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
