const coaches = [
  {
    name: "MIKE THOMPSON",
    title: "HEAD GOLF PROFESSIONAL",
    certifications: "PGA Class A Professional",
    specialties: ["Swing Analysis", "Course Management", "Mental Game"],
    image: "https://images.unsplash.com/photo-1594974181690-ad7c455e4a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
  },
  {
    name: "SARAH CHEN",
    title: "SENIOR INSTRUCTOR",
    certifications: "LPGA Teaching Professional",
    specialties: ["Junior Development", "Short Game", "Club Fitting"],
    image: "https://images.unsplash.com/photo-1594974181498-9f61c89b7de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
  },
  {
    name: "JAMES WILSON",
    title: "PERFORMANCE COACH",
    certifications: "TPI Certified",
    specialties: ["Power Development", "Biomechanics", "Technology"],
    image: "https://images.unsplash.com/photo-1594974181635-84d9f3f12d3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
  }
];

export function GolfCoaching() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <span className="text-sm tracking-widest text-green-400">THE EXPERTS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            PGA CERTIFIED
            <br />
            INSTRUCTION
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 rounded-lg">
                <img 
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover transition-transform duration-700
                    group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{coach.name}</h3>
                <div className="text-green-400">{coach.title}</div>
                <div className="text-sm text-gray-400">{coach.certifications}</div>
                <ul className="space-y-2">
                  {coach.specialties.map((specialty, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1 h-1 bg-green-500 rounded-full" />
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}