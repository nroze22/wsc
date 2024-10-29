"use client";

import { useState } from "react";
import { X, Upload, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface Image {
  id: string;
  url: string;
  name: string;
  category: string;
}

interface ImageLibraryProps {
  onClose: () => void;
  onSelect: (image: Image) => void;
}

const SAMPLE_IMAGES: Image[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    name: "Fitness Center",
    category: "Facilities"
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8",
    name: "Tennis Courts",
    category: "Tennis"
  },
  // Add more sample images
];

export function ImageLibrary({ onClose, onSelect }: ImageLibraryProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredImages = SAMPLE_IMAGES.filter(image => 
    (category === "all" || image.category === category) &&
    (image.name.toLowerCase().includes(search.toLowerCase()) ||
     image.category.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <Card className="fixed inset-8 bg-black border-white/10 overflow-auto z-50">
      <div className="sticky top-0 bg-black border-b border-white/10 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Image Library</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search images..."
              className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
            />
          </div>
          <Button
            variant="outline"
            className="border-white/10 text-white hover:bg-white/10"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <button
              key={image.id}
              onClick={() => onSelect(image)}
              className="group relative aspect-square rounded-lg overflow-hidden"
            >
              <img
                src={image.url}
                alt={image.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">Select Image</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
}