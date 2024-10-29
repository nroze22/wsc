"use client";

import { useState, useEffect } from "react";
import { X, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface LivePreviewProps {
  page: string;
  section: string;
  changes: string;
  onClose: () => void;
}

export function LivePreview({ page, section, changes, onClose }: LivePreviewProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate preview loading
    setTimeout(() => setIsLoading(false), 1500);
  }, [changes]);

  return (
    <Card className="fixed inset-8 bg-black border-white/10 overflow-auto z-50">
      <div className="sticky top-0 bg-black border-b border-white/10 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Live Preview</h2>
            <p className="text-sm text-gray-400">
              Previewing changes to {page} - {section}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setIsLoading(true)}
              className="border-white/10 text-white hover:bg-white/10"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="aspect-video bg-white/5 rounded-lg relative">
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <RefreshCw className="w-8 h-8 text-blue-400 animate-spin" />
            </div>
          ) : (
            <iframe
              src={`/preview/${page}/${section}?changes=${encodeURIComponent(changes)}`}
              className="w-full h-full rounded-lg"
            />
          )}
        </div>
      </div>
    </Card>
  );
}