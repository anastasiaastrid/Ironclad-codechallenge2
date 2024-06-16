import HomeView from "@/views/home-view";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Home - Ironclad Watches - Timeless Toughness",
  description: "Luxury watches in Indonesia",
};

function Home() {
  return (
    <div>
      <HomeView />
    </div>
  );
}

export default Home;
