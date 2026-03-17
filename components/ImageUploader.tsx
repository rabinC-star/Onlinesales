"use client";

import Image from "next/image";
import { UploadCloud, X } from "lucide-react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";

interface ImageUploaderProps {
  previews: string[];
  onFilesSelected: (files: FileList | null) => void;
  onRemoveImage: (index: number) => void;
}

export function ImageUploader({ previews, onFilesSelected, onRemoveImage }: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    onFilesSelected(event.dataTransfer.files);
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-slate-700">Images</p>
      <div
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
        className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center"
      >
        <UploadCloud className="mx-auto mb-2 h-8 w-8 text-slate-500" />
        <p className="text-sm text-slate-600">Drag & drop images here or click to upload</p>
        <Button type="button" variant="outline" className="mt-3" onClick={() => inputRef.current?.click()}>
          Choose files
        </Button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={(event) => onFilesSelected(event.target.files)}
          className="hidden"
        />
      </div>

      {!!previews.length && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {previews.map((preview, index) => (
            <div key={`${preview}-${index}`} className="group relative overflow-hidden rounded-xl border border-slate-200">
              <div className="relative aspect-square">
                <Image src={preview} alt={`Upload preview ${index + 1}`} fill className="object-cover" />
              </div>
              <button
                type="button"
                onClick={() => onRemoveImage(index)}
                className="absolute right-2 top-2 rounded-full bg-white/90 p-1 text-slate-700 shadow"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
