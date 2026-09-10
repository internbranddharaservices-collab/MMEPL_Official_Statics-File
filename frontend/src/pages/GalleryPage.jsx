import React from "react";
import PageHero from "../components/PageHero";
import Gallery from "../components/Gallery";
import CTA from "../components/CTA";
import { IMAGES } from "../content";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="Our Gallery"
        title="A closer look at our work"
        subtitle="Moments from our sites across India — fabrication, erection, plant construction and mechanical works."
        image={IMAGES.expertise[1]}
        crumbs={[{ label: "Gallery" }]}
      />
      <Gallery />
      <CTA />
    </>
  );
}
