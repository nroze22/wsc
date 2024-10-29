const programs = [
  {
    title: "YOUTH DEVELOPMENT",
    description: "Comprehensive junior programs for all skill levels",
    features: [
      "Age-appropriate instruction",
      "Progressive development",
      "Tournament preparation",
      "Team competitions"
    ],
    image: "https://images.unsplash.com/photo-1588453251771-cd919b362ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "ADULT PROGRAMS",
    description: "Group and private lessons for continuous improvement",
    features: [
      "Skill-based groups",
      "Strategy sessions",
      "Cardio tennis",
      "Social events"
    ],
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
  }
];

export function TennisPrograms() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-sm tracking-widest text-blue-400">
            TENNIS PROGRAMS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            DEVELOP YOUR
            <br />
            SKILLS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full aspect-video object-cover transition-transform duration-700
                    group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{program.title}</h3>
                <p className="text-gray-400">{program.description}</p>
                <ul className="grid grid-cols-2 gap-4">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-500 rounded-full" />
                      <span className="text-gray-300">{feature}</span>
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