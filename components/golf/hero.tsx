import { Target, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuickStats } from "./quick-stats";

export function GolfHero() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Golf Facility"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>

      <div className="relative h-screen flex flex-col justify-center px-8 md:px-16">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2 text-green-400">
            <Target className="w-5 h-5" />
            <span className="text-sm tracking-widest">WSC GOLF</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-none">
            ELEVATE
            <br />
            YOUR GAME
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            Premier practice facility featuring Top Tracer technology, 
            professional instruction, and complete short game area.
          </p>

          <div className="flex flex-wrap gap-6 pt-8">
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full bg-white text-black 
                hover:text-white transition-colors duration-500"
            >
              <span className="relative z-10 flex items-center gap-2">
                BOOK A BAY
                <ChevronRight className="w-5 h-5 transform transition-transform 
                  group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-green-600 transform translate-y-full
                group-hover:translate-y-0 transition-transform duration-500" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white/30 hover:bg-white/10"
            >
              TAKE A TOUR
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <QuickStats />
    </section>
  );
}