export function QuickStats() {
  const stats = [
    { value: "30", label: "Top Tracer Bays" },
    { value: "15k", label: "Square Feet Practice Area" },
    { value: "18", label: "Holes Adventure Golf" },
    { value: "6", label: "PGA Professionals" }
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}