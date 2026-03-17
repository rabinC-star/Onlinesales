"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PriceInputProps {
  value: number;
  onChange: (price: number) => void;
}

export function PriceInput({ value, onChange }: PriceInputProps) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor="price">Price</Label>
      <Input
        id="price"
        type="number"
        min={0}
        value={value}
        onChange={(event) => onChange(Number(event.target.value || 0))}
        placeholder="Enter price"
      />
    </div>
  );
}
