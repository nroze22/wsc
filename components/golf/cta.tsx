import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GolfCTA() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Golf Sunset"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          READY TO
          <br />
          IMPROVE?
        </h2>
        <Button
          size="lg"
          className="bg-white text-black rounded-full px-12 py-5 
            font-medium tracking-wider text-sm group"
        >
          <span className="flex items-center gap-2">
            BOOK YOUR FIRST SESSION
            <ArrowRight className="w-5 h-5 transform transition-transform 
              group-hover:translate-x-1" />
          </span>
        </Button>
      </div>
    </section>
  );
}