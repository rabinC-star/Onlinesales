"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import { CategorySelect } from "@/components/CategorySelect";
import { ImageUploader } from "@/components/ImageUploader";
import { ListingCard } from "@/components/ListingCard";
import { LocationPicker } from "@/components/LocationPicker";
import { PriceInput } from "@/components/PriceInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { mockUsers } from "@/mock/users";
import type { Listing } from "@/types/listing";
import type { Location } from "@/types/location";

interface CreateListingForm {
  title: string;
  description: string;
}

const categoryOptions = [
  "Furniture",
  "Electronics",
  "Fashion",
  "Gaming",
  "Sports",
  "Music",
  "Office",
  "Outdoors",
  "Kids",
  "Automotive"
];

const defaultLocation: Location = {
  city: "",
  state: "",
  country: "USA",
  lat: 0,
  lng: 0
};

export default function CreateListingPage() {
  const { register, handleSubmit, reset } = useForm<CreateListingForm>({
    defaultValues: {
      title: "",
      description: ""
    }
  });

  const [previewTitle, setPreviewTitle] = useState("");
  const [previewDescription, setPreviewDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState<Location>(defaultLocation);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  function handleFiles(files: FileList | null) {
    if (!files) return;

    const newPreviews = Array.from(files).map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...newPreviews]);
  }

  function removeImage(index: number) {
    setImagePreviews((prev) => prev.filter((_, itemIndex) => itemIndex !== index));
  }

  function onSubmit() {
    // TODO: connect create listing form to Java Spring Boot API endpoint
    reset();
    setPreviewTitle("");
    setPreviewDescription("");
    setPrice(0);
    setCategory("");
    setLocation(defaultLocation);
    setImagePreviews([]);
  }

  const previewListing = useMemo<Listing>(() => {
    return {
      id: "preview",
      title: previewTitle || "Listing title preview",
      description: previewDescription || "Listing description preview",
      price,
      images: imagePreviews.length
        ? imagePreviews
        : [
            "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80"
          ],
      location: {
        city: location.city || "City",
        state: location.state || "State",
        country: location.country || "Country",
        lat: location.lat,
        lng: location.lng
      },
      category: category || "Category",
      createdAt: new Date().toISOString(),
      seller: mockUsers[0]
    };
  }, [previewTitle, previewDescription, price, imagePreviews, location, category]);

  return (
    <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
      <Card>
        <CardHeader>
          <CardTitle>Create Listing</CardTitle>
          <p className="text-sm text-slate-500">UI-only form structure using React Hook Form and placeholder state.</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="What are you selling?"
                {...register("title", {
                  onChange: (event) => setPreviewTitle(event.target.value)
                })}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your item"
                {...register("description", {
                  onChange: (event) => setPreviewDescription(event.target.value)
                })}
              />
            </div>

            <PriceInput value={price} onChange={setPrice} />
            <CategorySelect value={category} options={categoryOptions} onChange={setCategory} />
            <LocationPicker value={location} onChange={setLocation} />
            <ImageUploader previews={imagePreviews} onFilesSelected={handleFiles} onRemoveImage={removeImage} />

            <Button type="submit" className="w-full sm:w-auto">
              Save Listing (UI)
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Live Listing Preview</h2>
        <ListingCard listing={previewListing} />
      </div>
    </section>
  );
}
