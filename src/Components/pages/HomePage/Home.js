import React from "react";
import Pricing from "../../Pricing";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} id='1' />
      <HeroSection {...homeObjThree} id='2' />
      <HeroSection {...homeObjTwo} id='3' />
      <HeroSection {...homeObjFour} id='4' />
      <Pricing/>
      <Footer/>
    </>
  );
}

export default Home;
