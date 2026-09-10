import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import ExpertiseStrip from "../components/ExpertiseStrip";
import Services from "../components/Services";
import Industries from "../components/Industries";
import Projects from "../components/Projects";
import WhyMME from "../components/WhyMME";
import Director from "../components/Director";
import Clients from "../components/Clients";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <ExpertiseStrip />
      <Services />
      <Industries />
      <Projects preview />
      <WhyMME />
      <Director />
      <Clients />
      <CTA />
    </>
  );
}
