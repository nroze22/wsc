"use client";

import { useState } from "react";
import { Upload, Image as ImageIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface AdminImageUploaderProps {
  images: File[];
  onChange: (images: File[]) => void;
}

export function AdminImageUploader({ images, onChange }: AdminImageUploaderProps) {
  const [previews, setPreviews] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => file.type.startsWith("image/"));

    if (validFiles.length !== files.length) {
      toast.error("Some files were not images and were ignored");
    }

    onChange([...images, ...validFiles]);
    
    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <ImageIcon className="w-5 h-5" />
        <span className="font-medium">Upload Images</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {previews.map((preview, index) => (
          <div key={index} className="relative group">
            <img
              src={preview}
              alt={`Upload ${index + 1}`}
              className="w-full aspect-square object-cover rounded-lg"
            />
            <button
              onClick={() => removeImage(index)}
              className="absolute top-2 right-2 p-1 bg-red-500 rounded-full
                opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        <label className="cursor-pointer">
          <div className="border-2 border-dashed border-white/20 rounded-lg
            aspect-square flex flex-col items-center justify-center gap-2
            hover:border-blue-400 transition-colors">
            <Upload className="w-6 h-6" />
            <span className="text-sm">Upload Image</span>
          </div>
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
      </div>
    </div>
  );
}