const features = [
  {
    title: "INDOOR COURTS",
    description: "State-of-the-art indoor tennis facilities for year-round play",
    details: [
      "Climate controlled environment",
      "Professional lighting",
      "Premium court surfaces",
      "Spacious court spacing"
    ],
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "CLAY COURT",
    description: "Experience the unique challenge of clay court tennis",
    details: [
      "Professional maintenance",
      "Authentic clay surface",
      "Reduced joint stress",
      "Enhanced sliding play"
    ],
    image: "https://images.unsplash.com/photo-1622163642998-1ea3a9daa2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
  }
];

export function TennisFacilities() {
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
            COURTS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full aspect-video object-cover transition-transform duration-700
                    group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-500 rounded-full" />
                        <span className="text-gray-400">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}