import { Hero } from "../components/Hero";
import { ServicesRow } from "../components/ServicesRow";
import { BeenThere } from "../components/BeenThere";
import { MoreThanStudio } from "../components/MoreThanStudio";
import { TalentSection } from "../components/TalentSection";
import { WhatWeDo } from "../components/WhatWeDo";

export function HomePage() {
  return (
    <>
      <Hero />
      <TalentSection />
      <ServicesRow />
      <BeenThere />
      <MoreThanStudio />
      <WhatWeDo />
    </>
  );
}
