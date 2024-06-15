import AboutView from "@/views/about-view";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About - Ironclad Watches - Built to Endure",
  description: "Luxury watches in Indonesia",
};

function About() {
  return (
    <div>
      <AboutView />
    </div>
  );
}

export default About;
