import React from "react";
import PageHero from "../components/PageHero";
import Careers from "../components/Careers";
import WhyMME from "../components/WhyMME";
import { IMAGES } from "../content";

export default function CareersPage() {
  return (
    <>
      <PageHero
        kicker="Careers at MME"
        title="Your next opportunity starts here"
        subtitle="We continuously seek passionate engineers and skilled professionals to join a culture of growth, collaboration and excellence."
        image={IMAGES.careers}
        crumbs={[{ label: "Careers" }]}
      />
      <Careers />
      <WhyMME />
    </>
  );
}
