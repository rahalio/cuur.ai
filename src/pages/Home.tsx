import React from "react";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Stats } from "../components/Stats";
import { Testimonials } from "../components/Testimonials";
import { FootHero } from "../components/FootHero";

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <FootHero />
    </>
  );
}
