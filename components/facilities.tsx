import { Card } from "@/components/ui/card";
import Link from "next/link";

const facilities = [
  {
    name: "TENNIS",
    description: "World-class courts and elite coaching",
    features: ["8 Indoor Courts", "1 Clay Court", "Pro Coaching", "Youth Programs"],
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    link: "/tennis"
  },
  {
    name: "GOLF",
    description: "Premium practice with Top Tracer",
    features: ["30 Top Tracer Bays", "15k sqft Practice Area", "PGA Pros", "Adventure Golf"],
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    link: "/golf"
  },
  {
    name: "FITNESS",
    description: "Modern equipment, personal space",
    features: ["Premium Equipment", "Personal Training", "Group Classes", "Recovery Zone"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    link: "/fitness"
  },
  {
    name: "PICKLEBALL",
    description: "Historic dome, modern game",
    features: ["6 Indoor Courts", "All Skill Levels", "Social Events", "Tournaments"],
    image: "https://images.unsplash.com/photo-1621834147367-a4b6b341f2b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    link: "/pickleball"
  }
];

export function Facilities() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-sm tracking-widest text-blue-400">
            OUR FACILITIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            WORLD-CLASS
            <br />
            AMENITIES
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <Link
              key={index}
              href={facility.link}
              className="group block"
            >
              <Card className="bg-black/40 backdrop-blur-sm border-white/10 hover:border-blue-500 transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full aspect-video object-cover transition-transform duration-700
                      group-hover:scale-105"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                    {facility.name}
                  </h3>
                  <p className="text-gray-300">{facility.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {facility.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-500 rounded-full" />
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}