import Home from "./home/page";
// import dynamic from "next/dynamic";

// const Home = dynamic(() => import("./home/page"));
// const About = dynamic(() => import("./about/page"));
// const ProductSection = dynamic(() => import("../views/home-view/home-section/ProductsSection"));

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Home />
    </main>
  );
}
