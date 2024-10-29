export function QuickStats() {
  const stats = [
    { value: "48", label: "Years of Excellence" },
    { value: "4", label: "Premium Facilities" },
    { value: "150+", label: "Weekly Classes" },
    { value: "2000+", label: "Active Members" },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
            <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}