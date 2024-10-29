'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock } from 'lucide-react';

export function LoginForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'WSC_2024_NW') {
      localStorage.setItem('wsc_admin', 'true');
      router.push('/admin/dashboard');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <Card className="w-full max-w-md bg-black border border-white/10 p-8">
      <div className="flex items-center gap-2 mb-6">
        <Lock className="w-5 h-5 text-blue-400" />
        <h1 className="text-xl font-bold text-white">WSC Manager</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/5 border-white/10 text-white"
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Login
        </Button>
      </form>
    </Card>
  );
}