'use client';

import { useState } from 'react';
import { 
  PencilLine, 
  ImageIcon, 
  Eye, 
  Loader2,
  MessageSquare,
  Lightbulb,
  Layout 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ImageLibrary } from '@/components/admin/image-library';
import { LivePreview } from '@/components/admin/live-preview';
import { pages } from '@/lib/admin/config';

interface EditorProps {
  onSubmit: (data: { page: string; section: string; prompt: string }) => Promise<void>;
  isProcessing: boolean;
}

export function Editor({ onSubmit, isProcessing }: EditorProps) {
  const [selectedPage, setSelectedPage] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [prompt, setPrompt] = useState('');
  const [showImageLibrary, setShowImageLibrary] = useState(false);
  const [showLivePreview, setShowLivePreview] = useState(false);

  const selectedPageConfig = pages.find(p => p.id === selectedPage);

  const handleSubmit = () => {
    if (!selectedPage || !selectedSection || !prompt) return;
    onSubmit({
      page: selectedPage,
      section: selectedSection,
      prompt
    });
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="space-y-8">
        <Card className="bg-black border-white/10 p-8">
          <div className="flex items-center gap-4 mb-8">
            <Layout className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl font-bold text-white">Content Editor</h2>
          </div>

          <div className="space-y-6">
            <div>
              <Select value={selectedPage} onValueChange={setSelectedPage}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Select page to edit" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/10">
                  {pages.map((page) => (
                    <SelectItem 
                      key={page.id} 
                      value={page.id}
                      className="text-white hover:bg-white/10"
                    >
                      {page.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedPage && (
              <div>
                <Select value={selectedSection} onValueChange={setSelectedSection}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Select section to update" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-white/10">
                    {selectedPageConfig?.sections.map((section) => (
                      <SelectItem 
                        key={section.id} 
                        value={section.id}
                        className="text-white hover:bg-white/10"
                      >
                        {section.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedSection && selectedPageConfig?.sections.find(s => s.id === selectedSection)?.description && (
                  <p className="mt-2 text-sm text-gray-400">
                    {selectedPageConfig.sections.find(s => s.id === selectedSection)?.description}
                  </p>
                )}
              </div>
            )}

            <div>
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the changes you want to make..."
                className="min-h-[200px] bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => setShowImageLibrary(true)}
                className="flex-1 border-white/10 text-white hover:bg-white/10"
              >
                <ImageIcon className="w-4 h-4 mr-2" />
                Image Library
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowLivePreview(true)}
                className="flex-1 border-white/10 text-white hover:bg-white/10"
              >
                <Eye className="w-4 h-4 mr-2" />
                Live Preview
              </Button>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={isProcessing || !prompt || !selectedPage || !selectedSection}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                "Process Changes"
              )}
            </Button>
          </div>
        </Card>

        {showImageLibrary && (
          <ImageLibrary
            onClose={() => setShowImageLibrary(false)}
            onSelect={(image) => {
              setPrompt(prev => `${prev}\nUse image: ${image.url}`);
              setShowImageLibrary(false);
            }}
          />
        )}

        {showLivePreview && selectedPage && selectedSection && (
          <LivePreview
            page={selectedPage}
            section={selectedSection}
            changes={prompt}
            onClose={() => setShowLivePreview(false)}
          />
        )}
      </div>

      <div className="space-y-8">
        <Card className="bg-black border-white/10 p-8">
          <div className="flex items-center gap-4 mb-8">
            <Eye className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl font-bold text-white">Preview</h2>
          </div>

          <div className="aspect-video bg-white/5 rounded-lg mb-6">
            {selectedPage && selectedSection && (
              <iframe
                src={`/${selectedPage}#${selectedSection}`}
                className="w-full h-full rounded-lg"
              />
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <PencilLine className="w-4 h-4" />
              <span>Proposed Changes</span>
            </div>
            <pre className="bg-white/5 rounded-lg p-4 text-sm text-gray-300 overflow-auto">
              {prompt || "No changes proposed yet"}
            </pre>
          </div>
        </Card>

        <Card className="bg-black border-white/10 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-yellow-400" />
            <h3 className="font-medium text-white">AI Suggestions</h3>
          </div>
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full justify-start text-left border-white/10 text-white hover:bg-white/10"
              onClick={() => setPrompt(prev => `${prev}\nUpdate the hero image to be more dynamic`)}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Suggest a more dynamic hero image
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start text-left border-white/10 text-white hover:bg-white/10"
              onClick={() => setPrompt(prev => `${prev}\nAdd a call-to-action button`)}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Add a prominent call-to-action
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}