import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Listing } from "@/types/listing";

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link href={`/listing/${listing.id}`}>
      <Card className="group h-full overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-md">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={listing.images[0]}
            alt={listing.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <CardContent className="space-y-3 p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="line-clamp-2 text-sm font-semibold text-slate-900">{listing.title}</h3>
            <Badge variant="secondary">{listing.category}</Badge>
          </div>
          <p className="text-lg font-bold text-slate-900">${listing.price.toLocaleString()}</p>
          <p className="text-sm text-slate-500">
            {listing.location.city}, {listing.location.state}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
