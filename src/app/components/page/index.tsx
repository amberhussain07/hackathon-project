import CarCategories from "../PopularCar";

import HeroSection from "../HeroSection";
import PickDropform from "../PickDropform";
import RecommendationCar from "../RecommendationCar";
import PopularCar from "../PopularCar";

 export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <PickDropform />
      <PopularCar/>
      <HeroSection />
      <RecommendationCar />
    </div>
  );
}
