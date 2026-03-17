"use client";

import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

interface CategorySelectProps {
  value: string;
  options: string[];
  onChange: (category: string) => void;
}

export function CategorySelect({ value, options, onChange }: CategorySelectProps) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor="category">Category</Label>
      <Select id="category" value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">Select category</option>
        {options.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
    </div>
  );
}
