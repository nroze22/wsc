"use client";

import { ShieldCheck, Users, Spray, ThermometerSun } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function CovidPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">COVID-19 GUIDELINES</h1>
          <p className="text-gray-400 text-lg">
            WSC is committed to providing a safe environment for our members and staff.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "SAFETY MEASURES",
              items: [
                "Enhanced cleaning protocols",
                "Hand sanitizing stations",
                "Air filtration systems",
                "Regular facility sanitization"
              ]
            },
            {
              icon: Users,
              title: "FACILITY PROTOCOLS",
              items: [
                "Follow local health guidelines",
                "Maintain social distancing",
                "Mask requirements as posted",
                "Capacity monitoring"
              ]
            },
            {
              icon: Spray,
              title: "CLEANING PROCEDURES",
              items: [
                "Hourly high-touch cleaning",
                "Daily deep cleaning",
                "Equipment sanitization",
                "UV light treatment"
              ]
            },
            {
              icon: ThermometerSun,
              title: "HEALTH SCREENING",
              items: [
                "Stay home if symptomatic",
                "Temperature checks",
                "Health questionnaire",
                "Contact tracing"
              ]
            }
          ].map((section, index) => (
            <Card key={index} className="bg-white/5 border-white/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-blue-500/10">
                  <section.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">{section.title}</h3>
              </div>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-blue-500 rounded-full" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-16">
          <p className="text-gray-400">
            Guidelines are updated regularly in accordance with local health department
            recommendations and CDC guidelines.
          </p>
        </div>
      </div>
    </main>
  );
}