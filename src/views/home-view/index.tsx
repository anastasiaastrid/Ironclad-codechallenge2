import HeroSection from "./home-section/HeroSection";
import CompanyOverview from "./home-section/CompanyOverview";
import Product from "@/app/product/page";
import CompanyHistory from "../about-view/about-section/CompanyHistory";

function HomeView() {
  return (
    <div>
      <HeroSection />
      <CompanyOverview />
      <Product />
      <CompanyHistory />
    </div>
  );
}

export default HomeView;
