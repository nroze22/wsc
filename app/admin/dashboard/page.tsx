'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Editor } from '@/components/admin/dashboard/editor';
import { processAIRequest } from '@/lib/admin/ai';
import { AdminAuth } from '@/components/admin/auth';

export default function DashboardPage() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('wsc_admin');
    router.push('/admin');
  };

  const handleSubmit = async (data: { page: string; section: string; prompt: string }) => {
    if (!localStorage.getItem('wsc_gpt_key')) {
      toast.error('Please set up your OpenAI API key in settings first');
      return;
    }

    setIsProcessing(true);
    try {
      const response = await processAIRequest(data.prompt, data.page, data.section);
      
      if (response.suggestions?.length) {
        response.suggestions.forEach(suggestion => {
          toast.info(suggestion);
        });
      }

      if (response.warnings?.length) {
        response.warnings.forEach(warning => {
          toast.warning(warning);
        });
      }

      if (response.followUpQuestions?.length) {
        response.followUpQuestions.forEach(question => {
          toast(question, {
            action: {
              label: 'Yes',
              onClick: () => console.log('Answered yes to:', question)
            }
          });
        });
      }

      toast.success('Changes processed successfully');
    } catch (error) {
      toast.error('Failed to process changes');
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <AdminAuth>
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">WSC Manager</h1>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                onClick={() => router.push('/admin/settings')}
                className="text-white border-white/10 hover:bg-white/10"
              >
                Settings
              </Button>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="text-white border-white/10 hover:bg-white/10"
              >
                Logout
              </Button>
            </div>
          </div>

          <Editor onSubmit={handleSubmit} isProcessing={isProcessing} />
        </div>
      </div>
    </AdminAuth>
  );
}