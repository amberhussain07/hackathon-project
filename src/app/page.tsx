

import CarCategories from "./components/PopularCar";
// import CarCategory from "./components/CarCategories";
import HeroSection from "./components/HeroSection";
import PickDropform from "./components/PickDropform";
import RecommendationCar from "./components/RecommendationCar";
import PopularCar from "./components/PopularCar";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PickDropform />
      <PopularCar />
      <RecommendationCar />
    </div>
  );
}
