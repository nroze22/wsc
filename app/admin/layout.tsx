import { Toaster } from 'sonner';
import '../globals.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      {children}
      <Toaster />
    </div>
  );
}