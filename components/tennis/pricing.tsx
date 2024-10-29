import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricing = [
  {
    type: "SINGLES",
    price: "$58",
    duration: "90 minutes",
    features: [
      "Full Court Access",
      "Equipment Rental Available",
      "Locker Room Access",
      "Online Booking"
    ]
  },
  {
    type: "DOUBLES",
    price: "$68",
    duration: "90 minutes",
    features: [
      "Full Court Access",
      "Equipment Rental Available",
      "Locker Room Access",
      "Online Booking"
    ]
  },
  {
    type: "ACCESS PASS",
    price: "$120",
    duration: "annual",
    features: [
      "7-Day Advance Booking",
      "No Guest Fees",
      "Member Rates",
      "Priority Access"
    ]
  }
];

export function TennisPricing() {
  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-sm tracking-widest text-blue-400">
            COURT BOOKINGS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            FLEXIBLE
            <br />
            PRICING
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((option, index) => (
            <div key={index} className="bg-black p-8 rounded-lg border border-white/10
              hover:border-blue-500 transition-colors duration-300">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">{option.type}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-blue-400">{option.price}</span>
                  <span className="text-gray-400">{option.duration}</span>
                </div>
                <ul className="space-y-4">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Plus className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full border border-white/30 rounded-full
                    hover:bg-blue-600 hover:border-blue-600"
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