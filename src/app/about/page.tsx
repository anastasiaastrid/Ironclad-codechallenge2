import CompanyOverview from "@/views/about-view/about-section/CompanyHistory";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About - Ironclad Watches - Built to Endure",
  description: "Luxury watches in Indonesia",
};

function About() {
  return (
    <div>
      <CompanyOverview />
    </div>
  );
}

export default About;
