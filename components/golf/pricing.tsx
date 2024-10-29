import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    type: "PRIVATE LESSONS",
    price: "$95",
    duration: "per hour",
    features: [
      "One-on-One Instruction",
      "Video Analysis",
      "Custom Practice Plan",
      "Progress Tracking"
    ]
  },
  {
    type: "GROUP CLINICS",
    price: "$45",
    duration: "per session",
    features: [
      "Small Group Setting",
      "Themed Sessions",
      "All Skill Levels",
      "Equipment Provided"
    ]
  },
  {
    type: "PRACTICE PASS",
    price: "$199",
    duration: "per month",
    features: [
      "Unlimited Bay Time",
      "Top Tracer Access",
      "Club Storage",
      "Member Events"
    ]
  }
];

export function GolfPricing() {
  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-black p-8 rounded-lg border border-white/10
              hover:border-green-500 transition-colors duration-300">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">{program.type}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-green-400">{program.price}</span>
                  <span className="text-gray-400">{program.duration}</span>
                </div>
                <ul className="space-y-4">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Plus className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full border border-white/30 rounded-full
                    hover:bg-green-600 hover:border-green-600"
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}