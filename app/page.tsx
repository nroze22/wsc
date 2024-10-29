"use client";

import { Hero } from "@/components/hero";
import { Facilities } from "@/components/facilities";
import { LoadingScreen } from "@/components/loading-screen";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <LoadingScreen isLoading={isLoading} />
      <Hero />
      <Facilities />
    </main>
  );
}