import { MonitorSmartphone } from "lucide-react";

const features = [
  {
    title: "TOP TRACER TECHNOLOGY",
    description: "Experience golf like the pros with real-time shot tracking and analytics",
    stats: [
      { label: "Covered Bays", value: "30" },
      { label: "Game Modes", value: "12+" },
      { label: "Target Greens", value: "8" }
    ],
    amenities: [
      "Virtual Golf Courses",
      "Instant Replay",
      "Performance Data",
      "Mobile Integration"
    ],
    image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "PRACTICE FACILITIES",
    description: "Premium practice areas designed for serious improvement",
    stats: [
      { label: "Grass Tees", value: "15" },
      { label: "Putting Green", value: "10k sqft" },
      { label: "Bunkers", value: "4" }
    ],
    amenities: [
      "Short Game Area",
      "Chipping Green",
      "Practice Bunkers",
      "Approach Area"
    ],
    image: "https://images.unsplash.com/photo-1592919505780-303950717480?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "ADVENTURE GOLF",
    description: "18-hole themed putting course for the whole family",
    stats: [
      { label: "Holes", value: "18" },
      { label: "Water Features", value: "6" },
      { label: "Difficulty Levels", value: "3" }
    ],
    amenities: [
      "Family Friendly",
      "Night Lighting",
      "Event Space",
      "Group Rates"
    ],
    image: "https://images.unsplash.com/photo-1595634200053-c7a0d5f4ddf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
  }
];

export function GolfFeatures() {
  return (
    <>
      {features.map((feature, index) => (
        <section key={index} className={`py-24 ${index % 2 === 0 ? 'bg-black' : 'bg-white/5'}`}>
          <div className="max-w-7xl mx-auto px-8">
            <div className={`grid md:grid-cols-2 gap-16 items-center ${
              index % 2 === 0 ? '' : 'md:grid-flow-dense'
            }`}>
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold">{feature.title}</h2>
                <p className="text-gray-400 text-lg">{feature.description}</p>

                <div className="grid grid-cols-3 gap-8">
                  {feature.stats.map((stat, i) => (
                    <div key={i} className="space-y-2">
                      <div className="text-3xl font-bold text-green-400">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {feature.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-green-500 rounded-full" />
                      <span className="text-gray-300">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`relative ${index % 2 === 0 ? '' : 'md:col-start-1'}`}>
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-lg object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-600 p-6 rounded-lg">
                  <MonitorSmartphone className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}