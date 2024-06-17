import HeroSection from "./home-section/HeroSection";
import CompanyOverview from "../about-view/about-section/CompanyOverview";
import SignatureEdition from "../products-view/signatureedition";
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
      <SignatureEdition/>
      <CompanyHistory />
      <TestimonialsPage />
    </div>
  );
}

export default HomeView;
