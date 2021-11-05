import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Hosting from "../components/Hosting";
import Footer from "../components/Footer";
import { live, discover } from "../data";
import { useState } from "react";

export default function Home() {
  const [exploreClicked, setExploreClicked] = useState(false);

  return (
    <>
      <Header exploreClicked={exploreClicked} />

      <main>
        <Hero setExploreClicked={clicked => setExploreClicked(clicked)} />
        <Explore />
        <Banner />
        {/* <Cards {...live} />
        <Cards {...discover} />
        <Hosting /> */}
      </main>

      {/* <Footer /> */}
    </>
  );
}
