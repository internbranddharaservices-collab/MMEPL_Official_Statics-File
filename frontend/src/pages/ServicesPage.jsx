import React from "react";
import PageHero from "../components/PageHero";
import Services from "../components/Services";
import ExpertiseStrip from "../components/ExpertiseStrip";
import CTA from "../components/CTA";
import { IMAGES } from "../content";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="What We Do"
        title="Complete engineering solutions"
        subtitle="From cement and power to steel, chemical and balance-of-plant — every mandate delivered with precision, discipline and uncompromising quality."
        image={IMAGES.serviceCement}
        crumbs={[{ label: "Services" }]}
      />
      <Services />
      <ExpertiseStrip />
      <CTA />
    </>
  );
}
