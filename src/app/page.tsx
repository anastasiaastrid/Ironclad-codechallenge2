import Home from "./home/page";
import Head from "next/head";
// import dynamic from "next/dynamic";

// const Home = dynamic(() => import("./home/page"));
// const About = dynamic(() => import("./about/page"));
// const ProductSection = dynamic(() => import("../views/home-view/home-section/ProductsSection"));

<Head>
  <title>Ironclad Watch</title>
</Head>;

export default function Dashboard() {
  return (
    <main>
      <Home />
    </main>
  );
}
