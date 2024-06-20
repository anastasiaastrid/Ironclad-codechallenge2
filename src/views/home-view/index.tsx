import HeroSection from "./home-section/HeroSection";
import CompanyOverview from "../about-view/about-section/CompanyOverview";
import SignatureEdition from "../products-view/signatureedition";
import CompanyHistory from "../about-view/about-section/CompanyHistory";
import TestimonialsPage from "./home-section/TestimonialSection";
import Head from "next/head";
import CompanyCulture from "../about-view/about-section/CompanyCulture";

<Head>
  <title>Ironclad Watch</title>
  <link rel="preload" href="/fonts/ZenDots-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
  <link rel="preload" href="/fonts/BakbakOne-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
</Head>;

function HomeView() {
  return (
    <div>
      <HeroSection />
      <CompanyOverview />
      <SignatureEdition />
      <CompanyHistory />
      <CompanyCulture />
      <TestimonialsPage />
    </div>
  );
}

export default HomeView;
