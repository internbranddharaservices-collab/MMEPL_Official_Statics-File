import React from "react";
import PageHero from "../components/PageHero";
import Clients from "../components/Clients";
import Certifications from "../components/Certifications";
import CTA from "../components/CTA";
import { IMAGES } from "../content";

export default function ClientsPage() {
  return (
    <>
      <PageHero
        kicker="Clients & Achievements"
        title="Trusted by India's industry leaders"
        subtitle="We are proud to have partnered with some of the most respected names in cement, steel, power and infrastructure."
        image={IMAGES.expertise[2]}
        crumbs={[{ label: "Clients" }]}
      />
      <Clients />
      <Certifications />
      <CTA />
    </>
  );
}
