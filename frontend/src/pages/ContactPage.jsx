import React from "react";
import PageHero from "../components/PageHero";
import Contact from "../components/Contact";
import { IMAGES } from "../content";

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get In Touch"
        title="Let's discuss your next project"
        subtitle="Reach out to our team — we'd be glad to understand your requirement and explore how MME can deliver."
        image={IMAGES.about}
        crumbs={[{ label: "Contact" }]}
      />
      <Contact />
    </>
  );
}
