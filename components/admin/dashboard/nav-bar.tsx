import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavBarProps {
  onLogout: () => void;
}

export function NavBar({ onLogout }: NavBarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">WSC Manager</h1>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onLogout}
            className="text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}