import ApartmentTypes from "./Home/ApartmentType/ApartmentTypes";
import Features from "./Home/Features/Features";
import HeroSection from "./Home/Hero/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <ApartmentTypes />
    </div>
  );
}
