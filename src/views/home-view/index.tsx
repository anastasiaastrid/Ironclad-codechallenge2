import HeroSection from "./home-section/HeroSection";
import CompanyOverview from "./home-section/CompanyOverview";
import Product from "@/app/product/page";
import CompanyHistory from "../about-view/about-section/CompanyHistory";
import TestimonialsPage from "./home-section/TestimonialSection";
import Head from "next/head";

<Head>
  <title>Ironclad Watch</title>
</Head>;

function HomeView() {
  return (
    <div>
      <HeroSection />
      <CompanyOverview />
      <Product />
      <CompanyHistory />
      <TestimonialsPage />
    </div>
  );
}

export default HomeView;
