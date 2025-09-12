import ApartmentTypes from "./Home/ApartmentType/ApartmentTypes";
import BuyOrSell from "./Home/BuyOrSell/BuyOrSell";
import ExploreApartmentTypes from "./Home/ExploreApartmentTypes/ExploreApartmentTypes";
import Features from "./Home/Features/Features";
import HeroSection from "./Home/Hero/HeroSection";
import OurBestDeals from "./Home/OurBestDeals/OurBestDeals";
import PeopleLove from "./Home/PeopleLove/PeopleLove";
import RealTor from "./Home/RealTor/RealTor";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <ApartmentTypes />
      <RealTor />
      <ExploreApartmentTypes />
      <BuyOrSell />
      <PeopleLove />
      <OurBestDeals />
    </div>
  );
}
