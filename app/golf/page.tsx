"use client";

import { GolfHero } from "@/components/golf/hero";
import { GolfFeatures } from "@/components/golf/features";
import { GolfCoaching } from "@/components/golf/coaching";
import { GolfPricing } from "@/components/golf/pricing";
import { GolfCTA } from "@/components/golf/cta";

export default function GolfPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-24">
      <GolfHero />
      <GolfFeatures />
      <GolfCoaching />
      <GolfPricing />
      <GolfCTA />
    </main>
  );
}