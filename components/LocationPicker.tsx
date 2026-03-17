"use client";

import type { Location } from "@/types/location";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LocationPickerProps {
  value: Location;
  onChange: (location: Location) => void;
}

export function LocationPicker({ value, onChange }: LocationPickerProps) {
  function updateField<K extends keyof Location>(field: K, fieldValue: Location[K]) {
    onChange({ ...value, [field]: fieldValue });
  }

  return (
    <div className="space-y-3 rounded-xl border border-slate-200 p-4">
      <h3 className="text-sm font-semibold text-slate-900">Location</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="city">City</Label>
          <Input id="city" value={value.city} onChange={(event) => updateField("city", event.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="state">State</Label>
          <Input id="state" value={value.state} onChange={(event) => updateField("state", event.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="country">Country</Label>
          <Input id="country" value={value.country} onChange={(event) => updateField("country", event.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="lat">Latitude</Label>
            <Input
              id="lat"
              type="number"
              value={value.lat}
              onChange={(event) => updateField("lat", Number(event.target.value || 0))}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="lng">Longitude</Label>
            <Input
              id="lng"
              type="number"
              value={value.lng}
              onChange={(event) => updateField("lng", Number(event.target.value || 0))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
