import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">WSC</Link>
          <div className="flex items-center gap-8">
            <Link href="/book" className="text-sm tracking-wider text-white hover:text-blue-400 transition-colors">
              BOOK A VISIT
            </Link>
            <button className="text-white hover:text-blue-400 transition-colors">
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}