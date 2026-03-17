import { MapPin } from "lucide-react";

import type { Location } from "@/types/location";

interface MapPreviewProps {
  location: Location;
  compact?: boolean;
}

export function MapPreview({ location, compact = false }: MapPreviewProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-100 via-cyan-100 to-slate-100 ${compact ? "h-40" : "h-72"}`}
    >
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_center,_rgba(30,64,175,0.18)_0,_transparent_60%)]" />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-blue-700">
        <MapPin className="h-7 w-7" />
        <p className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium shadow">
          {location.city}, {location.state}
        </p>
      </div>
      <div className="absolute bottom-3 left-3 rounded-lg bg-white/90 px-2.5 py-1 text-xs text-slate-500 shadow-sm">
        Lat: {location.lat.toFixed(3)}, Lng: {location.lng.toFixed(3)}
      </div>
    </div>
  );
}
