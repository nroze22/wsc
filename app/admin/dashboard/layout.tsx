import { Inter } from 'next/font/google';
import '../../globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.className} min-h-screen bg-black text-white`}>
      {children}
    </div>
  );
}