"use client";

import { TennisHero } from "@/components/tennis/hero";
import { TennisFacilities } from "@/components/tennis/facilities";
import { TennisPricing } from "@/components/tennis/pricing";
import { TennisPrograms } from "@/components/tennis/programs";
import { TennisCTA } from "@/components/tennis/cta";

export default function TennisPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-24">
      <TennisHero />
      <TennisFacilities />
      <TennisPrograms />
      <TennisPricing />
      <TennisCTA />
    </main>
  );
}