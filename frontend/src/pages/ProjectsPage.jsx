import React from "react";
import PageHero from "../components/PageHero";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import { IMAGES } from "../content";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        kicker="Our Portfolio"
        title="Crafting the future, across India"
        subtitle="A portfolio built on trust and delivery — spanning marquee cement, power, steel and oil & gas mandates for India's most respected industrial names."
        image={IMAGES.expertise[0]}
        crumbs={[{ label: "Projects" }]}
      />
      <Projects />
      <CTA />
    </>
  );
}
