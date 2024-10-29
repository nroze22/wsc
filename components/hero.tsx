import { Star, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuickStats } from "@/components/quick-stats";

export function Hero() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Woodinville Sports Club Facilities"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
      </div>

      <div className="relative h-full flex flex-col justify-center px-8 md:px-16">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2 text-blue-400">
            <Star className="w-5 h-5" />
            <span className="text-sm tracking-widest">ESTABLISHED 1975</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-none">
            ELEVATE
            <br />
            YOUR GAME
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl">
            Tennis. Golf. Fitness. Pickleball. Join Woodinville's premier 
            multi-sport facility and community.
          </p>

          <div className="pt-8 flex flex-wrap gap-6">
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full bg-white text-black 
                hover:text-white transition-colors duration-500"
            >
              <span className="relative z-10 flex items-center gap-2">
                BECOME A MEMBER
                <ChevronRight className="w-5 h-5 transform transition-transform 
                  group-hover:translate-x-1" />
              </span>
              <div
                className="absolute inset-0 bg-blue-600 transform translate-y-full
                  group-hover:translate-y-0 transition-transform duration-500"
              />
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