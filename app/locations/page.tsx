"use client";

import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const areas = [
  "Woodinville",
  "Bothell",
  "Kirkland",
  "Redmond",
  "Mill Creek",
  "Kenmore",
  "Duvall",
  "Monroe"
];

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AREAS WE SERVE</h1>
          <p className="text-gray-400 text-lg">
            Conveniently located in Woodinville, serving the greater Eastside community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <Card className="bg-white/5 border-white/10 p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-full bg-blue-500/10">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">SERVICE AREAS</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {areas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-blue-500 rounded-full" />
                    <span className="text-gray-300">{area}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          <div className="aspect-square rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2684.925528067669!2d-122.15!3d47.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDQzJzQ4LjAiTiAxMjLCsDA5JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400">
            Our central location makes WSC easily accessible from all major Eastside
            communities. Contact us for detailed directions or transportation options.
          </p>
        </div>
      </div>
    </main>
  );
}