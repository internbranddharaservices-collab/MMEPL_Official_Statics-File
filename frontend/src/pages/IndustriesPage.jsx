import React from "react";
import PageHero from "../components/PageHero";
import Industries from "../components/Industries";
import ExpertiseStrip from "../components/ExpertiseStrip";
import CTA from "../components/CTA";
import { IMAGES } from "../content";

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        kicker="Industries We Serve"
        title="Innovation has no limits"
        subtitle="Our expertise spans a wide spectrum of India's heavy industry, integrating quality engineering with disciplined execution."
        image={IMAGES.serviceChemical}
        crumbs={[{ label: "Industries" }]}
      />
      <Industries />
      <ExpertiseStrip />
      <CTA />
    </>
  );
}
