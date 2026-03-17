"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

interface FilterSidebarProps {
  categories: string[];
  selectedCategory: string;
  minPrice: number;
  maxPrice: number;
  locationQuery: string;
  sortBy: "newest" | "price-low-high";
  onCategoryChange: (value: string) => void;
  onMinPriceChange: (value: number) => void;
  onMaxPriceChange: (value: number) => void;
  onLocationChange: (value: string) => void;
  onSortChange: (value: "newest" | "price-low-high") => void;
  onReset: () => void;
}

export function FilterSidebar({
  categories,
  selectedCategory,
  minPrice,
  maxPrice,
  locationQuery,
  sortBy,
  onCategoryChange,
  onMinPriceChange,
  onMaxPriceChange,
  onLocationChange,
  onSortChange,
  onReset
}: FilterSidebarProps) {
  return (
    <aside className="sticky top-24 h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">Filters</h2>

      <div className="space-y-4">
        <div className="space-y-1.5">
          <Label>Price range</Label>
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="number"
              value={minPrice}
              min={0}
              onChange={(event) => onMinPriceChange(Number(event.target.value || 0))}
              placeholder="Min"
            />
            <Input
              type="number"
              value={maxPrice}
              min={0}
              onChange={(event) => onMaxPriceChange(Number(event.target.value || 0))}
              placeholder="Max"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label>Category</Label>
          <Select value={selectedCategory} onChange={(event) => onCategoryChange(event.target.value)}>
            <option value="all">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label>Location</Label>
          <Input
            value={locationQuery}
            onChange={(event) => onLocationChange(event.target.value)}
            placeholder="City, state, country"
          />
        </div>

        <div className="space-y-1.5">
          <Label>Sort by</Label>
          <Select value={sortBy} onChange={(event) => onSortChange(event.target.value as "newest" | "price-low-high")}>
            <option value="newest">Newest</option>
            <option value="price-low-high">Price: Low to High</option>
          </Select>
        </div>

        <Button variant="secondary" className="w-full" onClick={onReset}>
          Reset filters
        </Button>
      </div>
    </aside>
  );
}
