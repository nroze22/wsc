"use client";

import { cn } from "@/lib/utils";

interface MainNavProps {
  isOpen: boolean;
}

export function MainNav({ isOpen }: MainNavProps) {
  return (
    <nav
      className={cn(
        "fixed inset-0 top-[73px] bg-gradient-to-b from-black via-black to-black/95 backdrop-blur-sm transform transition-all duration-500 ease-in-out",
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}
    >
      <div className="h-full flex flex-col items-center justify-center gap-8">
        {[
          { name: "HOME", path: "/" },
          { name: "TENNIS", path: "/tennis" },
          { name: "GOLF", path: "/golf" },
          { name: "FITNESS", path: "/fitness" },
          { name: "PICKLEBALL", path: "/pickleball" },
          { name: "MEMBERSHIP", path: "/membership" },
          { name: "CONTACT", path: "/contact" }
        ].map((item, index) => (
          <a
            key={item.name}
            href={item.path}
            className="relative text-4xl font-bold tracking-wider text-white hover:text-blue-400 transition-all duration-300
              after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 
              after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}